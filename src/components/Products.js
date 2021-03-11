import React from 'react'

export default function Products(props) {
  return (
    <section id={props.id} className={props.dark ? "products-container": "products-container products-container-white"}>
      <h2 className="heading-2" data-aos="fade-up">{props.title}</h2>
      <h3 className="heading-3" data-aos="fade-up">{props.subtitle}</h3>
      <div className="products" data-aos="fade-up">
        {props.children}
      </div>
    </section>
  )
}
