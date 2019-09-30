import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CreatedWithReact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 8px;
`;

const IconSocial = styled.div`
  margin: 16px 8px 0px 8px;
`;

const SocialMedia = ({ icon, url }) => (
  <CreatedWithReact>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <IconSocial>{icon}</IconSocial>
    </a>
  </CreatedWithReact>
);

SocialMedia.propTypes = {
  icon: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialMedia;
