/* eslint-disable array-callback-return */
/* eslint-disable no-console */
const pool = require('./index');

const trainers = [
  {
    first_name: 'Brandy',
    last_name: 'McLeod',
    gender: 'Female',
    email: 'bmcleod1@google.de',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90041',
    photo_url: 'https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg',
    slogan: 'Just do it',
    keyphrases: 'Beach, Yoga, Malibu',
    user_name: 'brandy',
    password: 'password',
  },
  {
    first_name: 'Quintin',
    last_name: 'Savory',
    gender: 'Neutral',
    email: 'qsavory3@timesonline.co.uk',
    city: 'Evanston',
    state: 'IL',
    zip: '60201',
    photo_url: 'https://i.dailymail.co.uk/1s/2020/03/10/23/25755192-8093391-_Pinch_me_Bethany_shared_their_excitement_over_the_campaign_whil-a-81_1583883949654.jpg',
    slogan: "Let's get physical!",
    keyphrases: 'Boxing, tennis, Acai bowl',
    user_name: 'quintin',
    password: 'password',
  },
  {
    first_name: 'Jordan',
    last_name: 'Stancer',
    gender: 'Male',
    email: 'rstancer4@aboutads.info',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90210',
    photo_url: 'https://recreation.georgetown.edu/wp-content/uploads/sites/80/2019/02/img_0168.jpg',
    slogan: 'The Workout spirit',
    keyphrases: 'Equinox, Public training, Groupies',
    user_name: 'jordan',
    password: 'password',
  },
  {
    first_name: 'Julian',
    last_name: 'Yuen',
    gender: 'Male',
    email: 'julian@aol.com',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90210',
    photo_url: 'https://images.squarespace-cdn.com/content/v1/56f0daad2eeb8185c4081072/1612054990074-X47TKNRZX249YPZN0NOD/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/julian+rt+black+shirt.jpg?format=1500w',
    slogan: 'Aloha!',
    keyphrases: 'Acting, Technology, Hawaii',
    user_name: 'julian',
    password: 'password',
  },
  {
    first_name: 'Jenny',
    last_name: 'Cho',
    gender: 'Female',
    email: 'jcho4@aboutads.info',
    city: 'San Francisco',
    state: 'CA',
    zip: '94118',
    photo_url: 'https://imgix.bustle.com/uploads/getty/2021/4/14/f6e390be-eee6-4d71-8e31-a61e00ce0960-getty-1311969535.jpg?w=800&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5316302083333333&fp-y=0.2774453125',
    slogan: 'Excuse me, I have a question!',
    keyphrases: 'Questions, passwords solving',
    user_name: 'jenny',
    password: 'password',
  },
];

const tableName = 'trainers';
const creatTable = `
DROP TABLE IF EXISTS ${tableName};
CREATE TABLE IF NOT EXISTS ${tableName} (
  TRAINER_ID SERIAL,
  FIRST_NAME TEXT NOT NULL,
  LAST_NAME TEXT NOT NULL,
  GENDER TEXT,
  EMAIL TEXT NOT NULL,
  CITY TEXT NOT NULL,
  STATE TEXT NOT NULL,
  ZIP INT NOT NULL,
  PHOTO_URL TEXT,
  SLOGAN TEXT,
  KEYPHRASES TEXT[],
  USER_NAME TEXT NOT NULL,
  PASSWORD TEXT NOT NULL
);
`;

const insertData = `
  INSERT INTO ${tableName} (TRAINER_ID, FIRST_NAME, LAST_NAME, GENDER, EMAIL, CITY, STATE, ZIP, PHOTO_URL, SLOGAN, KEYPHRASES, USER_NAME, PASSWORD) VALUES
`;

pool.query(creatTable)
  .then(() => console.log(`Table '${tableName}' successfully created!`))
  .then(() => {
    trainers.map((trainer, trainerNum) => {
      let processedPhrases = '{';
      trainer.keyphrases.split(',').map((word, index) => {
        if (index !== trainer.keyphrases.split(',').length - 1) {
          const newWord = `"${word.trim().split("'").join("''")}",`;
          processedPhrases += newWord;
        } else {
          const newWord = `"${word.trim().split("'").join("''")}"`;
          processedPhrases += newWord;
        }
      });
      processedPhrases += '}';
      const trainerData = `(
        ${trainerNum + 1},
        '${trainer.first_name}',
        '${trainer.last_name}',
        '${trainer.gender}',
        '${trainer.email}',
        '${trainer.city}',
        '${trainer.state}',
        ${trainer.zip},
        '${trainer.photo_url}',
        '${trainer.slogan.split("'").join("''")}',
        '${processedPhrases}',
        '${trainer.user_name}',
        '${trainer.password}');`;
      pool.query(insertData + trainerData).then(() => console.log(`Trainer '${trainer.first_name}' added`));
    });
  })
  .catch((err) => console.error('Error executing query', err.stack));
