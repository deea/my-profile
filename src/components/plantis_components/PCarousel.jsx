import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import aPlantis from '../../plantis_images/aPlantis.png';
import bPlantis from '../../plantis_images/bPlantis.png';

const CarouselShadow = styled.div`
  max-width: 100vw;
`;

const HomepageImg = styled.img`
  width: 900px;
  height: 550px;
`;

const CarouselWrapper = styled.div`
  width: 900px;
  height: 550px;
  margin: auto;
  align-items: center;
  padding-top: 50px;
`;

const PCarousel = () => (
  <CarouselWrapper>
    <CarouselShadow>
      <Slider
        dots
        infinite
        speed={600}
        autoplay
        autoplaySpeed={6000}
        slidesToShow={1}
        slidesToScroll={1}
      >
        <HomepageImg src={aPlantis} alt="Homepage" />
        <HomepageImg src={bPlantis} alt="How it works" />
      </Slider>
    </CarouselShadow>
  </CarouselWrapper>
);

export default PCarousel;
