import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

const Buttons = styled.button`
  background-color: #09d3ac;
  margin: 5px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  width: 200px;
  height: 35px;
  border-radius: 30px;
`;

const Button = () => (
  <ButtonsWrapper>
    <Link to="/plantis" target="_blank">
      <Buttons type="button">
        Plantis screenshots
      </Buttons>
    </Link>
    <Link to="/plantza" target="_blank">
      <Buttons type="button">
        Plantza screenshots
      </Buttons>
    </Link>
  </ButtonsWrapper>
);

export default Button;
