/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import ClassList from './ClassList';
import Navbar from '../user-dashboard/Navbar';
import './class.css';

const Classes = () => {
  const [searchValue, setSearchValue] = useState('');
  const classes = useSelector((state) => state.classesReducer.classes);

  // const randomClass = () => {
  //   const randomIndex = Math.floor(Math.random() * classes.length);
  //   return classes[randomIndex];
  // };
  const handleChange = (event, value) => {
    setSearchValue(value);
  };

  return (
    <Container fluid className="classes">
      <Navbar />
      <Autocomplete
        id="trainerSearchBar"
        options={classes}
        getOptionLabel={(option) => option.class_name}
        style={{ width: 300 }}
        onInputChange={handleChange}
        inputValue={searchValue}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search..."
            variant="outlined"
          />
        )}
      />
      <h1>Classes</h1>
      <div className="class-list">
        {classes.map((course, index) => (
          <ClassList
            course={course}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            searchValue={searchValue}
          />
        ))}
      </div>
    </Container>
  );
};

export default Classes;
