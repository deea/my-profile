import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin-bottom: 60px;

  && h1 {
    font-size: 55px;
    color: #09d3ac;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const PHeader = () => (
  <HeaderWrapper>
    <Flex>
      <h1>Plantis Project</h1>
    </Flex>
    <h3 style={{ fontWeight: 400 }}><i>Project developed in the last two weeks of the bootcamp in a team of 4. I had pitched the idea for Plantis and together with three of my peers - Alan, Mark and Stan - we built this web application that helps people look after their home plants through watering reminders, motivational rewards that lead to level progression, leaderboard and social features.</i></h3>
  </HeaderWrapper>
);

export default PHeader;
