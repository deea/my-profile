import React from 'react';
import styled from 'styled-components';
import meSquare from '../meSquare.jpg';

const AvatarImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 30%;
`;

const Avatar = () => (
  <AvatarImg src={meSquare} alt="avatar" />
);

export default Avatar;
