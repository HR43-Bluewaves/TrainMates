/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const { Pool } = require('pg');
const config = require('../../config/config');

// Local host version
// Before running this script, make sure you have a database created called Blueocean
const pool = new Pool({
  user: config.user,
  host: 'localhost',
  database: config.database,
  password: config.password,
  port: 5432, // This is the default port
});

// // AWS server version
// const pool = new Pool({
//   user: config.AWSUSER,
//   host: config.AWS,
//   database: 'Reviews',
//   password: config.AWSPW,
//   port: 5432,
// });

// // AWS postgres version
// const pool = new Pool({
//   user: config.AWSUSER,
//   host: 'localhost',
//   database: 'Reviews',
//   password: config.AWSPW,
//   port: 5432,
// });

pool.connect((err, res) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected to database');
  }
});

module.exports = pool;
