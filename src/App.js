import React from 'react';
import logo from './logo.svg';
import Button from './Components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-personal">
          <h1>
            Andreea Capalnas
          </h1>
          <h2>
            Junior Full-Stack Developer | London
          </h2>
          <p>Recent graduate of the Le Wagon coding bootcamp lots more text here about what and how
          </p>
          <p>
          Recent graduate of the Le Wagon coding bootcamp lots more text here about what and how
          </p>
        </div>
        <Button />
        <div className="Work-skills">
          <div className="Skills-margin">
            <h2>Relevant Experience</h2>
            <p>Testing</p>
          </div>
          <div className="Skills-margin">
            <h2>Projects</h2>
            <p>Testing</p>
          </div>
          <div className="Skills-margin">
            <h2>Skills</h2>
            <p>Testing</p>
          </div>
        </div>
        <div className="Created-with-react">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Created through learning with React</p>
        </div>
      </header>
    </div>
  );
}

export default App;
