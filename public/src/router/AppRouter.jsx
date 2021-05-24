import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingTest from '../components/Landing copy';
// import Landing from '../components/Landing';
import Home from '../components/user-dashboard/Home';
import Trainers from '../components/trainers/Trainers';
import Classes from '../components/classes/Classes';
import Trainee from '../components/trainees/Trainee';
import Chat from '../components/Chat';
import Cart from '../components/Cart';
import Notifications from '../components/Notifications';
// Trainer dashboard
import TrainerHome from '../components/trainer-dashboard/TrainerHome';

const AppRouter = () => (
  <BrowserRouter>
    <div className="main">
      <Switch>
        <Route path="/" component={LandingTest} exact />
        {/* <Route path="/" component={Landing} exact /> */}
        <Route path="/home" component={Home} />
        <Route path="/trainers" component={Trainers} />
        <Route path="/classes" component={Classes} />
        <Route path="/trainees" component={Trainee} />
        <Route path="/chat" component={Chat} />
        <Route path="/cart" component={Cart} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/trainerdashboard" component={TrainerHome} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
