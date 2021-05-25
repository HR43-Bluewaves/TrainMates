/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../test.module.css';
import NavBar from './Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classesReducer.classes);
  const trainers = useSelector((state) => state.trainersReducer.trainers);
  const user = useSelector((state) => state.userReducer.user)

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
    axios.get('/api/user')
      .then(({ data }) => {
        console.log(data)
        dispatch({ type: 'user', user: data });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.div}>
      <h1>This is the home page</h1>
      <div className="user-home-page">
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
