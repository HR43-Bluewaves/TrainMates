import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const Landing = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const teacher = useSelector((state) => state.userReducer.isTeacher);

  const makeTeacher = () => {
    dispatch({ type: 'isTeacher', teacher: true });
  };

  const handleLogin = () => {
    history.push('/home');
  }
  return (
    <div className = 'login'>
      <Button variant="info" type="submit" onClick={handleLogin}>
        Login to mates
      </Button>
      <Button variant="info" type="submit" onClick={makeTeacher}>
        Become A Teacher
      </Button>
      <div>my name is {user}</div>
      {teacher && <div>and I am a teacher </div>}
    </div>
  );
};

export default Landing;