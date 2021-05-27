/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
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
        dispatch({ type: 'classes', classes: data });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios.get('/api/trainers')
      .then(({ data }) => {
        dispatch({ type: 'trainers', trainers: data });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios.get('/api/trainer-reviews')
      .then(({ data }) => {
        dispatch({ type: 'reviews', reviews: data });
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
                {classes.map((course) => (
                  <motion.div
                    className={styles.classWrapper}
                    initial={{ x: 100 * course.class_id }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
                  >
                    <p className={styles.classTitle}>{course.class_name}</p>
                    <p>{course.description}</p>
                  </motion.div>
                ))}
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
