import React from 'react';
import ImageSlider from './ImageSlider';
import Images from './Images';

export default function HomeSlider(props) {
  return (
    <section className="home-slider">
    <ImageSlider width={props.width} height={600} duration={2} images={Images.portada} />
    </section>
  )
}
