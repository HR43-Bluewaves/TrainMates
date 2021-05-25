/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../test.module.css';
import TrainersList from './TrainersList';
import Navbar from '../user-dashboard/Navbar';

const Trainers = () => {
  const [searchValue, setSearchValue] = useState('');
  const trainers = useSelector((state) => state.trainersReducer.trainers);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.div}>
      <h1>This is the trainers page</h1>
      <Navbar />
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <div className="trainers">
        {trainers.map((trainer, index) => (
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
