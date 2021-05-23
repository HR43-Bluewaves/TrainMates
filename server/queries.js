const db = require('./database/index');

const queries = {
  getUser: (req, res) => {
    db.query('SELECT * FROM users WHERE user_id = 1')
      .then((result) => {
        res.status(200).send(result.rows);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getAllTrainers: (req, res) => {
    db.query('SELECT * FROM trainers')
      .then((result) => {
        res.status(200).send(result.rows);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getAllClasses: (req, res) => {
    db.query('SELECT * FROM classes')
      .then((result) => {
        res.status(200).send(result.rows);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
};

module.exports = queries;
