import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = (props) => {

  const images = [];

  props.images.map((i) => images.push({url:i}));

  return (
    <div>
      <SimpleImageSlider
        style={{ margin: '0 auto', marginTop: '0' }}
        showBullets={true}
        showNavs={true}
        navStyle={2}
        slideDuration={props.duration}
        width={props.width}
        height={props.height}
        images={images}
      />
    </div>
  );
}

export default ImageSlider;