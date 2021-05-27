const router = require('express').Router();
const db = require('./queries');

router
  .route('/user')
  .get(db.getUser)
  .post(db.addUser);
router
  .route('/user/:id')
  .get(db.editUser);

router
  .route('/classes')
  .get(db.getAllClasses);

router
  .route('/trainers')
  .get(db.getAllTrainers);

router
  .route('/trainer')
  .get(db.getTrainer);

router
  .route('/session')
  .post(db.bookSession);

module.exports = router;
