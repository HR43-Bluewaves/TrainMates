import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingTest from '../components/Landing copy';
// import Landing from '../components/Landing';
import Home from '../components/Home';
import Trainers from '../components/Trainers';
import Classes from '../components/Classes';

const AppRouter = () => (
  <BrowserRouter>
    <div className="main">
      <Switch>
        <Route path="/" component={LandingTest} exact />
        {/* <Route path="/" component={Landing} exact /> */}
        <Route path="/home" component={Home} />
        <Route path="/trainers" component={Trainers} />
        <Route path="/classes" component={Classes} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
