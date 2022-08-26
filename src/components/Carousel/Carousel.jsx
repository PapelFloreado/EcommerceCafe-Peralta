import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "./assets/img/coffe-slider2.jpg"
import slider2 from "./assets/img/coffe-slider3.jpg"
import slider3 from "./assets/img/coffe-slider.jpg"



function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;