/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Container, Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import styles from './trainer.module.css';
import './trainer.css';
import TrainersList from './TrainersList';
import Navbar from '../user-dashboard/Navbar';
import style from './makeStyles';

const Trainers = () => {
  const [searchValue, setSearchValue] = useState('');
  const trainers = useSelector((state) => state.trainersReducer.trainers);
  const reviews = useSelector((state) => state.trainerReviewsReducer.reviews);
  const searchBarStyle = style.useStyles();

  const filteredTrainers = trainers.filter((trainer) => {
    return trainer.first_name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const handleChange = (event, value) => {
    setSearchValue(value);
  };

  return (
    <Container fluid className={styles.classes}>
      <Navbar />
      <Autocomplete
        classes={`${searchBarStyle} ${styles['MuiAutocomplete-root']}`}
        id="trainerSearchBar"
        options={trainers}
        getOptionLabel={(option) => option.first_name}
        style={{ width: 300 }}
        onInputChange={handleChange}
        inputValue={searchValue}
        renderInput={(params) => <TextField {...params} label="Search..." variant="outlined" />}
      />
      <Container className={styles['class-list']}>
        <Row className={styles.classesContainer}>
          {console.log(trainers)}
          {filteredTrainers.map((trainer, index) => (
            <TrainersList
              trainer={trainer}
              key={index}
              searchValue={searchValue}
              reviews={reviews[index]}
            />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Trainers;
