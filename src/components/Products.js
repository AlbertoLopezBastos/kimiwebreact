import React from 'react'

export default function Products(props) {

  let containerStyles = props.dark ? "products-container ": "products-container products-container-white ";
  let productStyles = "";
  switch(props.rows){
    case(1):
      productStyles+= "products products--single";
      break;
    case(2):
      productStyles+= "products products--double";
      break;
    case(3):
      productStyles+= "products products--triple";
      break;
    default:
      break;
  }

  return (
    <section id={props.id} className={containerStyles}>
      <h1 className="heading-1" data-aos="fade-up">{props.title}</h1>
      <h2 className="heading-2 mb-xl" data-aos="fade-up">{props.subtitle}</h2>
      <div className={productStyles} data-aos="fade-up">
        {props.children}
      </div>
    </section>
  )
}
