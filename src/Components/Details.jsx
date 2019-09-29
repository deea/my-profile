import React from 'react';
import styled from 'styled-components';

const DetailsMargin = styled.div`
    margin: 0px 100px;
`;

const ProjectsCoding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Details = ({ header, children }) => (
    <DetailsMargin>
        <h2>{header}</h2>
        <ProjectsCoding>
            {children}
        </ProjectsCoding>
    </DetailsMargin>
)

export default Details