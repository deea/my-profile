import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DetailsStyle = styled.div`
    margin: 0px 100px;
    font-size: 24px;
`;

const ProjectsCoding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const Details = ({ header, children }) => (
  <DetailsStyle>
    <h2>{header}</h2>
    <ProjectsCoding>
      {children}
    </ProjectsCoding>
  </DetailsStyle>
);

Details.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Details;
