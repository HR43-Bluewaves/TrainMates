/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Container, Row } from 'react-bootstrap';
import styles from './trainer.module.css';
import TrainersList from './TrainersList';
import Navbar from '../user-dashboard/Navbar';
import style from './makeStyles';

const Trainers = () => {
  const [searchValue, setSearchValue] = useState('');
  const trainers = useSelector((state) => state.trainersReducer.trainers);
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
          {filteredTrainers.map((trainer) => (
            <TrainersList
              trainer={trainer}
              key={trainer.id}
              searchValue={searchValue}
            />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Trainers;
