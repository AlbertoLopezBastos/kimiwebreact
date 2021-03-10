import React from 'react'

export default function Product(props) {
  return (
    <div className="product" id={props.id}>
      <div className={`product__img-${props.img}`}></div>
      <p className="product__text">{props.description}</p>
      <p className="product__price">{props.price}</p>
    </div>
  )
}
