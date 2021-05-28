/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from '../user-dashboard/Navbar';
import TrainerClasses from './TrainerClasses';
import RatingsAndReviewsModal from './R&RModal';
import '../userInformation/userInformation.css';

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

const TrainerProfile = () => {
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
                &nbsp;
                {profile.last_name}
              </h3>
              <p>
                <RoomOutlinedIcon />
                {profile.city}
                &nbsp;
                {profile.state}
                &nbsp;
                {profile.zip}
              </p>
              <p>
                <EmailOutlinedIcon />
                {profile.email}
              </p>
            </Row>
            <RatingsAndReviewsModal />
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
