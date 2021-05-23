/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const qs = require('querystring');
// const compression = require('compression');
const path = require('path');

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/dist')));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
