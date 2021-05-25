import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import styles from '../test.module.css';

const NavBar = () => {
  const history = useHistory();

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
    <div className={styles.div}>
      <Nav className="navbar">
        <h1>TRAIN ME MATE</h1>
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
    </div>
  );
};

export default NavBar;
