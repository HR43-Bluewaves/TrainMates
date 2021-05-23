import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import styles from './test.module.css';

const Home = () => {
  const history = useHistory();
  const handleTrainers = () => {
    history.push('/trainers');
  };

  const handleClasses = () => {
    history.push('/classes');
  };

  return (
    <div className={styles.div}>
      <h1>This is the home page</h1>
      <div className="user-home-page">
        <Nav className="navbar">
          <input type="text" placeholder="Search..." />
          <Button className="" type="submit">
            Home
          </Button>
          <Button className="" type="submit" onClick={handleTrainers}>
            Trainers
          </Button>
          <Button className="" type="submit" onClick={handleClasses}>
            Classes
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Home;
