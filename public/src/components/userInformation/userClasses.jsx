import React from 'react';
// import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import style from './userInformation.module.css';

const userClasses = () => {
  const classes = useSelector((state) => state.upcomingReducer.classes);

  return (
    <Col className={style.classCardContainer}>
      {classes.map((course) => (
        // eslint - disable - next - line react / no - array - index - key
        <motion.Col
          key={course.id}
          className={style.classCardInformation}
          whileHover={{ y: -10 }}
        >
          <Row className={style.classPhotoContainer}>
            <img className={style.classPhoto} src={course.class_photo} alt="class" />
          </Row>
          <Row className={style.classInformation}>
            <div className={style.classNameContainer}>
              <p className={style.className}>{course.class_name}</p>
            </div>
            <div className={style.textContainer}>
              <p className={style.classText}>{course.class_description}</p>
            </div>
          </Row>
          <Row className={style.buttonFooter}>
            <Button>Book Class</Button>
          </Row>
        </motion.Col>
      ))}
    </Col>
  );
};

export default userClasses;
