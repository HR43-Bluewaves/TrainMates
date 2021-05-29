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

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.
      transform: 'translate(34px, 20px) scale(1);',
    },
  },
  inputRoot: {
    color: 'black',
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      paddingLeft: 26,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
  },
  inputLabelRoot: {
    color: 'black',
    fontFamily: 'Roboto Mono',
    '&.focused': {
      color: 'black',
    },
  },
}));

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
          {filteredTrainers.map((trainer, index) => (
            <TrainersList
              trainer={trainer}
              key={trainer.id}
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
