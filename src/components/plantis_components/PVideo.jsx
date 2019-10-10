import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 0,
  },
};

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
  border-radius: 4px;
  padding: 20px 0px;
`;

const VideoText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`;

const PVideo = () => (
  <VideoWrapper>
    <YouTube
      videoId="MGvvO2Mk-SQ"
      opts={opts}
    />
    <VideoText>
      <h3>See Plantis in action by watching this <strong>demo</strong> video from the nerve-racking presentation night.</h3>
      <p>It was our final night of the bootcamp, where 12 projects that had been preselected to be developed were being demoed. It wasn't an easy task to present in front of alomst 100 people, especially when you want to ensure that you render the potential of the app along wiht the hard work and enthusiams that has gone into it. But we did it and we couldn't have been prouder!</p>
    </VideoText>
  </VideoWrapper>
);

export default PVideo;
