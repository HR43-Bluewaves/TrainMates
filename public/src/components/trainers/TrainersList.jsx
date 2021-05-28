/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-fragments */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
// import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import './trainer.css';
import styles from './trainer.module.css';

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TrainerList = ({ trainer, searchValue, reviews }) => {
  // eslint-disable-next-line no-console
  const style = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Col className={styles.card_container}>
      {((trainer.first_name.toLowerCase().includes(searchValue.toLowerCase())
        || trainer.last_name.toLowerCase().includes(searchValue)
        || trainer.city.toLowerCase().includes(searchValue))
      ) ? (
        <div className={styles.classScroll}>
          <div className={styles.classCard}>
            <div className={styles.classPhotoContainer}>
              <img className={styles.classPhoto} src={trainer.photo_url} alt="trainer" />
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
                {/* <strong>Gender:</strong>
                  {` ${trainer.gender}\n`} */}
                <div className={styles.location}>
                  <strong>Location:</strong>
                  <p>
                    {trainer.city}
                    &nbsp;
                    {trainer.state}
                  </p>
                </div>
                <div className={style.root}>
                  <Box className="reviews" component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend"><strong>Overall Rating</strong></Typography>
                    <Rating name="read-only" value={reviews.rating} readOnly />
                  </Box>
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
        </div>
        ) : null}
    </Col>
  );
};

export default TrainerList;
