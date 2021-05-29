/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Row from 'react-bootstrap/Row';
import './trainer.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import styles from './makeStyles';
import cssStyle from './trainer.module.css';

const TrainerReviews = () => {
  const style = styles.useStyles();
  const [modalStyle] = useState(styles.getModalStyle);
  const [open, setOpen] = useState(false);
  const profile = useSelector((state) => state.trainerProfileReducer.profile);
  const reviews = useSelector((state) => state.trainerReviewsReducer.reviews);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getAverageRating = () => {
    let result = 0;
    reviews.forEach((review) => {
      if (review.trainer_id === profile.trainer_id) {
        (result += review.rating) / reviews.length;
      }
    });
    return result;
  };

  const body = (
    <div style={modalStyle} className={style.paper}>
      <div>
        {reviews.map((review) => (
          <Row>
            {review.trainer_id === profile.trainer_id ? (
              <div>
                <span>
                  {review.rating}
                </span>
                <br />
                {review.comment}
              </div>
            ) : null}
          </Row>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className={cssStyle.viewReview_contaier} onClick={handleOpen}>
        <div className={cssStyle.starRatings}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Overall Rating</Typography>
            <Rating name="read-only" value={getAverageRating()} readOnly />
          </Box>
        </div>
      </div>
      {/* <button className={cssStyle.button} type="button" >
        View {profile.first_name}s Reviews
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default TrainerReviews;
