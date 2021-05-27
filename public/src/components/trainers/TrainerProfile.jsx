/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
// import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../user-dashboard/Navbar';
import TrainerClasses from './TrainerClasses';
import '../userInformation/userInformation.css';

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

const labels = {
  1: 'Useless+',
  2: 'Poor+',
  3: 'Ok+',
  4: 'Good+',
  5: 'Excellent+',
};

const TrainerProfile = () => {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(0);
  const style = useStyles();
  const profile = useSelector((state) => state.trainerProfileReducer.profile);
  const reviews = useSelector((state) => state.trainerReviewsReducer.reviews);

  const getAverageRating = () => {
    let result = 0;
    reviews.forEach((review) => {
      result += review.rating;
    });
    return result / reviews.length;
  };

  return (
    <Container fluid className="userInformationPage">
      <Navbar />
      <Row>
        <Col className="userContainer" sm={4}>
          <Col className="userInformationContainer">
            <Row className="photoContainer">
              <img className="userPhoto" src={profile.photo_url} alt="photos" />
            </Row>
            <Row className="userInformation">
              <h3>
                {profile.first_name}
                {profile.last_name}
              </h3>
              <p>
                <RoomOutlinedIcon />
                {profile.city}
                {profile.state}
                {profile.zip}
              </p>
              <p>
                <EmailOutlinedIcon />
                {profile.email}
              </p>
            </Row>
            <p>Give {profile.first_name} a rating!</p>
            <div className={style.root}>
              <div className="starRatings">
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                </Box>
              </div>
            </div>
            <div className={style.root}>
              <div className="starRatings">
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography component="legend">Overall Rating</Typography>
                  <Rating name="read-only" value={getAverageRating()} readOnly />
                </Box>
              </div>
            </div>
          </Col>
        </Col>
        <Col className="classScrollInformation" med={8}>
          <Row className="scrollContainer">
            <TrainerClasses />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default TrainerProfile;
