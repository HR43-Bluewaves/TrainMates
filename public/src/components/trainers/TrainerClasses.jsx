/* eslint-disable react/no-array-index-key */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const TrainerClasses = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classesReducer.classes);
  const profile = useSelector((state) => state.trainerProfileReducer.profile);

  return (
    <Container fluid className="trainerClasses">
      {classes.map((course, index) => (
        <div key={index}>
          {course.teacher_id === profile.trainer_id ? (
            <Row className="trainerClassScroll">
              <Col className="classCard">
                <Row className="classPhotoContainer">
                  <img className="classPhoto" src={course.photo_url} alt="classes" />
                </Row>
                <Row className="classInformation">
                  <div className="classNameContainer">
                    <p className="className">{course.class_name}</p>
                  </div>
                </Row>
                <Row className="textContainer">
                  <div className="text">
                    <p>{course.description}</p>
                  </div>
                </Row>
                <Button
                  className="detailButton"
                  onClick={() => {
                    dispatch({ type: 'session', session: course });
                    history.push('/class-info');
                  }}
                >
                  Details
                </Button>
              </Col>
            </Row>
          ) : null}
        </div>
      ))}
    </Container>
  );
};

export default TrainerClasses;
