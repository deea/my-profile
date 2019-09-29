import React from 'react';
import { Header, Footer } from './components';
import Main from './components/Main';
import './App.css';

function App() {
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

export default App;
