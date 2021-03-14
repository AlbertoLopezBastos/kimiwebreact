import React from 'react';
import Images from './Images'

export default function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <h1 className="heading-1">Sobre Kimi</h1>
      <img className="about__logo" src={Images.logo} alt="kimi logo"></img>  
      <div className="about__grid pt-xl pb-xl">
        <img className="about__photo" src="https://via.placeholder.com/500x600" alt="kimi"></img>
        <div className="about__text">
          <h2 className="heading-3 pb-md">Lorem, ipsum dolor sit amet consectetur.</h2>
          <p className="about__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt quibusdam veritatis tempore fugit laudantium est rem accusamus, illum non?</p>

        </div>
      </div>
    </section>
  )
}
