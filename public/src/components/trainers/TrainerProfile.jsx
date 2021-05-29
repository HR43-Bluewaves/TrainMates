/* eslint-disable arrow-body-style */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
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
import Login from '../forms/Login';
import TrainerReviewsModal from './TrainerReviewsModal';
import styles from './makeStyles';

const TrainerProfile = () => {
  const style = styles.useStyles();
  const [modalType, setModalType] = useState('');
  const profile = useSelector((state) => state.trainerProfileReducer.profile);
  const reviews = useSelector((state) => state.trainerReviewsReducer.reviews);

  const getAverageRating = () => {
    let result = 0;
    reviews.forEach((review) => {
      result += review.rating;
    });
    return result / reviews.length;
  };

  const modalClose = () => {
    setModalType('');
  };

  return (
    <Container fluid className="userInformationPage">
      <Navbar />
      <Login modalClose={modalClose} modalType={modalType} userId={profile.user_id} />
      <motion.div
        initial={{ x: '200vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, type: 'spring', stiffness: 50 }}
      >
        <Row>
          <Col className="trainerContainer" sm={4}>
            <motion.Col className="userInformationContainer">
              <h1 className="profileText">Profile</h1>
              <Row className="photoContainer">
                <img className="userPhoto" src={profile.photo_url} alt="photos" />
              </Row>
              <Row className="userInformation">
                <motion.h3
                  animate={{ color: '#C06014' }}
                  transition={{ delay: 1, duration: 2 }}
                >
                  {profile.first_name}
                  &nbsp;
                  {profile.last_name}
                </motion.h3>
                <h5>Location</h5>
                <p>
                  <RoomOutlinedIcon />
                  {profile.city}
                  &nbsp;
                  {profile.state}
                  &nbsp;
                  {profile.zip}
                </p>
                <h5>E-mail</h5>
                <p>
                  <EmailOutlinedIcon />
                  {` ${profile.email}`}
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
            </motion.Col>
            <TrainerReviewsModal />
          </Col>
          <Col className="classScrollInformation" med={8}>
            <Row className="trainerClassText">
              <h1>Classes</h1>
            </Row>
            <Row className="scrollContainer">
              <TrainerClasses />
            </Row>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};
export default TrainerProfile;
