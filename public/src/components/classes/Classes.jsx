/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClassList from './ClassList';
<<<<<<< HEAD
import NavBar from '../Navbar';
=======
import NavBar from '../user-dashboard/Navbar';
>>>>>>> c4e77ab5ee7e9240b96d037bdbe047a55c42e976

// eslint-disable-next-line react/prop-types
const Classes = () => {
  const [searchValue, setSearchValue] = useState('');
  const [classes, setClasses] = useState([]);

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
      <NavBar />
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
