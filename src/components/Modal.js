import React from 'react';
import ReactDom from 'react-dom';
import ImageSlider from './ImageSlider';

export default function Modal({open, img, desc, title, onClose}){ 
  if(!open) return null;

    return ReactDom.createPortal(
      <div>
        <div className="overlay" onClick={onClose}></div>
        <div className="modal">
        <button className="modal__closeBtn" onClick={onClose}>&#10005;</button>
          <div className="modal__container">  
            <ImageSlider width="100%" images={img} />
            <div className="modal__text">
              <div className="modal__title">{title}</div>
              <div className="modal__desc">{desc}</div>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById('modal-root')
    )  
}
