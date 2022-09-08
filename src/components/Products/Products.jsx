import React from 'react'

import s from  './Products.module.css';

const Products = (props) => {

  let containerStyles = props.dark ? `${s.productsContainer}`: `${s.productsContainer} ${s.productsContainerWhite}`;

  return (
    <section id={props.id} className={containerStyles}>
      <h1 className="heading-1" data-aos="fade-up">{props.title}</h1>

      <h2 className="heading-2 mb-xl" data-aos="fade-up">{props.subtitle}</h2>

      <div className={s.products} data-aos="fade-up">
        {props.children}
      </div>
    </section>
  )
}

export default Products;