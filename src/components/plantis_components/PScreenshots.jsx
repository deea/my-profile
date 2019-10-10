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
    <h3>Explore below screenshots of the application and find out more about how it works</h3>
    <PCarousel />
    <ScreensAndText>
      <JungleWrapper>
        <YourJungleImgs src={cPlantis} alt="jungle page" />
      </JungleWrapper>
      <ScreensText>
        <h3>Your plants section aka Your Jungle</h3>
        <p>Once you clicked on the Visit Jungle option you are taken to your plants section, where you can see which ones need to be watered. This is based on the last time you watered it and the plant's requirements. Once you water them, all you have to do is click on Plant Watered. This will then set the reminder for next time and gives you a reward. You receive 20 seeds for each plant you have watered when required. In addition to the watering reminders you have access to additional caring details about the plant such as how much light it needs, what type of soil and so on, to help you keep them all happy and thriving.</p>
      </ScreensText>
      <YourJungleImgs src={dPlantis} alt="plant info" />
    </ScreensAndText>
    <ScreensAndText>
      <ScreensText>
        <h3>Adding a new plant to your jungle</h3>
        <p>So how do you set the reminders? Easy - when you have a new plant, you simply add it to your jungle by selecting it from the prepopulated list or searching for the type of plant you have. Once you have identified the plant in the list, you click on it and a pop-up appears. You enter the name you want to give the plant, the day you last watered it so that the app can start calculating when the next watering should be and then you upload your own photo of your plant. By clicking Add it will be automatically added to your jungle.</p>
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
        <h3>Your profile, progress and social</h3>
        <p>The seeds you earn for each watering count towards a level progression along with a badge system. Each time you reach a new set level you also receive a badge specifying what level it is. You start at being a Plant-Killer then progress to First Aider and so on. You are also competing against others using the app and you can follow them to get inspiration from their jungle, maybe find a new plant you love and want to add to your jungle. Following friends enables notifications of their latest activity, from their plant additions, to who they started following and so on. This is a good way to get to see how others are doing.</p>
      </ScreensText>
      <JungleWrapper>
        <YourJungleImgs src={gPlantis} alt="social aspect on your profile page" />
      </JungleWrapper>
    </ScreensAndText>
    <ScreensAndText>
      <ScreensText>
        <h3>Take a peek at your friends' plants</h3>
        <p>You can click on people's names to see what plants they are growing, read about their level of care and see if you would want to buy one to add it to your jungle.</p>
      </ScreensText>
      <JungleWrapper>
        <YourJungleImgs src={hPlantis} alt="other people's plants" />
      </JungleWrapper>
    </ScreensAndText>
    <h3><em>Disclaimer: Please note Plantis web application has been developed with the intention to learn and apply the knowledge gained during the bootcamp in a collaborative and real-life like setting. It is not a complete product at this stage.</em></h3>
  </ScreenShotsWrapper>
);

export default PScreenshots;
