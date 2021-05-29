/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import cssStyle from './trainer.module.css';

const TrainerClasses = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classesReducer.classes);
  const profile = useSelector((state) => state.trainerProfileReducer.profile);

  const filteredClasses = classes.filter((course) => {
    return course.teacher_id === profile.trainer_id ? course.photo_url : null;
  });

  return (
    <Row className={cssStyle.classesContainer}>
      {filteredClasses.map((course, index) => (
        <Col key={index} className={cssStyle.profile_container}>
          <div className={cssStyle.classScroll}>
            <div className={cssStyle.classCard_profile}>
              <div className={cssStyle.classPhotoContainer}>
                <img className={cssStyle.classPhoto} src={course.photo_url ? course.photo_url : <h1>Casses Coming Soon</h1>} alt="class" />
              </div>
              <Row className={cssStyle.classInformation}>
                <div className={cssStyle.classNameContainer}>
                  <p className={cssStyle.className}>{course.class_name}</p>
                </div>
                <div className={cssStyle.bottom_container}>
                  <div className={cssStyle.classText}>
                    {course.description.length >= 100 ? (
                      <p>
                        {course.description.slice(0, 100)}
                        ...
                      </p>
                    ) : course.description}
                  </div>
                  <button
                    type="button"
                    className={cssStyle.detailButton}
                    onClick={() => {
                      dispatch({ type: 'session', session: course });
                      history.push('/class-info');
                    }}
                  >
                    Details
                  </button>
                </div>
              </Row>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default TrainerClasses;
