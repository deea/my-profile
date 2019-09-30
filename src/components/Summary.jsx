import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ShortBio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: white;
`;

const Summary = ({ text }) => (
  <ShortBio>
    <p>{text}</p>
  </ShortBio>
);

Summary.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Summary;
