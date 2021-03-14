import React from 'react';
import ImageSlider from './ImageSlider';
import Images from './Images';

export default function HomeSlider(props) {
  return (
    <section className="home-slider"  style={{boxShadow:"0rem 0.4rem 0.4rem 0rem rgba(0,0,0,0.2)"}}>
    <ImageSlider images={Images.portada} />
    </section>
  )
}
