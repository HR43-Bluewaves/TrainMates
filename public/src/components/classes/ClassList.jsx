/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ClassList = ({ course, searchValue }) => (
  <div>
    {(course.class_name.includes(searchValue) || !searchValue) ? (
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
            <Button className="detailButton">
              Details
            </Button>
          </Row>
        </Col>
      </Row>
    ) : null}
  </div>
);

export default ClassList;
