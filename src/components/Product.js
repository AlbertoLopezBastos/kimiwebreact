import React from 'react'


export default function Product({id,img,title,price, click}) {

  const showPrices = false;

  return (
    <div onClick={click} className="product" id={id}>
      <img className="product__img" alt="Imagen del producto" src={img}></img>
      <p className="product__text">{title}</p>
      { showPrices && <p className="product__price">{price}</p> }
    </div>
  )
}

