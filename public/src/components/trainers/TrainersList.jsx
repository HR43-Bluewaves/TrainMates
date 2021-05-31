/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-fragments */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import './trainer.css';
import { motion } from 'framer-motion';
import styles from './trainer.module.css';

const noImage = 'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg';

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TrainerList = ({ trainer, searchValue }) => {
  const style = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.trainerReviewsReducer.reviews);

  const getAverageRating = () => {
    let result = 0;
    reviews.forEach((review) => {
      if (review.trainer_id === trainer.trainer_id) {
        (result += review.rating) / reviews.length;
      }
    });
    return result;
  };

  return (
    <motion.Col
      className={styles.card_container}
      whileHover={{ y: 10 }}
    >
      {((trainer.first_name.toLowerCase().includes(searchValue.toLowerCase())
        || trainer.last_name.toLowerCase().includes(searchValue.toLowerCase())
        || trainer.city.toLowerCase().includes(searchValue))
      ) ? (
        <div className={styles.classScroll}>
          <div className={styles.classCard}>
            <div className={styles.classPhotoContainer}>
              <img className={styles.classPhoto} src={trainer.photo_url ? trainer.photo_url : noImage} alt="trainer" />
            </div>
            <div className={styles.classInformation}>
              <div className={styles.classNameContainer}>
                <p className={styles.className}>
                  {trainer.first_name}
                    &nbsp;
                  {trainer.last_name}
                </p>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.location}>
                  <strong>Location:</strong>
                  <p>
                    {trainer.city}
                    &nbsp;
                    {trainer.state}
                  </p>
                  <b>
                    {trainer.slogan ? trainer.slogan : 'Train Me, Mate'}
                  </b>
                </div>
                <div className={style.root}>
                  <Box className="reviews" component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend"><strong>Overall Rating</strong></Typography>
                    <Rating name="read-only" value={getAverageRating()} readOnly />
                  </Box>
                </div>
              </div>
              <button
                type="button"
                className={styles.detailButton}
                onClick={() => {
                  dispatch({ type: 'profile', profile: trainer });
                  history.push('/trainer-profile');
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        ) : null}
    </motion.Col>
  );
};

export default TrainerList;
