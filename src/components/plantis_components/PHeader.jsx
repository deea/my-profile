import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin-bottom: 40px;

  && h1 {
    font-size: 60px;
    color: #66925d;
  }
`;

const PHeader = () => (
  <HeaderWrapper>
    <h1>Plantis Project</h1>
    <h3>Project developed in the last two weeks of the bootcamp in a team of 4. I had pitched the idea and at least three of my peers chose to be part of its developement. Together with Alan, Mark and Stan, we built this great web application that helps people look after their home plants through watering reminders, motivational rewards and level progression to learder boards and social interaction.</h3>
  </HeaderWrapper>
);

export default PHeader;
