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
import { makeStyles } from '@material-ui/core/styles';
import './trainer.css';
import TrainersList from './TrainersList';
import Navbar from '../user-dashboard/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
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
  formControlRoot: {
    fontFamily: 'Roboto Mono',
    width: '50vw',
    color: 'black',
    borderRadius: '7px',
    position: 'relative',
    '& label.Mui-focused': {
      color: 'black',
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
  const style = useStyles();

  const filteredTrainers = trainers.filter((trainer) => {
    return trainer.first_name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const handleChange = (event, value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Navbar />
      <Autocomplete
        classes={style}
        id="trainerSearchBar"
        options={trainers}
        getOptionLabel={(option) => option.first_name}
        style={{ width: 300 }}
        onInputChange={handleChange}
        inputValue={searchValue}
        renderInput={(params) => <TextField {...params} label="Search..." variant="outlined" />}
      />
      <div className="trainer-list">
        {console.log(trainers)}
        {filteredTrainers.map((trainer, index) => (
          <TrainersList
            trainer={trainer}
            key={index}
            searchValue={searchValue}
            reviews={reviews[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
