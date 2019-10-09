import React from 'react';
import styled from 'styled-components';
import Button from './Buttons';


const PageWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url("https://cdn.pixabay.com/photo/2018/08/31/18/21/fantasy-3645269_960_720.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

`;

const TextStyle = styled.div`
  text-align: center;
  color: white;
  padding-top: 50px;
`;

const Error = () => (
  <PageWrapper>
    <TextStyle>
      <h1>Ooops: path does not exist!</h1>
      <Button url="/" text="Back Home" />
    </TextStyle>
  </PageWrapper>
);

export default Error;
