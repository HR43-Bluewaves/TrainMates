/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClassList from './ClassList';
import NavBar from '../Navbar';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/classes')
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="classes">
      <h1>This is the classes page</h1>
      <NavBar onChange={handleChange} />
      <input className="search" type="text" placeholder="Search..." onChange={handleChange} />
      <div className="class-list">
        {classes.map((course, index) => (
          <ClassList
            course={course}
            key={index}
            searchValue={searchValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Classes;
