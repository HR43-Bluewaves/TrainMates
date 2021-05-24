import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingTest from '../components/Landing copy';
// import Landing from '../components/Landing';
import Home from '../components/Home';
import Trainers from '../components/Trainers';
import Classes from '../components/classes/Classes';
import Chat from '../components/Chat';
import Cart from '../components/Cart';
import Notifications from '../components/Notifications';

const AppRouter = () => (
  <BrowserRouter>
    <div className="main">
      <Switch>
        <Route path="/" component={LandingTest} exact />
        {/* <Route path="/" component={Landing} exact /> */}
        <Route path="/home" component={Home} />
        <Route path="/trainers" component={Trainers} />
        <Route path="/classes" component={Classes} />
        <Route path="/chat" component={Chat} />
        <Route path="/cart" component={Cart} />
        <Route path="/notifications" component={Notifications} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
