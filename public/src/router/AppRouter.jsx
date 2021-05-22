import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../components/Landing';
import Home from '../components/Home';

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='main'>
          <Switch>
            <Route path='/' component={Landing} exact />
            <Route path='/home' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;