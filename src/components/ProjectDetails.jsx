import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectName = styled.span`
  color:  #09d3ac;
`;

const ProjectText = styled.a`
  :hover {
    text-decoration: underline;
  }
`;

const ProjectDetails = ({ url, name, text }) => (
  <p>
    <span>
      <ProjectText href={url} target="_blank" rel="noopener noreferrer">
        <ProjectName><strong>{`${name}: `}</strong></ProjectName>
        {text}
      </ProjectText>
    </span>
  </p>
);

ProjectDetails.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProjectDetails;
