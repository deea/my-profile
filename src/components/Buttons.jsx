import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonWrapper = styled.div`
  justify-content: center;
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
  justify-content: center;
  margin-top: 15px;
`;

const Button = ({ url, text, target }) => (
  <ButtonWrapper>
    <Link to={url} target={target}>
      <Buttons type="button">
        {text}
      </Buttons>
    </Link>
  </ButtonWrapper>
);

Button.defaultProps = {
  target: '',
};

Button.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  target: PropTypes.string,
};


export default Button;
