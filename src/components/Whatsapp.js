import React from 'react';
import icons from '../img/sprite.svg';

export default function Whatsapp() {
  return (
    <a className="whatsapp" target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?phone=${process.env.REACT_APP_KIMI_PHONE}`}>
      <svg className="whatsapp-icon">        
        <use xlinkHref={`${icons}#icon-whatsapp`}></use>
      </svg>
    </a>
  )
}
