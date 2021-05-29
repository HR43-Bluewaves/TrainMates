/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import EditIcon from '@material-ui/icons/Edit';
import ChatIcon from '@material-ui/icons/Chat';
import TrainerClasses from './TrainerClassList';
import NavBar from '../user-dashboard/Navbar';
import Login from '../forms/Login';
import style from '../userInformation/userInformation.module.css';

const noImage = 'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg';

const TrainerProfileTrainerSide = () => {
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
  console.log('TRAINER PROFILE');
  if (user) {
    return (
      <Container fluid className={style.userInformationPage}>
        <NavBar />
        <Login modalClose={modalClose} modalType={modalType} userId={user.user_id} />
        <Container>
          <motion.div
            initial={{ x: '200vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, type: 'spring', stiffness: 50 }}
          >
            <Row>
              <Col className={style.userContainer} sm={4}>
                <motion.Col className={style.userInfoContainer}>
                  <h1 className={style.profileText}>Profile</h1>
                  <div
                    whileHover={{ color: '#C06014' }}
                    transition={{ duration: 1 }}
                  >
                    <EditIcon className={style.editIcon} onClick={handleEdit} />
                  </div>
                  <Row className={style.photoContainer}>
                    <img className={style.userPhoto} src={user.photo_url ? user.photo_url : noImage} alt="photos" />
                  </Row>
                  <Row className={style.userInformation}>
                    <motion.h3
                      animate={{ color: '#C06014' }}
                      transition={{ delay: 1, duration: 2 }}
                    >
                      {`${user.first_name} ${user.last_name}`}
                    </motion.h3>
                    <h5>Location</h5>
                    <p>
                      {user.city && <RoomOutlinedIcon />}
                      {user.city && `${user.city}, ${user.state} ${user.zip}`}
                    </p>
                    <h5>E-mail</h5>
                    <p>
                      <EmailOutlinedIcon />
                      {` ${user.email}`}
                    </p>
                  </Row>
                </motion.Col>
              </Col>
              <Col className={style.classScrollInformation} med={8}>
                <Row className={style.userClassText}>
                  <h1>Classes</h1>
                </Row>
                <Row className={style.scrollContainer}>
                  <TrainerClasses />
                </Row>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </Container>
    );
  }
  return null;
};
export default TrainerProfileTrainerSide;
