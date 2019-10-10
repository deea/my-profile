import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectName = styled.span`
  color:  #09d3ac;
`;

const ProjectDetails = ({ url, name, text }) => (
  <p>
    <span>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <ProjectName><strong>{`${name}: `}</strong></ProjectName>
        {text}
      </a>
    </span>
  </p>
);

ProjectDetails.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProjectDetails;
