import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../test.module.css';
import NavBar from '../user-dashboard/Navbar';
import './userInformation.css';
import UserClasses from './userClasses';

const UserInformation = () => {
  const [searchValue, setSearchValue] = useState('');
  const user = useSelector((state) => state.userReducer.user);
  console.log(user, 'THIS IS USER');
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  if (user) {
    return (
      <Container fluid className="userInformationPage">
        <NavBar />
        <input className="search" type="text" placeholder="Search..." onChange={handleChange} />
        <div className="userContainer">
          <Row className="user">
            <Col className="photoContainer">
              <img className="userPhoto" alt="userPhoto" src={user.photo_url} />
            </Col>
            <Col className="userInformation">
              <h3>
                {user.first_name}
                {' '}
                {user.last_name}
              </h3>
              <p>
                {user.city}
                {' '}
                {user.state}
                ,
                {' '}
                {user.zip}
              </p>
              <p>{user.email}</p>
            </Col>
          </Row>
        </div>
        <h1 className="classHeader">Classes</h1>
        <UserClasses />
      </Container>
    );
  }
  return <div />;
};

export default UserInformation;
