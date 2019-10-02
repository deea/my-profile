import React from 'react';
import { Header, Footer } from './index';
import Main from './Main';
import '../App.css';


function Home() {
  return (
    <div className="App">
      <div className="Content">
        <Header
          name="Andreea Capalnas"
          position="Junior Full-Stack Developer | London"
        />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
