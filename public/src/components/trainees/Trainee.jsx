/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../test.module.css';
import TraineeList from './TraineeList';
import Navbar from '../trainer-dashboard/TrainerNavbar';

const Trainee = () => {
  const [trainees, setTrainees] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/user')
      .then((res) => {
        console.log(res.data);
        setTrainees(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={styles.div}>
      <h1>This is the trainees page</h1>
      <Navbar />
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <div className="trainees">
        {trainees.map((trainee, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TraineeList
            trainee={trainee}
            key={index}
            searchValue={searchValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Trainee;
