import React from 'react';
import ReactDom from 'react-dom';
import ImageSlider from '../ImageSlider';

import s from  './Modal.module.css';

export default function Modal({open, img, desc, title, onClose}){ 
  if(!open) return null;

    return ReactDom.createPortal(
      <div>
        <div className={s.overlay} onClick={onClose}></div>
        <div className={s.modal}>
        <button className={s.modal__closeBtn} onClick={onClose}>&#10005;</button>
          <div className={s.modal__container}>  
            <ImageSlider width="100%" images={img} />
            <div className={s.modal__text}>
              <div className={s.modal__title}>{title}</div>
              <div className={s.modal__desc}>{desc}</div>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById('modal-root')
    )  
}
