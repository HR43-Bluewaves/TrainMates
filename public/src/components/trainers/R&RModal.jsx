/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Modal from '@material-ui/core/Modal';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import styles from './makeStyles';

const RatingsAndReviewsModal = () => {
  const profile = useSelector((state) => state.trainerProfileReducer.profile);
  const reviews = useSelector((state) => state.trainerReviewsReducer.reviews);
  const [newReview, setNewReview] = useState([]);
  const [charValue, setCharValue] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(0);
  const [charsRemaining, setCharsRemaining] = useState('100 Characters Remaining');
  const [modalStyle] = useState(styles.getModalStyle);
  const style = styles.useStyles();
  const history = useHistory();

  const handleSubmit = () => {
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
    alert("You're review has been submited!");
    axios.post('/api/trainer-profile', formData)
      .then(({ data }) => {
        setNewReview(data);
      })
      .catch((err) => console.error(err));
    history.push('/home');
  };

  const handleCharChange = (event) => {
    const input = event.target.value;
    if (input.length <= 100) {
      setCharsRemaining(`${100 - input.length} Characters Remaining`);
    }
  };

  const handleChange = (event) => {
    setCharValue(event.target.value);
    setComment(event.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={style.paper}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className={style.root}>
          <div className="starRatings">
            <b>Rating</b>
            <Box component="fieldset" mb={3} borderColor="transparent">
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
            <b>Review</b>
            <textarea onChange={(event) => { handleChange(event); handleCharChange(event); }} value={charValue} maxLength="100" name="body" rows="3" width="50" />
            <p>{charsRemaining}</p>
          </div>
        </div>
        <input className="submitButtonNd" type="submit" />
        <input className="closeModalNd" type="button" value="Cancel" onClick={handleClose} />
      </form>
    </div>
  );

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Give {profile.first_name} a Rating and Review!
      </Button>
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
