import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';

const Landing = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push('/home');
  };
  const handleTrainerLogin = () => {
    history.push('/trainerdashboard');
  };
  return (
    <div className="landing">
      <div className="page-1">
        <Nav className="navbar navbar-light fixed-top">
          <span className="logo_word" />
          <div className="login">
            <Button type="submit" className="trainer_signup" onClick={handleTrainerLogin}>
              Become A Trainer
            </Button>
            <Button className="signup" type="submit">
              Sign up
            </Button>
            <Button className="login-button" type="submit" onClick={handleLogin}>
              Login to mates
            </Button>
          </div>
        </Nav>
        <div className="logo_pic" />
      </div>
      <div className="page-2">
        <div className="container">
          <div className="row">
            <div className="col story-left">
              <h1>OUR</h1>
              <h1>STORY</h1>
            </div>
            <div className="col story-right">
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 action-shot-title">
              <div className="action-shot-tile-wrapper">
                <h1>ACTION</h1>
                <h1>SHOTS</h1>
              </div>
            </div>
            <div className="col-8 row action-shot-pics">
              <span className="col item-1" />
              <span className="col item-2" />
              <span className="col item-3" />
              <span className="col item-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="page-4">
        <div className="sign-up-logo" />
        <Button className="sign-up-bottom" type="submit">SIGN UP</Button>
      </div>
    </div>
  );
};

export default Landing;
