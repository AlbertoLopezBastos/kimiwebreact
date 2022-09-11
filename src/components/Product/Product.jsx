import React from 'react';

import s from  './Product.module.css';

const Product = ({id,img,title,price, click}) => {

  const showPrices = false;

  return (
    <div onClick={click} className={s.product} id={id}>
      <img className={s.img} alt="Imagen del producto" src={img}></img>

      <p className={s.text}>{title}</p>
      {
        showPrices && <p className={s.price}>{price}</p> 
      }
    </div>
  )
}

export default Product;
