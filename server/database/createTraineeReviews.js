/* eslint-disable array-callback-return */
/* eslint-disable no-console */
const pool = require('./index');

const trainee = 'trainee_reviews';
const createTrainee = `
DROP TABLE IF EXISTS ${trainee};
CREATE TABLE IF NOT EXISTS ${trainee} (
  REVIEW_ID SERIAL,
  TRAINEE_ID INT NOT NULL,
  RATING INT NOT NULL,
  REVIEWER_ID INT NOT NULL,
  COMMENT TEXT,
  REVIEW_DATE DATE NOT NULL
);
`;

const reviews = [
  {
    TRAINEE_ID: 1,
    RATING: 2,
    REVIEWER_ID: 1,
    COMMENT: 'How do I even begin to explain Regina George?',
  },
  {
    TRAINEE_ID: 1,
    RATING: 4,
    REVIEWER_ID: 2,
    COMMENT: 'Regina George is flawless.',
  },
  {
    TRAINEE_ID: 1,
    RATING: 3,
    REVIEWER_ID: 3,
    COMMENT: 'She has 2 fendi purses, and a silver lexis.',
  },
  {
    TRAINEE_ID: 1,
    RATING: 5,
    REVIEWER_ID: 4,
    COMMENT: 'One time, she met John Stamos on a plane. And he told her she was pretty.',
  },
  {
    TRAINEE_ID: 1,
    RATING: 5,
    REVIEWER_ID: 5,
    COMMENT: 'One time, she punched me in the face… it was awesome!',
  },
];

const insertData = `
  INSERT INTO ${trainee} (TRAINEE_ID, RATING, REVIEWER_ID, COMMENT, REVIEW_DATE) VALUES
`;

pool.query(createTrainee)
  .then(() => console.log(`Table '${trainee}' successfully created!`))
  .then(() => {
    reviews.map((review) => {
      const classData = `(
        ${review.TRAINEE_ID},
        ${review.RATING},
        ${review.REVIEWER_ID},
        '${review.COMMENT.split("'").join("''")}',
        current_timestamp
        );`;
      pool.query(insertData + classData).then(() => console.log(`New review for trainee_id '${review.TRAINEE_ID}' added`));
    });
  })
  .catch((err) => console.error('Error executing query', err.stack));
