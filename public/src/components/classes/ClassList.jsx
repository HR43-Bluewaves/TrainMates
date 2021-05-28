/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line max-len
// Added onClick to do history push into the testing for now. To do later change to do :classID in future. Nader and Michael working on redux to get the classID state
const ClassList = ({ course, searchValue }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div>
      {(course.class_name.toLowerCase().includes(searchValue.toLowerCase()) || !searchValue) ? (
        <Row className="classScroll">
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
              <Button
                className="detailButton"
                onClick={async () => {
                  const teacher = await axios.get(`/api/trainer/${course.teacher_id}`);
                  const courseWithTrainer = {
                    ...course,
                    trainer: teacher.data[0],
                  };
                  console.log(courseWithTrainer);
                  dispatch({ type: 'session', session: courseWithTrainer });
                  history.push('/class-info');
                }}
              >
                Details
              </Button>
            </Row>
          </Col>
        </Row>
      ) : null}
    </div>
  );
};

export default ClassList;
