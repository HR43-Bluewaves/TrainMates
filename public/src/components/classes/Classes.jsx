import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ClassList from './ClassList';
import NavBar from '../user-dashboard/Navbar';
import './class.css';

const Classes = () => {
  const [searchValue, setSearchValue] = useState('');
  const classes = useSelector((state) => state.classesReducer.classes);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="classes">
      <h1>This is the classes page</h1>
      <NavBar />
      <input className="search" type="text" placeholder="Search..." onChange={handleChange} />
      <div className="class-list">
        {classes.map((course) => (
          <ClassList
            course={course}
            key={course.id}
            searchValue={searchValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Classes;
