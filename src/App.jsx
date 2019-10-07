import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PlantisPage from './components/PlantisPage';
import PlantzaPage from './components/PlantzaPage';
import Error from './components/Error';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/plantis" component={PlantisPage} />
        <Route path="/plantza" component={PlantzaPage} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
