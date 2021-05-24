/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import axios from 'axios';
import ClassList from './ClassList';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();
  const handleClasses = () => {
    history.push('/home');
  };

  useEffect(() => {
    axios.get('http://localhost:3000/api/classes')
      .then((res) => {
        console.log(res.data);
        setClasses(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="classes">
      <Nav className="navbar">
        <h1>TRAIN ME MATE</h1>
        <input type="text" placeholder="Search..." onChange={handleChange} />
        <Button type="submit" onClick={handleClasses}>
          Home
        </Button>
      </Nav>
      <div className="class-list">
        {classes.map((course, index) => (
          <ClassList course={course} key={index} searchValue={searchValue} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
