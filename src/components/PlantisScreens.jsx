import React from 'react';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import styled from 'styled-components';
import SimpleSlider from './Carousel';
import cPlantisYourJungle from '../plantis_images/cPlantisYourJungle.png';
import dPlantisYourJungle2 from '../plantis_images/dPlantisYourJungle2.png';
import fPlantisAddPlant2 from '../plantis_images/fPlantisAddPlant2.png';
import gPlantisPlantInfo from '../plantis_images/gPlantisPlantInfo.png';
import hPlantisYourProfile from '../plantis_images/hPlantisYourProfile.png';
import iPlantisSocial from '../plantis_images/iPlantisSocial.png';
import jPlantisOtherPplPlants from '../plantis_images/jPlantisOtherPplPlants.png';


const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
  },
};

const PageWrapper = styled.div`
  max-width: 100vw;
  margin: 0px 50px;
  padding: 10px 40px;

  && h3 {
    font-size: 25px;
  }

  && p {
    font-size: 20px;
  }
`;

const HeaderWrapper = styled.div`
  margin-bottom: 40px;

  && h1 {
    font-size: 60px;
    color: #66925d;
  }
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
  border-radius: 4px;
  padding: 20px 0px;
`;

const VideoBox = styled(ReactPlayer)`
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
`;

const VideoText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`;

const ScreenShotsWrapper = styled.div`
  margin-top: 20px;

  && h3 {
    text-align: center;
    font-weight: bold;
  }
`;

const CarouselAndText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CarouselWrapper = styled.div`
  width: 1000px;
  height: 450px;
  margin: 40px 0px;
  padding: 20px 0px;
`;

const JungleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const YourJungleImgs = styled.img`
  max-width: 550px;
`;

const PlantisScreens = () => (
  <div style={{
    background: 'linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)), url("https://images.pexels.com/photos/1227648/pexels-photo-1227648.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    paddingBottom: '50px',
  }}
  >
    <PageWrapper>
      <HeaderWrapper>
        <h1>Plantis Project</h1>
        <h3>Project developed in the last two weeks of the bootcamp in a team of 4. I had pitched the idea and at least three of my peers chose to be part of its developement. Together with Alan, Mark and Stan, we built this great web application that helps people look after their home plants through watering reminders, motivational rewards and level progression to learder boards and social interaction.</h3>
      </HeaderWrapper>
      <VideoWrapper>
        <YouTube
          videoId="MGvvO2Mk-SQ"
          opts={opts}
        />
        <VideoText>
          <h3>Watch the <strong>demo</strong> from presentation night.</h3>
          <p>This was the final night of the bootcamp, where all 12 projects were presented.</p>
        </VideoText>
      </VideoWrapper>
      <ScreenShotsWrapper>
        <h3>Explore below screenshots of the application</h3>
        <CarouselAndText>
          <VideoText>
            <h3>Landing Page</h3>
            <p>This is the landing page - once you create an account you have the option to visit your jungle or add a new plant to it. The bottom part of the page is a short description of how the app works.</p>
          </VideoText>
          <CarouselWrapper>
            <SimpleSlider />
          </CarouselWrapper>
        </CarouselAndText>
        <CarouselAndText>
          <JungleWrapper>
            <YourJungleImgs src={cPlantisYourJungle} alt="jungle page" />
            <YourJungleImgs src={dPlantisYourJungle2} alt="second page in your jungle" />
          </JungleWrapper>
          <VideoText>
            <h3>Your plants page aka Your Jungle</h3>
            <p>Once you clicked on the Visit Jungle option you are taken to your plants, where you can see which need to be watered. Once you water them, click on Plant Watered and you receive 20 seeds as a reward per each plant you have watered. </p>
          </VideoText>
          <YourJungleImgs src={gPlantisPlantInfo} alt="second page in your jungle" />
        </CarouselAndText>
        <CarouselAndText>
          <VideoText>
            <h3>Adding a new plant to your jungle</h3>
            <p>When you have a new plant, you can added to your jungle by selecting from the prepopulated list or searching for yours.</p>
          </VideoText>
          <JungleWrapper>
            <YourJungleImgs src={fPlantisAddPlant2} alt="second page in your jungle" />
          </JungleWrapper>
        </CarouselAndText>
        <CarouselAndText>
          <JungleWrapper>
            <YourJungleImgs src={hPlantisYourProfile} alt="second page in your jungle" />
            <YourJungleImgs src={iPlantisSocial} alt="second page in your jungle" />
          </JungleWrapper>
          <VideoText>
            <h3>Your profile and progress</h3>
            <p>The seeds you earn for each watering count towards a level progression along with a badge system. Each time you reach a new set level you also receive a badge specifying the it. You start of from being a Plant-Killer then progress to First Aider and so on. You are also competing against others using the app. You can follow people to get inspiration from their jungle in case there is something you like. Onced you follow them you receive notifications of their latest additions.</p>
          </VideoText>
        </CarouselAndText>
        <CarouselAndText>
          <VideoText>
            <h3>Looking for plants inspiration?</h3>
            <p>The seeds you earn for each watering count towards a level progression along with a badge system. Each time you reach a new set level you also receive a badge specifying the it. You start of from being a Plant-Killer then progress to First Aider and so on.</p>
          </VideoText>
          <JungleWrapper>
            <YourJungleImgs src={jPlantisOtherPplPlants} alt="second page in your jungle" />
          </JungleWrapper>
        </CarouselAndText>
      </ScreenShotsWrapper>
    </PageWrapper>
  </div>
);

export default PlantisScreens;
