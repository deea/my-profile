import React from 'react';
import PropTypes from 'prop-types';

const ProjectDetails = ({ url, name, text }) => (
  <p>
    <span>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {`${name}: `}
      </a>
    </span>
    {text}
  </p>
);

ProjectDetails.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProjectDetails;
