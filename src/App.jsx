import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PlantisPage from './components/PlantisPage';
import Error from './components/Error';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/plantis" component={PlantisPage} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
