import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

const opts = {
  height: '500',
  width: '900',
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

const GreenBorder = styled(YouTube)`
  border: solid 3px #09d3ac;
`;


const PVideo = () => (
  <>
    <p style={{ textAlign: 'center' }}>See Plantis in action by watching this <strong style={{ color: '#09d3ac' }}>demo</strong> video from the nerve-racking presentation night</p>
    <VideoWrapper>
      <GreenBorder
        videoId="MGvvO2Mk-SQ"
        opts={opts}
      />
    </VideoWrapper>
  </>
);

export default PVideo;
