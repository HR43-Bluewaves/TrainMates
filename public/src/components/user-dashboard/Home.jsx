/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import styles from './home_nav.module.css';
import NavBar from './Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classesReducer.classes);
  const trainers = useSelector((state) => state.trainersReducer.trainers);
  const user = useSelector((state) => state.userReducer.user);

  const randomClass = () => {
    const randomIndex = Math.floor(Math.random() * classes.length);
    return classes[randomIndex];
  };

  const [promo, setPromo] = useState(randomClass());

  useEffect(() => {
    axios.get('/api/classes')
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: 'classes', classes: data });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios.get('/api/trainers')
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: 'trainers', trainers: data });
      })
      .catch((err) => console.error(err));
  }, []);


  return (
    <div className={styles.home}>
      <div className="user-home-page">
        <NavBar />
        <div className="container">
          <div className={styles.row}>
            <div className={`col-4 ${styles.upcoming_class}`}>
              <div className={`${styles.class_container}`}>
                <h1>Upcoming Classes</h1>
              </div>
            </div>
            <div className={`col-8 ${styles.promotion}`}>
              <div className={`${styles.promition_container}`}>
                <h1>Promotion</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={`col-12 ${styles.recommend}`}>
            <div className={`${styles.recommend_container}`}>
              <h1>Recommend</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
