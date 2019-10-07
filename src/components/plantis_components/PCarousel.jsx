import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import aPlantisHomepage from '../../plantis_images/aPlantisHomepage.png';
import bPlantisHomepageHowItWorks from '../../plantis_images/bPlantisHomepageHowItWorks.png';

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
  margin: 0px 30px;
`;

const HomepageImg = styled.img`
  width: 1000px;
  height: 400px;
`;

const CarouselWrapper = styled.div`
  width: 1000px;
  height: 450px;
  margin: 40px 0px;
  padding: 20px 0px;
`;

const PCarousel = () => (
  <CarouselAndText>
    <CarouselText>
      <h3>Landing Page</h3>
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
          <HomepageImg src={aPlantisHomepage} alt="Homepage" />
          <HomepageImg src={bPlantisHomepageHowItWorks} alt="How it works" />
        </Slider>
      </CarouselShadow>
    </CarouselWrapper>
  </CarouselAndText>
);

export default PCarousel;
