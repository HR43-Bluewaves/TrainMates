/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../test.module.css';
import NavBar from './Navbar';

const Home = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/classes')
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.div}>
      <h1>This is the home page</h1>
      <div className="user-home-page">
        <NavBar />
        <div className="upcomingClasses">
          {classes.map((course) => (
            <div key={course.id}>
              {course.class_name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
