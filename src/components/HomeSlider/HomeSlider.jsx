import React from 'react';
import ImageSlider from '../ImageSlider';
import Images from '../Images';

import s from  './HomeSlider.module.css';

const HomeSlider = () => {
  return (
    <section className={s.homeSlider}  style={{boxShadow:"0rem 0.4rem 0.4rem 0rem rgba(0,0,0,0.2)"}}>
      <ImageSlider images={Images.portada} />
    </section>
  )
}

export default HomeSlider;