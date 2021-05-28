/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import NavBar from '../user-dashboard/Navbar';
import './class.css';

// static data Jenny cho
// This is placeholder for now but we will need to also do a put request to create session
// Will need access to redux user ID to add to the class
// Will need access to the trainer ID
// Future will need to figure out date format with postgres

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));

const FullClass = () => {
  const session = useSelector((state) => state.sessionReducer.session);
  const user = useSelector((state) => state.userReducer.user);
  const trainerProfile = useSelector((state) => state.trainerProfileReducer.trainerProfile);
  const [time, setTime] = useState('');
  const [friends, setFriends] = useState('');
  const classes = useStyles();
  const history = useHistory();

  const noImage = 'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg';

  const handleBooking = () => {
    const packagedInfo = {
      class_id: session.class_id,
      user_id: user.user_id,
      trainer_id: session.teacher_id,
      time,
      other_users: friends,
    };
    alert("You're booked!");
    axios.post('/api/session', packagedInfo).catch((err) => console.error(err));
    history.push('/home');
  };
  // Do not touch the forms
  return (
    <Container className="bookingBody">
      <NavBar />
      <Row className="classNameContainer">
        {' '}
        <h1>{session.class_name}</h1>
      </Row>
      <Row className="classInfoContainer">
        <Col className="classHeaderBooking">
          <motion.h1
            className="headerText"
            whileHover={{ scale: 1.1, originX: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Instructor
          </motion.h1>
        </Col>
        <Col className="bookingForm">
          {' '}
          <Row>
            <h2>Desired time</h2>
          </Row>
          <form className={classes.container} noValidate>
            <TextField
              id="datetime-local"
              label="Pick your classtime"
              type="datetime-local"
              className={classes.textField}
              error={(new Date(time) <= new Date()) || time === ''}
              helperText={(time !== '') && (new Date(time) >= new Date()) ? '' : 'Please pick an approriate time'}
              // variant="filled"
              onChange={(e) => setTime(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Col>
      </Row>
      <Row>
        <Col className="teacherBio">
          <Row>
            <Col sm={2}>
              <img className="classInfoImage" src={session.trainer.photo_url} alt="" />
            </Col>

            <Col sm={4} className="bookInfoText">
              <h5>{`${session.trainer.first_name} ${session.trainer.last_name}`}</h5>
              <h5>{`${session.trainer.city} ${session.trainer.state}, ${session.trainer.zip}`}</h5>
              <h5>{session.trainer.email}</h5>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="classHeaderBooking">
          <motion.h1
            className="headerText"
            whileHover={{ scale: 1.1, originX: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Description
          </motion.h1>
        </Col>
        <Col>
          <Form>
            <Form.Group className="addFriends" controlId="formFriends">
              <Form.Label>Add more friends!</Form.Label>
              <Form.Control type="text" placeholder="Enter your friends" onChange={(e) => setFriends(e.target.value)} />
              <Form.Text className="text-muted">
                To add more than one, enter their full name separated by &quot;,&quot;
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <img className="classInfoImage" src={session.photo_url} alt="" />
        </Col>
        <Col sm={4} className="bookInfoText"><h5>{session.description}</h5></Col>
        <Col>
          <Button disabled={(time === '') || !(new Date(time) >= new Date())} onClick={handleBooking}>
            Book this class
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FullClass;
