import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import PlantisPage from './components/PlantisPage';
import './App.css';


function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/plantis" component={PlantisPage} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
}

export default App;
