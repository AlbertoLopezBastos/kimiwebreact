import React from 'react'

import s from  './Buy.module.css';

const Buy = () => {
  return (
    <section id="buy" className={s.buy}>
      <div className={s.container}>
        <h2 className="heading-1" data-aos="fade-up">Cómo comprar?</h2>

        <h3 className=" heading-4" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, possimus!</h3>  

        <a href="https://www.instagram.com/kimieartesanal/" target="_blank" rel="noreferrer" className={`${s.btn} mb-xl`} data-aos="fade-up">Contactame por Instagram</a>
      </div>
    </section>
  )
}

export default Buy;