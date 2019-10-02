import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PlantisScreens from './components/PlantisScreens';
import PlantzaScreens from './components/PlantzaScreens';
import Error from './components/Error';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/plantis" component={PlantisScreens} />
        <Route path="/plantza" component={PlantzaScreens} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
