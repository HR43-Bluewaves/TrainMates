import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../user-dashboard/Navbar';
import styles from '../test.module.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './userInformation.css';
import UserClasses from './userClasses.jsx';

const UserInformation = () => {

  const [searchValue, setSearchValue] = useState('');
  const user = useSelector((state) => state.userReducer.user);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Container fluid className="userInformationPage" >
      <NavBar />
      <input className="search" type="text" placeholder="Search..." onChange={handleChange} />
      <div className="userContainer">
      <Row className="user">
        <Col className="photoContainer">
          <img className="userPhoto" src={user[0].photo_url}/>
        </Col>
        <Col className="userInformation">
          <h3>{user[0].first_name} {user[0].last_name}</h3>
          <p>{user[0].city} {user[0].state}, {user[0].zip}</p>
          <p>{user[0].email}</p>
        </Col>
      </Row>
      </div>
      <h1 className="classHeader">Classes</h1>
      <UserClasses/>
    </Container>
  );
};

export default UserInformation;