/* eslint-disable no-console */
const pool = require('./index');

const tableName = 'users';
const creatTable = `
DROP TABLE IF EXISTS ${tableName};
CREATE TABLE IF NOT EXISTS ${tableName} (
  USER_ID SERIAL,
  FIRST_NAME TEXT NOT NULL,
  LAST_NAME TEXT NOT NULL,
  GENDER TEXT,
  EMAIL TEXT NOT NULL,
  CITY TEXT,
  STATE TEXT,
  ZIP INT,
  PHOTO_URL TEXT,
  SLOGAN TEXT,
  KEYPHRASES TEXT[],
  USER_NAME TEXT NOT NULL,
  PASSWORD TEXT NOT NULL
);
`;

const insertData = `
  INSERT INTO ${tableName} (FIRST_NAME, LAST_NAME, GENDER, EMAIL, CITY, STATE, ZIP, PHOTO_URL, SLOGAN, KEYPHRASES, USER_NAME, PASSWORD) VALUES
  ('Regina', 'George', 'Female', 'totallyfetch@gmail.com',
   'Evanston', 'IL', 60201 ,'https://img.particlenews.com/image.php?type=thumbnail_580x000&url=3bRbfV_0XEGgX2j00',
   'OMG I love your bracelet', '{"Pink", "Flawless","Fetch"}', 'regina', 'regina');
`;

pool.query(creatTable)
  .then(() => console.log(`Table '${tableName}' successfully created!`))
  .then(() => {
    pool.query(insertData).then(() => console.log('Get in loser, we\'re going shopping'));
  })
  .catch((err) => console.error('Error executing query', err.stack));
