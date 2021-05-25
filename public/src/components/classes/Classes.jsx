import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ClassList from './ClassList';
<<<<<<< HEAD
import NavBar from '../Navbar';
=======
import NavBar from '../user-dashboard/Navbar';
<<<<<<< HEAD
>>>>>>> c4e77ab5ee7e9240b96d037bdbe047a55c42e976
=======
import './class.css';
>>>>>>> aac946841a371bfbd5cafe2662d659bf705c8994

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
