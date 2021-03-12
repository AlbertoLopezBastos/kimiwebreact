import React, {useState, useEffect} from 'react';

const url = '/.netlify/functions/instagram';


function useInstagram(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setPosts(data);
    })
  }, []);

  return posts;
}

export default function Instagram() {
  const gramz = useInstagram();
  return (
    <div className="instagram-container">
      <h5 className="heading-5 pt-xxl">Seguime en Instagram!</h5>
      <h2 className=" heading-2 pt-sm pb-xl">KIMIEARTESANAL</h2>  
      <div className="instagram">

        {gramz.map(gram => (
          <a href={gram.url} key={gram.id} >
            <img src={gram.thumbnail} className="instagram__img" alt={gram.caption} />
          </a>
        ))}
      </div>
    </div>
  )
}
