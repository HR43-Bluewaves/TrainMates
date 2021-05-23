/* eslint-disable no-console */
const pool = require('./index');

const tableName = 'sessions';
const creatTable = `
DROP TABLE IF EXISTS ${tableName};
CREATE TABLE IF NOT EXISTS ${tableName} (
  SESSION_ID SERIAL,
  CLASS_ID INT NOT NULL,
  USER_ID INT NOT NULL,
  TRAINER_ID INT NOT NULL,
  TIME DATE NOT NULL,
  OTHER_USERS TEXT[]
);
`;

pool.query(creatTable)
  .then(() => console.log(`Table '${tableName}' successfully created!`))
  .catch((err) => console.error('Error executing query', err.stack));
