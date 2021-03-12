require('isomorphic-fetch');

const url = 'https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={%22id%22:10879409002,%22first%22:9}';

const cache = {
  lastFetch: 0,
  posts: []

}

async function getPosts(){
  // cache in 
  const timeSinceLastFetch = Date.now() - cache.lastFetch;
  if(timeSinceLastFetch <= 1800000){
    return slimUpPosts(cache.posts);
  }
    const data = await fetch(url).then(res => res.json());

    const posts = slimUpPosts(data);
    cache.lastFetch = Date.now();
    cache.posts = posts;
    return posts;
}

function slimUpPosts(response){
  if(response.data){
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
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(posts)
    }
  );
};