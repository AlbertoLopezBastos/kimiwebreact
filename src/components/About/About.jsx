import React from 'react';
import Images from '../Images/Images'
import s from  './About.module.css';

const About = () => {
  return (
    <section id="about" className={s.about} data-aos="fade-up">
      <h1 className="heading-1">Sobre Kimi</h1>

      <div className={`${s.about__grid} pt-xl pb-xl`}>
        <img className={s.about__logo} src={Images.logo} alt="kimi logo"></img>

        <div className={s.about__text}>
          <p className={s.about__p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt quibusdam veritatis tempore fugit laudantium est rem accusamus, illum non?</p>   

          <p className={s.about__p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt quibusdam veritatis tempore fugit laudantium est rem accusamus, illum non?</p>  

          <p className={s.about__p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt quibusdam veritatis tempore fugit laudantium est rem accusamus, illum non?</p>  

          <p className={s.about__p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt quibusdam veritatis tempore fugit laudantium est rem accusamus, illum non?</p>     
        </div>
      </div>
    </section>
  )
}

export default About;