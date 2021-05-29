/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Row from 'react-bootstrap/Row';
import styles from './makeStyles';
import './trainer.css';
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

  const body = (
    <div style={modalStyle} className={style.paper}>
      <div>
        {reviews.map((review) => (
          <Row>
            {review.trainer_id === profile.trainer_id ? (
              review.comment
            ) : null}
          </Row>
        ))}
      </div>
    </div>
  );

  return (
    <div className={cssStyle.viewReview_contaier}>
      <button className={cssStyle.button} type="button" onClick={handleOpen}>
        View {profile.first_name}s Reviews
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

export default TrainerReviews;
