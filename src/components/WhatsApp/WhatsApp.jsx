import React from 'react';
import icons from '../../img/sprite.svg';

import s from  './WhatsApp.module.css';

const WhatsApp = () => {
  return (
    <a className={s.whatsapp} target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?phone=541173679175`}>
      <svg className={s.icon}>        
        <use xlinkHref={`${icons}#icon-whatsapp`}></use>
      </svg>
    </a>
  )
}

export default WhatsApp;