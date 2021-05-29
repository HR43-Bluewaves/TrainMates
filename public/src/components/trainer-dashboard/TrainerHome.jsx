/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import NavBar from './TrainerNavbar';
import styles from './home_nav.module.css';
import Login from '../forms/Login';

const TrainerHome = () => {
  const [classes, setClasses] = useState([]);
  const [modalType, setModalType] = useState('');
  const user = useSelector((state) => state.userReducer.user);
  console.log(user);

  const addClass = () => {
    setModalType('class');
  };
  const modalClose = () => {
    setModalType('');
  };
  useEffect(() => {
    axios.get('http://localhost:3000/api/classes')
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Login modalClose={modalClose} modalType={modalType} userId={user.trainer_id} />
      <div className={styles.home}>
        <NavBar addClass={addClass} />
        <div className="container">
          <div className={styles.row}>
            <motion.div
              className={`col-5 ${styles.upcoming_class}`}
            >
              <h1 className={styles.h1}>Upcoming Classes</h1>
              <div className={`${styles.class_container}`}>
                {classes.map((course) => (
                  <motion.div
                    whileHover={{ scale: 1.1, originX: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={styles.classWrapper}
                  >
                    <p className={styles.classTitle}>{course.class_name}</p>
                    <p>mm/dd/yyyy, time</p>
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
                onClick={addClass}
              >
                <h1>SHOW YOUR SKILLS.</h1>
                <h1>
                  ADD MORE CLASS NOW
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

export default TrainerHome;
