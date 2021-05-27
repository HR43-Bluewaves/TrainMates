/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './userInformation.css';
import '../user-dashboard/home_nav.module.css';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import EditIcon from '@material-ui/icons/Edit';
import ChatIcon from '@material-ui/icons/Chat';
import NavBar from '../user-dashboard/Navbar';
import UserClasses from './userClasses';
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
        <Row>
          <Col className="userContainer" sm={4}>
            <Col className="userInformationContainer">
              <Row className="photoContainer">
                <img className="userPhoto" src={user.photo_url} alt="photos" />
              </Row>
              <Row className="userInformation">
                <EditIcon onClick={handleEdit} />
                <h3>
                  {`${user.first_name} ${user.last_name}`}
                </h3>
                <p>
                  <RoomOutlinedIcon />
                  {`${user.city}, ${user.state} ${user.zip}`}
                </p>
                <p>
                  <EmailOutlinedIcon />
                  {` ${user.email}`}
                </p>
              </Row>
            </Col>
          </Col>
          <Col className="classScrollInformation" med={8}>
            <Row className="scrollContainer">
              <UserClasses />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
  return null;
};
export default UserInformation;
