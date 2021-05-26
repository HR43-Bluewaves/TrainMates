/* eslint-disable no-console */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import NavBar from '../user-dashboard/Navbar';

// static data Jenny cho
// This is placeholder for now but we will need to also do a put request to create session
// Will need access to redux user ID to add to the class
// Will need access to the trainer ID
// Future will need to figure out date format with postgres
const dummy = {
  class_name: 'Vinyasa Yoga',
  photo_url: 'https://post.healthline.com/wp-content/uploads/2019/10/Tattooed-woman-doing-yoga-at-home-12000x628-facebook.jpg',
  description: "This timeless approach to yoga links movement and breath through a creative, flowing sequence of postures. Unlock your body's potential, challenge your limits, and soothe your mind in this transformative practice.",
  teacher_id: 5,
};

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
  const [time, setTime] = useState('');
  const [friends, setFriends] = useState('');
  const classes = useStyles();
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
  return (
    <Container>
      <NavBar />
      <Row>
        {' '}
        <h1>{session.class_name}</h1>
      </Row>
      <Row>
        <Col><h2>Instructor</h2></Col>
        <Col>
          {' '}
          <h2>Desired time</h2>
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
        <Col>
          Teacher bio
        </Col>
      </Row>
      <Row>
        <Col><h2>Description</h2></Col>
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
        <Col><h2>Actual description</h2></Col>
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
