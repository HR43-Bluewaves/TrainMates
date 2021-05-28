/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
};

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
}));

const RatingsAndReviewsModal = () => {
  const profile = useSelector((state) => state.trainerProfileReducer.profile);
  const reviews = useSelector((state) => state.trainerReviewsReducer.reviews);
  const [newReview, setNewReview] = useState([]);
  const [charValue, setCharValue] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(0);
  const [charsRemaining, setCharsRemaining] = useState('60 Characters Remaining');
  const [modalStyle] = useState(getModalStyle);
  const style = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
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
        console.log(data);
        setNewReview(data);
      })
      .catch((err) => console.error(err));
  };

  const handleCharChange = (event) => {
    const input = event.target.value;
    if (input.length <= 60) {
      setCharsRemaining(`${60 - input.length} Characters Remaining`);
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
      <form onSubmit={(event) => handleSubmit(event, alert('Your review has been submitted! Press close to continue'))}>
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
            <textarea onChange={(event) => { handleChange(event); handleCharChange(event); }} value={charValue} maxLength="60" name="summary" rows="2" width="35vh" />
            <p>{charsRemaining}</p>
          </div>
          <input className="submitButtonNd" type="submit" />
          <input className="closeModalNd" type="button" value="Cancel" onClick={handleClose} />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Give {profile.first_name} a Rating and Review!
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
