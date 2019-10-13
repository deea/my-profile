import React from 'react';
import { Header, Footer } from './index';
import Main from './Main';
import Page from './Page';
import '../App.css';

const Home = () => (
  <Page imageUrl="https://images.unsplash.com/photo-1483982258113-b72862e6cff6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
    <Header
      name="Andreea Capalnas"
      position="Junior Full-Stack Developer | London"
    />
    <Main />
    <Footer />
  </Page>
);

export default Home;
