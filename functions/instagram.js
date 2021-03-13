require('isomorphic-fetch');

const url = 'https://www.instagram.com/graphql/query/?query_hash=142323d64886122307be10013ad2dcc44&variables={%22id%22:10879409002,%22first%22:9}';

const cache = {
  lastFetch: 0,
  posts: []

}

async function getPosts(){
  // cache in 
  console.log('cache on init', cache.posts)
  const timeSinceLastFetch = Date.now() - cache.lastFetch;
  if(timeSinceLastFetch <= 1800000){
    console.log('will return cache')
    return cache.posts;
  }
  console.log('cache is old, will fetch new posts')
  const data = await fetch(url)
                    .then(res => {
                      console.log('new posts fetched')
                      return res.json()
                    })
                    .catch(err => { 
                      console.log('error on fetch', err)
                      return [];
                    });
  console.log('variable with posts fetched', data)
  if(data === [] || data.status === 'fail'){
    console.log('data is [] will return that')
    return [];
  }  

  const posts = slimUpPosts(data);
  console.log('posts slimed', posts)
  console.log('will create new cache');
  cache.lastFetch = Date.now();
  cache.posts = posts;
  console.log('new cache created', cache)
  return posts;
}

function slimUpPosts(response){
  if(response.data){
    console.log('slimpUpPosts, will slim ', response.data)
    return response.data.user.edge_owner_to_timeline_media.edges.map(edge=> ({
      thumbnail: edge.node.thumbnail_src,
      url: `https://instagram.com/p/${edge.node.shortcode}`,
      //caption: edge.node.edge_media_to_caption.edges[0].node ? edge.node.edge_media_to_caption.edges[0].node.text : '',
      id: edge.node.id
    }));
  }
  else return [];
}

exports.handler = async function (event, context, callback) {
  const posts = await getPosts();
  console.log('final result', posts);
  console.log('final cache', cache);
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(posts)
    }
  );
};