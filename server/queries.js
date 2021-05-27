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
    //Will need to fix time format
    const insertQuery = `INSERT INTO sessions (class_id, user_id, trainer_id, time, other_users) VALUES (
      ${class_id}, ${user_id}, ${trainer_id}, current_timestamp, '${processedUsers}');`;
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
};

module.exports = queries;
