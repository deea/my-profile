import React from 'react';
import styled from 'styled-components';
import PCarousel from './PCarousel';
import cPlantis from '../../plantis_images/cPlantis.jpg';
import dPlantis from '../../plantis_images/dPlantis.png';
import ePlantis from '../../plantis_images/ePlantis.png';
import fPlantis from '../../plantis_images/fPlantis.png';
import gPlantis from '../../plantis_images/gPlantis.png';
import hPlantis from '../../plantis_images/hPlantis.png';

const Section = styled.div`
  margin: 100px 0;
`;

const ScreenShotsWrapper = styled.div`
  margin-top: 20px;
  
  && p {
    margin: 0;
  }
`;

const ScreensAndText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
`;

const Header = styled.h3`
  font-weight: bold;
  text-align: center;
  color: #09d3ac;
  font-size: 35px !important;
`;

const YourJungleImgs = styled.img`
  max-width: 550px;
  border-radius: 5px;
  border: solid 3px #09d3ac;
  ${({ marginLeft }) => (marginLeft ? 'margin-left: 20px;' : '')}
  ${({ marginRight }) => (marginRight ? 'margin-right: 20px;' : '')}
`;

const TextInLine = styled.div`
  display: flex;
  flex-direction: column;
`;

const PScreenshots = () => (
  <ScreenShotsWrapper>
    <Section>
      <Header>Landing Page</Header>
      <p style={{ textAlign: 'center' }}>The gateway to our application where users begin their journey to a thriving bundle of green</p>
      <PCarousel />
    </Section>
    <Section>
      <Header>Your Jungle page</Header>
      <ScreensAndText>
        <YourJungleImgs src={cPlantis} alt="jungle page" marginRight />
        <TextInLine>
          <p style={{ paddingBottom: '50px' }}>Users can view their plant collection and see which of their plants needs watering.</p>
          <p>Watering plants on time not only makes for happy plants but also gives users motivational rewards in the form of seeds (level progression).</p>
        </TextInLine>
      </ScreensAndText>
      <ScreensAndText>
        <TextInLine>
          <p style={{ paddingBottom: '50px' }}>Data is stored for each plant type to know how often a plant needs watering.</p>
          <p>Information is given to users on other care factors such as: how much light is needed, what type of soil is required and more, to help keep them all thriving.</p>
        </TextInLine>
        <YourJungleImgs src={dPlantis} alt="plant info" marginLeft />
      </ScreensAndText>
    </Section>
    <Section>
      <Header>New plant to add?</Header>
      <ScreensAndText>
        <YourJungleImgs src={ePlantis} alt="add plant" marginRight />
        <p>Plants can be added to a user's jungle by selecting from one of the plant types. Each plant can be nicknamed and a photo uploaded. Once the last watering is confirmed, notifications are activated.</p>
      </ScreensAndText>
    </Section>
    <Section>
      <Header>Gamification</Header>
      <ScreensAndText>
        <p>Seeds are earned for each watering and contribute towards level progression. Each level comes with a new badge and title.</p>
        <YourJungleImgs src={fPlantis} alt="your profile page" marginLeft />
      </ScreensAndText>
      <ScreensAndText>
        <YourJungleImgs src={gPlantis} alt="social aspect on your profile page" marginRight />
        <p>The leaderboard compares users progression and gets people more involved in taking care of their plants.</p>
      </ScreensAndText>
    </Section>
    <Section>
      <Header>Social</Header>
      <ScreensAndText>
        <p>Users can follow their friends, get inspiration from others by browsing their jungles and growing the same kind of plants their friends have.</p>
        <YourJungleImgs src={hPlantis} alt="other people's plants" marginLeft />
      </ScreensAndText>
    </Section>
    <p>Please note Plantis web application has been developed with the intention to learn and apply the knowledge gained during the bootcamp in a collaborative and real-life like setting. It is not a complete product at this stage (hopefully it will be at some point!).</p>
  </ScreenShotsWrapper>
);

export default PScreenshots;
