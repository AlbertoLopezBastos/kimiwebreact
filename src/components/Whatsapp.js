import React from 'react';
import icons from '../img/sprite.svg';

export default function Whatsapp() {
  return (
    <a className="whatsapp" target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?phone=541173679175`}>
      <svg className="whatsapp-icon">        
        <use xlinkHref={`${icons}#icon-whatsapp`}></use>
      </svg>
    </a>
  )
}
