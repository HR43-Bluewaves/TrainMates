/* eslint-disable react/prop-types */
import React from 'react';

const ClassList = ({ course, searchValue }) => (
  <div>
    {(course.class_name.toLowerCase().includes(searchValue) || !searchValue) ? (
      <div className="classList">
        <span>{course.class_name}</span>
        <p>{course.description}</p>
        <img className="class-photo" src={course.photo_url} alt="classPhoto" />
      </div>
    ) : null}
  </div>
);

export default ClassList;
