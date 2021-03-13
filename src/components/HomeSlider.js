import React from 'react';
import ImageSlider from './ImageSlider';
import Images from './Images';

export default function HomeSlider(props) {
  return (
    <section className="home-slider">
    <ImageSlider images={Images.portada} />
    </section>
  )
}
