import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import aPlantis from '../../plantis_images/aPlantis.png';
import bPlantis from '../../plantis_images/bPlantis.png';

const CarouselAndText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CarouselShadow = styled.div`
  max-width: 100vw;
`;

const CarouselText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

const HomepageImg = styled.img`
  width: 1000px;
  height: 400px;
`;

const CarouselWrapper = styled.div`
  width: 700px;
  height: 450px;
`;

const PCarousel = () => (
  <CarouselAndText>
    <CarouselText>
      <p>This is the landing page - once you create an account you have the option to visit your jungle or add a new plant to it. The bottom part of the page is a short description of how the app works.</p>
    </CarouselText>
    <CarouselWrapper>
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
          <HomepageImg src={aPlantis} alt="Homepage" />
          <HomepageImg src={bPlantis} alt="How it works" />
        </Slider>
      </CarouselShadow>
    </CarouselWrapper>
  </CarouselAndText>
);

export default PCarousel;
