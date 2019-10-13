import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import PHeader from './plantis_components/PHeader';
import PVideo from './plantis_components/PVideo';
import PScreenshots from './plantis_components/PScreenshots';
import Page from './Page';

const PageWrapper = styled.div`
  && h3 {
    font-size: 25px;
  }

  && p {
    font-size: 20px;
  }
`;

const Back = styled.div`
  font-size: 16zpx;
  display: flex;
  align-items: center;
`;

const PlantisPage = () => (
  <Page imageUrl="https://images.pexels.com/photos/1227648/pexels-photo-1227648.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" darker>
    <Link to="/">
      <Back>
        <FaChevronLeft /><span style={{ marginLeft: '8px', fontSize: '24px' }}>Home</span>
      </Back>
    </Link>
    <PageWrapper>
      <PHeader />
      <PVideo />
      <PScreenshots />
    </PageWrapper>
  </Page>
);

export default PlantisPage;
