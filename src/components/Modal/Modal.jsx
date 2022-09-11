import React from 'react';
import ReactDom from 'react-dom';
import ImageSlider from '../ImageSlider';

import s from  './Modal.module.css';

const Modal = ({open, img, desc, title, onClose}) => { 
  if(!open) return null;

    return ReactDom.createPortal(
      <>
        <div className={s.overlay} onClick={onClose}></div>

        <div className={s.modal}>
          <button className={s.closeBtn} onClick={onClose}>&#10005;</button>

          <div className={s.container}>
            <div className={s.sliderContainer}>  
              <ImageSlider images={img} />
            </div>

            <div className={s.text}>
              <div className={s.title}>{title}</div>

              <div className={s.desc}>{desc}</div>
            </div>
          </div>
        </div>
      </>,
      document.getElementById('modal-root')
    )  
}

export default Modal;