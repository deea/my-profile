import React from 'react';
import styled from 'styled-components';
import meSquare from '../meSquare.jpg';
import Pdf from '../AndreeaCapalnasResume1.pdf';

const AvatarText = styled.div`
  position: absolute;
  top: 100px;
  left: 35px;
  color: white;
  visibility: hidden;
  font-size: 16px;
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 5px;
  

  &:hover ${AvatarText} {
    visibility: visible;
  }
`;

const AvatarImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 30%;
  border: 2px solid #09d3ac;

  :hover {
    opacity: 0.3;
  }
`;

const Avatar = () => (
  <a href={Pdf} target="_blank" rel="noopener noreferrer">
    <Wrapper>
      <AvatarImg
        src={meSquare}
        alt="avatar"
      />
      <AvatarText>
        View CV
      </AvatarText>
    </Wrapper>
  </a>
);

export default Avatar;
