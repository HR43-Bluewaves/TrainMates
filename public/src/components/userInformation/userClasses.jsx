import React from 'react';
// import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

const userClasses = () => {
  const classes = useSelector((state) => state.classesReducer.classes);

  return (

    <Row className="classScroll">
      {classes.map((course) => (
        <Col className="classCard">
          <Row className="classPhotoContainer">
            <img className="classPhoto" src={course.photo_url} alt="class" />
          </Row>
          <Row className="classInformation">
            <div className="classNameContainer">
              <p className="className">{course.class_name}</p>
            </div>
            <div className="textContainer">
              <p className="text">{course.description}</p>
            </div>
          </Row>
        </Col>
      ))}
    </Row>
  );
};

export default userClasses;
