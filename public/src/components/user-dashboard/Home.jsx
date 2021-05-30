/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import styles from './home_nav.module.css';
import NavBar from './Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classesReducer.classes);
  const trainers = useSelector((state) => state.trainersReducer.trainers);
  const user = useSelector((state) => state.userReducer.user);
  const userClasses = useSelector((state) => state.upcomingReducer.classes);

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
    axios.get(`/api/session/${user.user_id}`)
      .then(({ data }) => {
        dispatch({ type: 'upcoming', classes: data });
      })
      .catch((err) => console.error(err));
  }, []);

  const [ref, isVisible] = useInView({ threshold: 0 });
  const variantText = {
    visible: {
      opacity: 1,
      y: -100,
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  useEffect(() => {
    axios.get('/api/trainer-profile')
      .then(({ data }) => {
        dispatch({ type: 'profile', profile: data });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios.get('/api/trainer-profile')
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
            <motion.div
              className={`col-5 ${styles.upcoming_class}`}
            >
              <h1 className={styles.h1}>Upcoming Classes</h1>
              <div className={`${styles.class_container}`}>
                {userClasses.map((course) => (
                  <motion.div
                    whileHover={{ scale: 1.1, originX: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={styles.classWrapper}
                  >
                    <p className={styles.classTitle}>{course.class_name}</p>
                    <p>{`${course.time.split('T')[0]} at ${course.time.split('T')[1].split('.')[0].slice(0, 5)} with ${course.trainer_first_name} ${course.trainer_last_name}`}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className={`col-7 ${styles.promotion}`}>
              <div className={`${styles.promition_container}`}>
                <h1 className={styles.h1}>Trending</h1>
                <div className={`${styles.class_container_below}`}>
                  {classes.map((course) => (
                    <motion.div
                      whileHover={{ scale: 1.1, originX: 0 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={styles.classWrapper_below}
                    >
                      <p className={styles.classTitle}>{course.class_name}</p>
                      <p>{course.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <motion.div>
            <div className={`col-12 ${styles.recommend}`}>
              <motion.div
                className={`${styles.recommend_container}`}
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
              >
                <h1>BE GREATER.</h1>
                <h1>
                  FIND A TRAINER NOW
                  <ArrowRightIcon style={{ fontSize: 60, position: 'absolute', bottom: '28%' }} />
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
