import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaHeartbeat } from 'react-icons/fa';
import SocialMedia from './SocialMedia';
import logo from '../logo.svg';


const linkedIn = 'https://www.linkedin.com/in/andreea-capalnas/';
const gitHub = 'https://github.com/deea';

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2em;
  border-top: 2px solid #09d3ac;
`;

const CreatedWithReact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CreatedWithReactPTag = styled.p`
font-size: 14px;
`;

const IconMargin = styled(FaHeartbeat)`
  margin: 0 4px;
`;

const Footer = () => (
  <div>
    <SocialIcons>
      <SocialMedia
        url={linkedIn}
        icon={<FaLinkedin />}
      />
      <SocialMedia
        url={gitHub}
        icon={<FaGithub />}
      />
    </SocialIcons>
    <CreatedWithReact>
      <img src={logo} className="App-logo" alt="logo" />
      <CreatedWithReactPTag>
        App created with
        <IconMargin />
        through learning with React
      </CreatedWithReactPTag>
    </CreatedWithReact>

  </div>
);

export default Footer;
