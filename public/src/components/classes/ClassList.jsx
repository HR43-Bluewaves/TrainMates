/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line max-len
// Added onClick to do history push into the testing for now. To do later change to do :classID in future. Nader and Michael working on redux to get the classID state
const ClassList = ({ course, searchValue }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Col className="card_container">
      {(course.class_name.toLowerCase().includes(searchValue.toLowerCase()) || !searchValue) ? (
        <div className="classScroll">
          <div className="classCard">
            <div className="classPhotoContainer">
              <img className="classPhoto" src={course.photo_url} alt="classes" />
            </div>
            <div className="classInformation">
              <div className="classNameContainer">
                <p className="className">{course.class_name}</p>
              </div>
            </div>
            <div className="textContainer">
              <div className="text">
                <p>{`${course.description.slice(0, 50)} ...`}</p>
              </div>
              <button
                type="button"
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
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Col>
  );
};

export default ClassList;
