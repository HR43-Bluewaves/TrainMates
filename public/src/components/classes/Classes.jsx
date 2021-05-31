/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ClassList from './ClassList';
import Navbar from '../user-dashboard/Navbar';
import styles from './class.module.css';

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

const Classes = () => {
  const [searchValue, setSearchValue] = useState('');
  const classes = useSelector((state) => state.classesReducer.classes);
  const style = useStyles();
  // const randomClass = () => {
  //   const randomIndex = Math.floor(Math.random() * classes.length);
  //   return classes[randomIndex];
  // };

  const filteredClasses = classes.filter((course) => {
    return course.class_name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const handleChange = (event, value) => {
    setSearchValue(value);
  };

  return (
    <Container fluid className={styles.classes}>
      <Navbar />
      <Autocomplete
        classes={style}
        id="trainerSearchBar"
        options={classes}
        getOptionLabel={(option) => option.class_name}
        style={{ width: 300, height: 50 }}
        onInputChange={handleChange}
        inputValue={searchValue}
        renderInput={(params) => <TextField {...params} label="Search..." variant="outlined" />}
      />
      <Container className={styles['class-list']}>
        <Row className={styles.classesContainer}>
          {filteredClasses.map((course, index) => (
            <ClassList
              course={course}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              searchValue={searchValue}
            />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Classes;
