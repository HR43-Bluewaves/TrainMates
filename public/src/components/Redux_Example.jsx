import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const ReduxExample = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const teacher = useSelector((state) => state.userReducer.isTeacher);

  const makeTeacher = () => {
    dispatch({ type: 'isTeacher', teacher: true });
  };

  return (
    <div>
      <Button variant="info" type="submit" onClick={makeTeacher}>
        Become A Teacher
      </Button>
      <div>my name is {user}</div>
      {teacher && <div>and I am a teacher </div>}
    </div>
  );
};

export default ReduxExample;