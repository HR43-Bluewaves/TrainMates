/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './trainer.css';
import TrainersList from './TrainersList';

const Trainers = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

  const trainers = useSelector((state) => state.trainersReducer.trainers);

  const handleChange = (event, value) => {
    setSearchValue(value);
  };

  const handleHome = () => {
    history.push('/home');
  };

  const handleTrainers = () => {
    history.push('/trainers');
  };

  const handleClasses = () => {
    history.push('/classes');
  };

  const handleCart = () => {
    history.push('/cart');
  };

  const handleChat = () => {
    history.push('/chat');
  };

  const handleNotifications = () => {
    history.push('/notifications');
  };

  const handleUser = () => {
    history.push('/user');
  };

  return (
    <div className="trainers">
      <Nav className="navbar">
        <h1>TRAIN ME MATE</h1>
        <Autocomplete
          id="trainerSearchBar"
          options={trainers}
          getOptionLabel={(option) => option.first_name}
          style={{ width: 300 }}
          onInputChange={handleChange}
          inputValue={searchValue}
          renderInput={(params) => <TextField {...params} label="Search..." variant="outlined" />}
        />
        <Button className="" type="submit" onClick={handleHome}>
          Home
        </Button>
        <Button className="" type="submit" onClick={handleTrainers}>
          Trainers
        </Button>
        <Button className="" type="submit" onClick={handleClasses}>
          Classes
        </Button>
        <ShoppingCartIcon onClick={handleCart} />
        <EmailIcon onClick={handleChat} />
        <NotificationsIcon onClick={handleNotifications} />
        <PersonIcon onClick={handleUser} />
      </Nav>
      <div className="trainer-list">
        {console.log(trainers)}
        {trainers.map((trainer, index) => (
          <TrainersList
            trainer={trainer}
            key={index}
            searchValue={searchValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
