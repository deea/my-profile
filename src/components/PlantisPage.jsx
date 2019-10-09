import React from 'react';
import styled from 'styled-components';
import PHeader from './plantis_components/PHeader';
import PVideo from './plantis_components/PVideo';
import PScreenshots from './plantis_components/PScreenshots';


const PageWrapper = styled.div`
  max-width: 100vw;
  margin: 0px 50px;
  padding: 10px 40px;

  && h3 {
    font-size: 25px;
  }

  && p {
    font-size: 20px;
  }
`;

const PlantisPage = () => (
  <div style={{
    background: 'linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)), url("https://images.pexels.com/photos/1227648/pexels-photo-1227648.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    paddingBottom: '50px',
  }}
  >
    <PageWrapper>
      <PHeader />
      <PVideo />
      <PScreenshots />
    </PageWrapper>
  </div>
);

export default PlantisPage;
