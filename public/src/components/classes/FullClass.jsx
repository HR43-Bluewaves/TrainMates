/* eslint-disable max-len */
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
import {
  makeStyles,
  withStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import NavBar from '../user-dashboard/Navbar';
import style from './class.module.css';
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
    color: 'white',
  },
}));
const FullClass = () => {
  const session = useSelector((state) => state.sessionReducer.session);
  const user = useSelector((state) => state.userReducer.user);
  const profile = useSelector((state) => state.trainerProfileReducer.profile);
  const [time, setTime] = useState('');
  const [friends, setFriends] = useState('');
  const classes = useStyles();
  console.log('SESSION', session);
  const history = useHistory();
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

  const theme = createMuiTheme({
    overrides: {
      MuiPickersClock: {
        clock: {
          backgroundColor: 'red',
        },
      },
    },
  });
  // Do not touch the forms
  return (
    <Container fluid className={style.bookingBody}>
      <NavBar />
      <Container className={style.containerTop}>
        <div
          className={style.classNameContainer}
        >
          <h1>{session.class_name}</h1>
        </div>
        <Row>
          <Col sm={6} className={style.classInfoContainer}>
            <Row className={style.classHeaderBooking}>
              <h2
                className={style.headerText}
              >
                Instructor
              </h2>
              <Row className={style.trainerInformation}>
                {/* {session.teacher_id === profile.trainer_id ? ( */}
                <Row>
                  <Col>
                    <img className={style.classInfoImage} src={session.trainer.photo_url} alt="" />
                  </Col>
                  <Col className={style.teacherBio}>
                    <motion.h5
                      animate={{ color: '#C06014' }}
                      transition={{ delay: 1, duration: 2 }}
                    >
                      Name
                    </motion.h5>
                    <p>{`${session.trainer.first_name} ${session.trainer.last_name}`}</p>
                    {/* <p>{`${session.trainer.city} ${session.trainer.state}, ${session.trainer.zip}`}</p> */}
                    <motion.h5
                      animate={{ color: '#C06014' }}
                      transition={{ delay: 1, duration: 2 }}
                    >
                      Email
                    </motion.h5>
                    <p>{session.trainer.email}</p>
                  </Col>
                </Row>
                {/* ) : null} */}
              </Row>
              <div className={style.classHeaderBooking}>
                <h2
                  className={style.headerText}
                >
                  Description
                </h2>
              </div>
              <Row className={style.descrip}>
                {/* <Col>
                    <img className={style.classInfoImage} src={session.photo_url} alt="" />
                  </Col> */}
                {/* <Col> */}
                <p>{session.description}</p>
                {/* </Col> */}
              </Row>
            </Row>
          </Col>
          <Col sm={6} className={style.rightSide}>
            <h2>Desired time</h2>
            <div className={style.bookingForm}>
              <form className={classes.container} noValidate>
                <ThemeProvider theme={theme}>
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
                </ThemeProvider>
              </form>
            </div>
            <div>
              <Form>
                <Form.Group className={style.addFriends} controlId="formFriends">
                  <Form.Label>Add more friends!</Form.Label>
                  <Form.Control type="text" placeholder="Enter your friends" onChange={(e) => setFriends(e.target.value)} />
                  <Form.Text className="text-muted">
                    To add more than one, enter their full name separated by &quot;,&quot;
                  </Form.Text>
                </Form.Group>
              </Form>
            </div>
            <div>
              <button
                className={style.detailButton}
                type="button"
                disabled={(time === '') || !(new Date(time) >= new Date())}
                onClick={handleBooking}
              >
                Book this class
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default FullClass;
