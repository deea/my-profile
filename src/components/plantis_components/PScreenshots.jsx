import React from 'react';
import styled from 'styled-components';
import PCarousel from './PCarousel';
import cPlantis from '../../plantis_images/cPlantis.jpg';
import dPlantis from '../../plantis_images/dPlantis.png';
import ePlantis from '../../plantis_images/ePlantis.png';
import fPlantis from '../../plantis_images/fPlantis.png';
import gPlantis from '../../plantis_images/gPlantis.png';
import hPlantis from '../../plantis_images/hPlantis.png';

const ScreenShotsWrapper = styled.div`
  margin-top: 20px;

  && h3 {
    text-align: center;
    font-weight: bold;
  }
`;

const ScreensText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`;

const ScreensAndText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0px;
`;

const JungleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
`;

const YourJungleImgs = styled.img`
  max-width: 550px;
  margin-top: 15px;
`;

const PScreenshots = () => (
  <ScreenShotsWrapper>
    <h3>Explore below screenshots of the application</h3>
    <PCarousel />
    <ScreensAndText>
      <JungleWrapper>
        <YourJungleImgs src={cPlantis} alt="jungle page" />
      </JungleWrapper>
      <ScreensText>
        <h3>Your plants page aka Your Jungle</h3>
        <p>Once you clicked on the Visit Jungle option you are taken to your plants, where you can see which need to be watered. Once you water them, click on Plant Watered and you receive 20 seeds as a reward per each plant you have watered. </p>
      </ScreensText>
      <YourJungleImgs src={dPlantis} alt="plant info" />
    </ScreensAndText>
    <ScreensAndText>
      <ScreensText>
        <h3>Adding a new plant to your jungle</h3>
        <p>When you have a new plant, you can added to your jungle by selecting from the prepopulated list or searching for yours.</p>
      </ScreensText>
      <JungleWrapper>
        <YourJungleImgs src={ePlantis} alt="add plant" />
      </JungleWrapper>
    </ScreensAndText>
    <ScreensAndText>
      <JungleWrapper>
        <YourJungleImgs src={fPlantis} alt="your profile page" />
      </JungleWrapper>
      <ScreensText>
        <h3>Your profile and progress</h3>
        <p>The seeds you earn for each watering count towards a level progression along with a badge system. Each time you reach a new set level you also receive a badge specifying the it. You start of from being a Plant-Killer then progress to First Aider and so on. You are also competing against others using the app. You can follow people to get inspiration from their jungle in case there is something you like. Onced you follow them you receive notifications of their latest additions.</p>
      </ScreensText>
      <JungleWrapper>
        <YourJungleImgs src={gPlantis} alt="social aspect on your profile page" />
      </JungleWrapper>
    </ScreensAndText>
    <ScreensAndText>
      <ScreensText>
        <h3>Looking for plants inspiration?</h3>
        <p>The seeds you earn for each watering count towards a level progression along with a badge system. Each time you reach a new set level you also receive a badge specifying the it. You start of from being a Plant-Killer then progress to First Aider and so on.</p>
      </ScreensText>
      <JungleWrapper>
        <YourJungleImgs src={hPlantis} alt="other people's plants" />
      </JungleWrapper>
    </ScreensAndText>
  </ScreenShotsWrapper>
);

export default PScreenshots;
