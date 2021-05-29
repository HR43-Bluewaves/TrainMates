/* eslint-disable arrow-body-style */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

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
      {filteredClasses.map((course) => (
        <motion.Col
          key={course.id}
          className="classCardInformation"
          whileHover={{ scale: 1.005 }}
        >
          <div>
            <Row className="classPhotoContainer">
              <img className="classPhoto" src={course.photo_url} alt="class" />
            </Row>
            <div>
              <Row className="classInformation">
                <div className="classNameContainer">
                  <p className="className">{course.class_name}</p>
                </div>
                <div className="textContainer">
                  <p className="classText">{course.description}</p>
                </div>
              </Row>
            </div>
            <Row>
              <Button
                className="showDetailButton"
                onClick={() => {
                  dispatch({ type: 'session', session: course });
                  history.push('/class-info');
                }}
              >
                Details
              </Button>
            </Row>
          </div>
        </motion.Col>
      ))}
    </Col>
  );
};

export default TrainerClasses;
