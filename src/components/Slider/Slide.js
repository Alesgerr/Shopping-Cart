import Slider from 'react-slick';
import React from 'react'

const CarouselHeader = () => {
   const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div>
      <Slider {...settings}>
         <div>
            <img src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg" alt="" />
         </div>
         <div>
         <img src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg" alt="" />
         </div>

      </Slider>  
    </div>
  )
}

export default CarouselHeader