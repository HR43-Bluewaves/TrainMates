/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// /* eslint-disable no-console */
// /* eslint-disable no-unused-vars */
// /* eslint-disable object-shorthand */
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import Modal from '@material-ui/core/Modal';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import styles from './makeStyles';
import cssStyle from './trainer.module.css';

const RatingsAndReviewsModal = () => {
  const profile = useSelector((state) => state.trainerProfileReducer.profile);
  const reviews = useSelector((state) => state.trainerReviewsReducer.reviews);
  const [newReview, setNewReview] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(0);
  const [charsRemaining, setCharsRemaining] = useState(`${50} Characters Remaining`);
  const [modalStyle] = useState(styles.getModalStyle);
  const style = styles.useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    setComment('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    let reviewObj = {};
    reviews.forEach((review) => {
      reviewObj = review;
    });
    const formData = {
      trainer_id: profile.trainer_id,
      rating: rating,
      reviewer_id: reviewObj.review_id,
      comment: comment,
    };
    axios.post('/api/trainer-profile', formData)
      .then(({ data }) => {
        setNewReview(data);
      })
      .catch((err) => console.error(err));
    handleClose();
    handleReset();
  };

  const handleChange = (event) => {
    const input = event.target.value;
    setComment(event.target.value);
    if (input.length <= 50) {
      setCharsRemaining(`${50 - input.length} Characters Required`);
    } else {
      setCharsRemaining(`${500 - input.length} Characters Remaining`);
    }
  };

  const body = (
    <div style={modalStyle} className={style.paper}>
      <form onSubmit={(event) => handleSubmit(event)} className={cssStyle.reviewbox}>
        <div className={style.root}>
          <div className="starRatings">
            <div className={cssStyle.starContainer}>
              <b className={cssStyle.title}>Rating</b>
              <Box component="fieldset" mb={3} borderColor="white">
                <Rating
                  name="hover-feedback"
                  value={rating}
                  precision={1}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {rating !== null && <Box ml={2}>{[hover !== -1 ? hover : rating]}</Box>}
              </Box>
            </div>
            <div className={cssStyle.starContainer}>
              <b className={cssStyle.title}>Review</b>
              <textarea onChange={(event) => handleChange(event)} value={comment} maxLength="500" name="body" rows="3" width="200" />
              <p>{charsRemaining}</p>
            </div>
          </div>
        </div>
        <div>
          <button className={cssStyle.detailButton} type="submit">Submit</button>
          <button className={cssStyle.detailButton} type="button" value="Cancel" onClick={handleClose}>Cancel</button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen} className={cssStyle.button}>
        Give
        {' '}
        {profile.first_name}
        {' '}
        a Rating and Review!
      </button>
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

export default RatingsAndReviewsModal;
