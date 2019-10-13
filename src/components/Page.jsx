import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const linearGradient = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)),';

const Wrapper = styled.div`
  background-image: ${({ darker }) => (darker ? linearGradient : '')} url("${({ imageUrl }) => imageUrl}");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
  color: white;
  min-height: 100vh;
  min-width: 1000px
`;

const Content = styled.div`
  width: 960px;
  padding: 40px 20px;
  margin: auto;
`;

const Page = ({ children, imageUrl, darker }) => (
  <Wrapper imageUrl={imageUrl} darker={darker}>
    <Content>
      {children}
    </Content>
  </Wrapper>
);

Page.defaultProps = {
  darker: false,
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  imageUrl: PropTypes.string.isRequired,
  darker: PropTypes.bool,
};

export default Page;
