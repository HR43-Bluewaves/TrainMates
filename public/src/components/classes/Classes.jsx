import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import ClassList from './ClassList';
import './class.css';

const Classes = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
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
    <Container fluid className="classes">
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
      <h1>Classes</h1>
      <div className="class-list">
        {classes.map((course, index) => (
          <ClassList
            course={course}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            searchValue={searchValue}
          />
        ))}
      </div>
    </Container>
  );
};

export default Classes;
