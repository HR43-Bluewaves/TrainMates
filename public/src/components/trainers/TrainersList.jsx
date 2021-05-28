/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-fragments */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './trainer.css';

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

const TrainerList = ({ trainer, searchValue, reviews }) => {
  // eslint-disable-next-line no-console
  const style = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {((trainer.first_name.toLowerCase().includes(searchValue.toLowerCase())
        || trainer.last_name.toLowerCase().includes(searchValue)
        || trainer.city.toLowerCase().includes(searchValue))
        ) ? (
          <Row className="trainerScroll">
            <Col className="trainerCard">
              <Row>
                <div className="trainerPhotoContainer">
                  <img className="trainerPhoto" src={trainer.photo_url} alt="trainer" />
                </div>
              </Row>
              <Row className="trainerInformation">
                <div className="trainerNameContainer">
                  <p className="trainerName">
                    {trainer.first_name}
                    &nbsp;
                    {trainer.last_name}
                  </p>
                </div>
                <div className="trainerDetails">
                  {/* <strong>Gender:</strong>
                  {` ${trainer.gender}\n`} */}
                  <strong>Location:</strong>
                  &nbsp;
                  {trainer.city}
                  &nbsp;
                  {trainer.state}
                  <div className={style.root}>
                    <Box className="reviews" component="fieldset" mb={3} borderColor="transparent">
                      <Typography component="legend">Overall Rating</Typography>
                      <Rating name="read-only" value={reviews.rating} readOnly />
                    </Box>
                  </div>
                  <Button
                    className="learnMoreButton"
                    onClick={() => {
                      dispatch({ type: 'profile', profile: trainer });
                      history.push('/trainer-profile');
                    }}
                  >
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
