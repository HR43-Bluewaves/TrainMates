import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import PersonIcon from '@material-ui/icons/Person';
// import styles from '../test.module.css';
import styles from '../user-dashboard/home_nav.module.css';
import DropDown from './dynamic_dropdown/DropDown';

const NavBar = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push('/trainerdashboard');
  };

  const handleTrainees = () => {
    history.push('/trainees');
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

  // const handleUser = () => {
  //   history.push('/user');
  // };

  return (
    <div>
      <Navbar sticky="top" className="nav_bar">
        <div className={styles.logo_word} />
        <div className={styles.button_container}>
          <button className={styles.button} type="submit" onClick={handleHome}>
            Home
          </button>
          <button className={styles.button} type="submit" onClick={handleTrainees}>
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
          {/* <MenuButton className="userIcon" /> */}
          <div className={styles.dropdown_container}>
            <DropDown />
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
