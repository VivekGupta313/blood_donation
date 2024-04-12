import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 4000,    // Set autoplay interval in milliseconds (5 seconds)
  };

  return (
      <Slider {...settings}>
        <div>
          <img src="/src/images/slider/b1.png" alt="Slide 1"style={{width:'100%'}} />
        </div>
        <div>
          <img src="/src/images/slider/b2.png" alt="Slide 2"style={{width:'100%'}} />
        </div>
        <div>
          <img src="/src/images/slider/b1.png" alt="Slide 3"style={{width:'100%'}} />
        </div>
        <div>
          <img src="/src/images/slider/b2.png" alt="Slide 4"style={{width:'100%'}} />
        </div>
      </Slider>
  );
};

export default CarouselSlider;
