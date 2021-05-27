/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './userInformation.css';
import '../user-dashboard/home_nav.module.css';
import NavBar from '../user-dashboard/Navbar';
import UserClasses from './userClasses';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import EditIcon from '@material-ui/icons/Edit';
import ChatIcon from '@material-ui/icons/Chat';
import Login from '../forms/Login';

const UserInformation = () => {
  const [searchValue, setSearchValue] = useState('');
  const [modalType, setModalType] = useState('');
  const user = useSelector((state) => state.userReducer.user);
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const modalClose = () => {
    setModalType('');
  };
  const handleEdit = () => {
    setModalType('edit');
  };
  if (user) {
    return (
      <Container fluid className="userInformationPage">
        <NavBar />
        <Login modalClose={modalClose} modalType={modalType} userId={user.user_id} />
        <motion.div
           initial={{ x: '200vw' }}
           animate={{ x: 0 }}
           transition={{ duration: 1.5, type: 'spring', stiffness: 50 }}
        >
        <Row>
          <Col className="userContainer" sm={4}>
            <motion.Col className="userInformationContainer">
              <h1 className="profileText">Profile</h1>
            <div
              whileHover={{ color: '#C06014' }}
              transition={{ duration: 1 }}
            >
            <EditIcon className="editIcon"onClick={handleEdit}/>
            </div>
              <Row className="photoContainer">
                <img className="userPhoto" src={user.photo_url} alt="photos" />
              </Row>
              <Row className="userInformation">
                <motion.h3
                animate={{ color: '#C06014' }}
                transition={{ delay: 1, duration: 2}}
                >
                  {`${user.first_name} ${user.last_name}`}
                </motion.h3>
                <h5>Location</h5>
                <p>
                  <RoomOutlinedIcon />
                  {`${user.city}, ${user.state} ${user.zip}`}
                </p>
                <h5>E-mail</h5>
                <p>
                  <EmailOutlinedIcon />
                  {` ${user.email}`}
                </p>
              </Row>
            </motion.Col>
          </Col>
          <Col className="classScrollInformation" med={8}>
            <Row className="userClassText">
              <h1>Classes</h1>
              </Row>
            <Row className="scrollContainer">
              <UserClasses />
            </Row>
          </Col>
        </Row>
        </motion.div>
      </Container>
    );
  }
  return null;
};
export default UserInformation;
