import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import aPlantisHomepage from '../plantis_images/aPlantisHomepage.png';
import bPlantisHomepageHowItWorks from '../plantis_images/bPlantisHomepageHowItWorks.png';


const HomepageImg = styled.img`
  width: 1000px;
  height: 400px;
`;

const CarouselShadow = styled.div`
  max-width: 100vw;
`;

const SimpleSlider = () => (
  <CarouselShadow>
    <Slider
      dots
      infinite
      speed={500}
      autoplay
      autoplaySpeed={3000}
      slidesToShow={1}
      slidesToScroll={1}
    >
      <HomepageImg src={aPlantisHomepage} alt="Homepage" />
      <HomepageImg src={bPlantisHomepageHowItWorks} alt="How it works" />
    </Slider>
  </CarouselShadow>
);

export default SimpleSlider;
