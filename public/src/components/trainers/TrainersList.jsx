/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-fragments */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// eslint-disable-next-line arrow-body-style
const TrainerList = ({ trainer, searchValue }) => {
  // eslint-disable-next-line no-console
  return (
    <div>
      <div>
        {((trainer.first_name.toLowerCase().includes(searchValue)
        || trainer.last_name.toLowerCase().includes(searchValue)
        || trainer.city.toLowerCase().includes(searchValue))
        ) ? (
          <Row className="trainerScroll">
            <Col className="trainerCard">
              <Row>
                <div className="photoContainer">
                  <img className="trainerPhoto" src={trainer.photo_url} alt="trainer" />
                </div>
              </Row>
              <Row className="trainerInformation">
                <div className="trainerNameContainer">
                  <p className="trainerName">
                    {trainer.first_name}
                    {trainer.last_name}
                  </p>
                </div>
                <div className="trainerDetails">
                  {/* <strong>Gender:</strong>
                  {` ${trainer.gender}\n`} */}
                  <strong>Location:</strong>
                  {` ${trainer.city}, ${trainer.state}`}
                  <Button variant="primary">
                    Learn More
                  </Button>
                </div>
              </Row>
            </Col>
          </Row>
          ) : null}
      </div>
    </div>
  );
};

export default TrainerList;
