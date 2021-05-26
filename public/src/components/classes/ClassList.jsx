/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line max-len
// Added onClick to do history push into the testing for now. To do later change to do :classID in future. Nader and Michael working on redux to get the classID state
const ClassList = ({ course, searchValue }) => {
  const history = useHistory();
  return (
    <div>
      {(course.class_name.toLowerCase().includes(searchValue) || !searchValue) ? (
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
              <Button className="detailButton" onClick={() => history.push('/test')}>
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
