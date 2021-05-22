import React from 'react';
import {
  useHistory,
} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Landing = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push('/home');
  };
  return (
    <div className="login">
      <Button variant="info" type="submit" onClick={handleLogin}>
        Login to mates
      </Button>
    </div>
  );
};

export default Landing;
