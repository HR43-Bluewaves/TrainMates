/* eslint-disable array-callback-return */
/* eslint-disable no-console */
const pool = require('./index');

const trainer = 'trainer_reviews';

const createTrainer = `
DROP TABLE IF EXISTS ${trainer};
CREATE TABLE IF NOT EXISTS ${trainer} (
  REVIEW_ID SERIAL,
  TRAINER_ID INT NOT NULL,
  RATING INT NOT NULL,
  REVIEWER_ID INT NOT NULL,
  COMMENT TEXT,
  REVIEW_DATE DATE NOT NULL
);
`;

const reviews = [
  {
    TRAINER_ID: 1,
    RATING: 4,
    REVIEWER_ID: 1,
    COMMENT: 'Totally georgous',
  },
  {
    TRAINER_ID: 2,
    RATING: 5,
    REVIEWER_ID: 1,
    COMMENT: "So you agree that you think you're pretty",
  },
  {
    TRAINER_ID: 3,
    RATING: 3,
    REVIEWER_ID: 1,
    COMMENT: 'That is the ugliest effin shirt I have ever seen.',
  },
  {
    TRAINER_ID: 4,
    RATING: 5,
    REVIEWER_ID: 1,
    COMMENT: 'So fetch!',
  },
  {
    TRAINER_ID: 5,
    RATING: 2,
    REVIEWER_ID: 1,
    COMMENT: 'Why are you so obesessed with me!!!',
  },
];

const insertData = `
  INSERT INTO ${trainer} (TRAINER_ID, RATING, REVIEWER_ID, COMMENT, REVIEW_DATE) VALUES
`;

pool.query(createTrainer)
  .then(() => console.log(`Table '${trainer}' successfully created!`))
  .then(() => {
    reviews.map((review) => {
      const classData = `(
        ${review.TRAINER_ID},
        ${review.RATING},
        ${review.REVIEWER_ID},
        '${review.COMMENT.split("'").join("''")}',
        current_timestamp
        );`;
      pool.query(insertData + classData).then(() => console.log(`New review for trainer_id '${review.TRAINER_ID}' added`));
    });
  })
  .catch((err) => console.error('Error executing query', err.stack));
