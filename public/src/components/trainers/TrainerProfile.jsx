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
// import Rating from '@material-ui/lab/Rating';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
import { Row } from 'react-bootstrap';
import Navbar from '../user-dashboard/Navbar';
import TrainerClasses from './TrainerClasses';
import RatingsAndReviewsModal from './R&RModal';
import Login from '../forms/Login';
import TrainerReviewsModal from './TrainerReviewsModal';
// import styles from './makeStyles';
import cssStyle from './trainer.module.css';

const TrainerProfile = () => {
  // const style = styles.useStyles();
  const [modalType, setModalType] = useState('');
  const profile = useSelector((state) => state.trainerProfileReducer.profile);
  // const reviews = useSelector((state) => state.trainerReviewsReducer.reviews);

  const modalClose = () => {
    setModalType('');
  };

  return (
    <div className={cssStyle.userInformationPage}>
      <Navbar />
      <Login modalClose={modalClose} modalType={modalType} userId={profile.user_id} />
      <motion.div
        initial={{ x: '200vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, type: 'spring', stiffness: 50 }}
      />
      <Container className={cssStyle.bookingContainer}>
        <Row>
          <div className={`${cssStyle.classScrollInformation} col-4`}>
            <motion.div
              className={cssStyle.userInformationContainer}
            >
              <h1 className={cssStyle.profileText}>Profile</h1>
              <Row className={cssStyle.photoContainer}>
                <img className={cssStyle.userPhoto} src={profile.photo_url} alt="photos" />
              </Row>
              <Row className={cssStyle.userInformation}>
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
              <TrainerReviewsModal />
              <div className={cssStyle.ratingContainer}>
                <RatingsAndReviewsModal />
              </div>
            </motion.div>
          </div>
          <div className={`${cssStyle.classScrollInformation} col-8`}>
            <Row className={cssStyle.trainerClassText}>
              <h1>Classes</h1>
            </Row>
            <Row className={cssStyle.scrollContainer}>
              <Row>
                <TrainerClasses />
              </Row>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default TrainerProfile;
