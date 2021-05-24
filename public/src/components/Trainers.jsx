/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styles from './test.module.css';
import TrainersList from './TrainersList';

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();
  const handleHome = () => {
    history.push('/home');
  };

  useEffect(() => {
    axios.get('http://localhost:3000/api/trainers')
      .then((res) => {
        console.log(res.data);
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
      <Nav className="navbar">
        <h1>TRAIN ME MATE</h1>
        <input type="text" placeholder="Search..." onChange={handleChange} />
        <Button type="submit" onClick={handleHome}>
          Home
        </Button>
      </Nav>
      <div className="trainers">
        {trainers.map((trainer, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TrainersList trainer={trainer} key={index} searchValue={searchValue} />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
