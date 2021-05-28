/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const db = require('./database/index');

const queries = {
  bookSession: (req, res) => {
    const {
      class_id, user_id, trainer_id, time, other_users,
    } = req.body;
    let processedUsers = '{';
    other_users.split(',').map((user, index) => {
      if (index !== other_users.split(',').length - 1) {
        const newWord = `"${user.trim()}",`;
        processedUsers += newWord;
      } else {
        const newWord = `"${user.trim()}"`;
        processedUsers += newWord;
      }
    });
    processedUsers += '}';
    const formattedDate = time.split('T').join(' ');
    const insertQuery = `INSERT INTO sessions (class_id, user_id, trainer_id, time, other_users) VALUES (
      ${class_id}, ${user_id}, ${trainer_id}, '${formattedDate}', '${processedUsers}');`;
    db.query(insertQuery)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getUser: (req, res) => {
    const { username, password } = req.query;
    db.query(`SELECT * FROM users WHERE user_name = '${username}' AND '${password}' = password`)
      .then((result) => {
        res.status(200).send(result.rows);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  addUser: (req, res) => {
    const {
      username, password, email, first, last,
    } = req.body;
    db.query(`INSERT INTO users (first_name, last_name, email, user_name, password) VALUES ('${first}', '${last}', '${email}', '${username}', '${password}')`)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  editUser: (req, res) => {
    const {
      username, password, email, first, last, city, state, zip,
    } = req.body;
    db.query(`UPDATE users SET user_name = '${username}', password = '${password}', email = '${email}', first_name = '${first}', last_name = '${last}', city = '${city}', state = '${state}', zip = '${zip}' WHERE user_id = ${req.params.id}`)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err);
      });
  },
  getTrainer: (req, res) => {
    const { username, password } = req.query;
    db.query(`SELECT * FROM trainers WHERE user_name = '${username}' AND '${password}' = password`)
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
  getTrainersRnR: (req, res) => {
    db.query('SELECT * FROM trainer_reviews')
      .then((result) => {
        res.status(200).send(result.rows);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  addRatingsAndReviews: (req, res) => {
    console.log(req.body);
    const {
      trainer_id, rating, reviewer_id, comment, review_date,
    } = req.body;
    db.query(`INSERT INTO trainer_reviews (trainer_id, rating, reviewer_id, comment, review_date)
              VALUES (${trainer_id}, ${rating}, ${reviewer_id}, '${comment}', current_timestamp)`)
      .then((result) => {
        res.status(200).send(result.rows);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
};

module.exports = queries;
