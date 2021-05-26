/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../test.module.css';
import NavBar from './TrainerNavbar';

const TrainerHome = () => {
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
      <h1>This is the trainer home page</h1>
      <div className="user-home-page">
        <NavBar />
        <div className="upcomingClasses">
          {classes.map((course, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              {course.class_name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerHome;
