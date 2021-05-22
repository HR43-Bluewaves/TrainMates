import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../components/Landing';

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/" component={Landing} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;