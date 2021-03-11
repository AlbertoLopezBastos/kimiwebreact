import React from 'react';
import ImageSlider from './ImageSlider';
import Images from './Images';

export default function HomeSlider() {
  return (
    <section className="home-slider">
    <ImageSlider width={1906} height={600} duration={2} images={Images.portada} />
    </section>
  )
}
