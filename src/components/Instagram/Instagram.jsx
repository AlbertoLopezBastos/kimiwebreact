import React, {useState, useEffect} from 'react';

import s from  './Instagram.module.css';

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
      <h4 className="heading-3 pt-xl" style={{backgroundColor: '#f4f4f4'}}>Seguíme en Instagram!</h4>
      <h1 className=" heading-1 pb-xl" style={{backgroundColor: '#f4f4f4', paddingTop: '2rem'}}>KIMIEARTESANAL</h1>  
      <div className="instagram">

        {gramz.map(gram => (
          <a href={gram.url} key={gram.id} target="_blank" rel="noopener noreferrer" >
            <img src={gram.thumbnail} className="instagram__img" alt={gram.caption} />
          </a>
        ))}
      </div>
    </div>
  )
}
