import React from 'react';

import s from  './Product.module.css';

export default function Product({id,img,title,price, click}) {

  const showPrices = false;

  return (
    <div onClick={click} className={s.product} id={id}>
      <img className={s.product__img} alt="Imagen del producto" src={img}></img>
      <p className={s.product__text}>{title}</p>
      { showPrices && <p className={s.product__price}>{price}</p> }
    </div>
  )
}

