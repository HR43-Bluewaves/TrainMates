/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import styles from '../test.module.css';
import TrainersList from './TrainersList';
import Navbar from '../user-dashboard/Navbar';

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/trainers')
      .then((res) => {
        setTrainers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={styles.div}>
      <h1>This is the trainers page</h1>
      <Navbar />
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <div className="trainers">
        {trainers.map((trainer, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TrainersList
            trainer={trainer}
            key={index}
            searchValue={searchValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
