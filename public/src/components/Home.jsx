import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import styles from './test.module.css';

const Home = () => {
  const history = useHistory();
  const handleTrainers = () => {
    history.push('/trainers');
  };
  return (
    <div className={styles.div}>
      <h1>This is the home page</h1>
      <div className="userHomePage">
        <Nav className="navbar">
          <input type="text" placeholder="Search..." />
          <Button className="homeButton" type="submit">
            Home
          </Button>
          <Button className="trainers-button" type="submit" onClick={handleTrainers}>
            Trainers
          </Button>
          <Button className="classes" type="submit">
            Classes
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Home;
