import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button className="App-link" onClick={onClick} type="button">
    Contact me
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
