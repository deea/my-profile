import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  font-size: 24px;
  color: white;
`;

const HeaderPersonal = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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
