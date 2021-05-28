/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const TrainerClasses = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classesReducer.classes);
  const profile = useSelector((state) => state.trainerProfileReducer.profile);

  const filteredClasses = classes.filter((course) => {
    return course.teacher_id === profile.trainer_id ? course.photo_url : null;
  });

  return (
    <Col className="classCardContainer">
      {filteredClasses.map((course, index) => (
        <Col key={index} className="classCardInformation">
          <Row className="classPhotoContainer">
            <img className="classPhoto" src={course.photo_url} alt="class" />
          </Row>
          <Row className="classInformation">
            <div className="classNameContainer">
              <p className="className">{course.class_name}</p>
            </div>
            <div className="textcontainer">
              <div className="classText">
                {course.description.length >= 150 ? (
                  <p>{course.description.slice(0, 150)}...</p>
                ) : course.description}
              </div>
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
      ))}
    </Col>
  );
};

export default TrainerClasses;
