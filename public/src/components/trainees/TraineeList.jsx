/* eslint-disable react/prop-types */
import React from 'react';

const TraineeList = ({ trainee, searchValue }) => (
  <div>
    {(trainee.first_name.toLowerCase().includes(searchValue)
    || trainee.last_name.toLowerCase().includes(searchValue)
    || trainee.city.toLowerCase().includes(searchValue)
    || !searchValue) ? (
      <div className="traineesList">
        <span>{trainee.first_name}</span>
        <span>{trainee.last_name}</span>
        <img className="traineePhoto" src={trainee.photo_url} alt="PhotoOfTrainee" />
        <span>{trainee.city}</span>
        <span>{trainee.email}</span>
        <span>{trainee.zip}</span>
        <span>{trainee.gender}</span>
        <span>{trainee.user_name}</span>
        <br />
      </div>
      ) : null}
  </div>
);

export default TraineeList;
