import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = (props) => {

  const images = [];

  props.images.map((i) => images.push({url:i}));

  return (
    <div>
      <SimpleImageSlider
        style={{ margin: '0 auto', marginTop: '0', boxShadow: '0.5rem 0.5rem 0.4rem 0rem rgba(0,0,0,0.3)', backgroundSize: 'auto 100%' }}
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