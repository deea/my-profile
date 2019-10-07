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
      <h3>Watch the <strong>demo</strong> from presentation night.</h3>
      <p>This was the final night of the bootcamp, where all 12 projects were presented.</p>
    </VideoText>
  </VideoWrapper>
);

export default PVideo;
