/* eslint-disable no-constant-condition */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import styles from './home_nav.module.css';
import MenuButton from '../buttons/MenuButton'

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
    <div>
      <Navbar sticky="top" className="nav_bar">
        <div className={styles.logo_word} />
        <div className={styles.button_container}>
          <button className={styles.button} type="submit" onClick={handleHome}>
            Home
          </button>
          <button className={styles.button} type="submit" onClick={handleTrainers}>
            Trainers
          </button>
          <button className={styles.button} type="submit" onClick={handleClasses}>
            Classes
          </button>
        </div>
        <div className={styles.icon_container}>
          <ShoppingCartIcon onClick={handleCart} className={styles.icon} />
          <EmailIcon onClick={handleChat} className={styles.icon} />
          <NotificationsIcon onClick={handleNotifications} className={styles.icon} />
          <MenuButton className={styles.icon} />
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
