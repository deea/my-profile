import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const HeaderPersonal = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`;

const Header = ({ name, position }) => (
  <AppHeader>
    <HeaderPersonal>
      <h1>{name}</h1>
      <h2>{position}</h2>
    </HeaderPersonal>
    <Avatar />
  </AppHeader>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Header;
