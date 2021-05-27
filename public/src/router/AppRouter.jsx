/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/* eslint-disable import/no-named-as-default */
import LandingTest from '../components/landing/Landing_copy';
// import Landing from '../components/Landing';
import Home from '../components/user-dashboard/Home';
import Trainers from '../components/trainers/Trainers';
/* eslint-disable import/no-named-as-default */
import Classes from '../components/classes/Classes';
import Trainee from '../components/trainees/Trainee';
import Chat from '../components/Chat';
import Cart from '../components/Cart';
import Notifications from '../components/Notifications';
// Trainer dashboard
import TrainerHome from '../components/trainer-dashboard/TrainerHome';
import userInformation from '../components/userInformation/UserInformation';
// Test
import FullClass from '../components/classes/FullClass';
import TrainerProfile from '../components/trainers/TrainerProfile';

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
        <Route path="/user" component={userInformation} />
        <Route path="/class-info" component={FullClass} />
        <Route path="/trainer-profile" component={TrainerProfile} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
