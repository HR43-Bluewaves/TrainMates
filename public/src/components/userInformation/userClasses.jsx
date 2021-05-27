import React from 'react';
// import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const userClasses = () => {
  const classes = useSelector((state) => state.classesReducer.classes);

  return (
    <Col className="classCardContainer">
      {classes.map((course, index) => (
        eslint-disable-next-line react/no-array-index-key
        <motion.Col
          key={index}
          className="classCardInformation"
          whileHover={{ scale: 1.005 }}
        >
          <Row className="classPhotoContainer">
            <img className="classPhoto" src={course.photo_url} alt="class" />
          </Row>
          <Row className="classInformation">
            <div className="classNameContainer">
              <p className="className">{course.class_name}</p>
            </div>
            <div className="textContainer">
              <p className="classText">{course.description}</p>
            </div>
          </Row>
          <Row className="buttonFooter">
            <Button onClick={() => { history.push('/class-info'); }}>Book Class</Button>
          </Row>
        </motion.Col>
      ))}
    </Col>
  );
};

export default userClasses;
