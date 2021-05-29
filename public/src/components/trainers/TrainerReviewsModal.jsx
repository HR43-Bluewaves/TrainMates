/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import Modal from '@material-ui/core/Modal';
import Row from 'react-bootstrap/Row';
import styles from './makeStyles';
import './trainer.css';

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
      <Button className="reviewsButton" type="button" onClick={handleOpen}>
        View {profile.first_name}s Reviews
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

export default TrainerReviews;
