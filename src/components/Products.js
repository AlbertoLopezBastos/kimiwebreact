import React from 'react'

export default function Products(props) {

  let containerStyles = props.dark ? "products-container ": "products-container products-container-white ";

  return (
    <section id={props.id} className={containerStyles}>
      <h1 className="heading-1" data-aos="fade-up">{props.title}</h1>
      <h2 className="heading-2 mb-xl" data-aos="fade-up">{props.subtitle}</h2>
      <div className="products" data-aos="fade-up">
        {props.children}
      </div>
    </section>
  )
}
