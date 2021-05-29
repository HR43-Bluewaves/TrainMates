const router = require('express').Router();
const db = require('./queries');

router
  .route('/user')
  .get(db.getUser)
  .post(db.addUser);
router
  .route('/user/:id')
  .put(db.editUser);

router
  .route('/classes')
  .get(db.getAllClasses)
  .post(db.addClass);

router
  .route('/trainers')
  .get(db.getAllTrainers);

router
  .route('/trainer')
  .get(db.getTrainer)
  .post(db.addTrainer);

router
  .route('/trainer/:id')
  .get(db.getTrainerById);

router
  .route('/session')
  .post(db.bookSession);

router
  .route('/trainer-profile')
  .get(db.getTrainersRnR)
  .post(db.addRatingsAndReviews);

router
  .route('/session/:id')
  .get(db.getSessions);

router
  .route('/session/train/:id')
  .get(db.getSessionsForTrainer);

router
  .route('/trainer-reviews')
  .get(db.getTrainersRnR);

module.exports = router;
