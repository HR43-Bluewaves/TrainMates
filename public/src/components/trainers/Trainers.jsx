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
import style from './trainer.css';
import TrainersList from './TrainersList';

const Trainers = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const trainers = useSelector((state) => state.trainersReducer.trainers);
  const classes = useSelector((state) => state.classesReducer.classes);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
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
    <div className={style.div}>
      <h1>This is the trainers page</h1>
      <Nav className="navbar">
        <h1>TRAIN ME MATE</h1>
        <input type="text" placeholder="Search..." onChange={handleChange} />
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
      <div className="trainers">
        {console.log(trainers)}
        {trainers.map((trainer, index) => (
          <TrainersList
            trainer={trainer}
            key={index}
            searchValue={searchValue}
            classes={classes[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
