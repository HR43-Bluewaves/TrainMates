/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
// import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './class.module.css';
// eslint-disable-next-line max-len
// Added onClick to do history push into the testing for now. To do later change to do :classID in future. Nader and Michael working on redux to get the classID state
const ClassList = ({ course, searchValue }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <motion.Col
      className={styles.card_container}
      whileHover={{ y: 10 }}
    >
      {(course.class_name.toLowerCase().includes(searchValue.toLowerCase()) || !searchValue) ? (
        <div className={styles.classScroll}>
          <div className={styles.classCard}>
            <div className={styles.classPhotoContainer}>
              <img className={styles.classPhoto} src={course.photo_url} alt="classes" />
            </div>
            <div className={styles.classInformation}>
              <div className={styles.classNameContainer}>
                <p className={styles.className}>{course.class_name}</p>
              </div>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.text}>
                <p>{`${course.description.slice(0, 50)} ...`}</p>
              </div>
              <button
                type="button"
                className={styles.detailButton}
                onClick={async () => {
                  const teacher = await axios.get(`/api/trainer/${course.teacher_id}`);
                  const courseWithTrainer = {
                    ...course,
                    trainer: teacher.data[0],
                  };
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
    </motion.Col>
  );
};

export default ClassList;
