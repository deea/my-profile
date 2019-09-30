import React from 'react';
import PropTypes from 'prop-types';


const ProjectDetails = ({ url, projectName, text }) => (
  <p>
    <span>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {`${projectName}: `}
      </a>
    </span>
    {text}
  </p>
);

ProjectDetails.propTypes = {
  url: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProjectDetails;
