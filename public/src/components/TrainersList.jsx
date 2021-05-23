/* eslint-disable react/prop-types */
import React from 'react';

const TrainersList = ({ trainer, searchValue }) => (
  <div>
    {(trainer.first_name.toLowerCase().includes(searchValue)
    || trainer.last_name.toLowerCase().includes(searchValue)
    || trainer.city.toLowerCase().includes(searchValue)
    || !searchValue) ? (
      <div className="trainersList">
        <span>{trainer.first_name}</span>
        <span>{trainer.last_name}</span>
        <img className="trainerPhoto" src={trainer.photo_url} alt="PhotoOfTrainer" />
        <span>{trainer.city}</span>
        <span>{trainer.email}</span>
        <span>{trainer.zip}</span>
        <span>{trainer.gender}</span>
        <span>{trainer.user_name}</span>
        <br />
      </div>
      ) : null}
  </div>
);

export default TrainersList;
