import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DetailsStyle = styled.div`
    margin: 0px 30px;
    font-size: 24px;
    flex-grow: 1;
    flex-basis: 0;
    margin-top: 20px;

    && h2 {
      margin-bottom: 10px;
    }
    /* border-right: 2px solid #09d3ac; */
`;

const ProjectsCoding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin: 10px 0px 0px 0px;
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
