const router = require('express').Router();
const db = require('./queries');

router
  .route('/user')
  .get(db.getUser);

router
  .route('/classes')
  .get(db.getAllClasses);

router
  .route('/trainers')
  .get(db.getAllTrainers);

module.exports = router;
