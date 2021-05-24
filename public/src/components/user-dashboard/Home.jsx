/* eslint-disable no-console */
import React from 'react';
import styles from '../test.module.css';
import NavBar from './Navbar';

const Home = () => {
  return (
    <div className={styles.div}>
      <h1>This is the home page</h1>
      <div className="user-home-page">
        <NavBar />
        <div>
        </div>
      </div>
    </div>
  );
};

export default Home;
