import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { Button } from 'react-bootstrap';

const Landing = (props) => {
  const history = useHistory();
  const handleLogin = () => {
    history.push('/home');
  }
  return (
    <div className = 'login'>
      <Button variant="info" type="submit" onClick={handleLogin}>
        Login to mates
      </Button>
    </div>
  );
};

export default Landing;