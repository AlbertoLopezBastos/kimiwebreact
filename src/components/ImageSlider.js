import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = (props) => {

  const images = [];

  props.images.map((i) => images.push({url:i}));
  
  return (
    <div className="carousel-wrapper" style={{backgroundColor:"0rem 0.4rem 0.4rem 0rem black"}}>
      <Carousel width={props.width} showThumbs={false} infiniteLoop={true} autoPlay interval={5000} transitionTime={1000} stopOnHover={false}>
      {props.images.map((img,idx) => {
        return (
        <div key={idx}>
          <img src={img} alt="carousel img" />
        </div>
        )
      })}
      </Carousel>      
    </div>
  );
}

export default ImageSlider;