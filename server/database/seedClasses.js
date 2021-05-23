/* eslint-disable array-callback-return */
/* eslint-disable no-console */
const pool = require('./index');

const classes = [
  {
    class_name: 'Vinyasa Yoga',
    photo_url: 'https://post.healthline.com/wp-content/uploads/2019/10/Tattooed-woman-doing-yoga-at-home-12000x628-facebook.jpg',
    description: "This timeless approach to yoga links movement and breath through a creative, flowing sequence of postures. Unlock your body's potential, challenge your limits, and soothe your mind in this transformative practice.",
    teacher_id: 5,
  },
  {
    class_name: 'Get Ripped, Mate!',
    photo_url: 'https://www.verywellfit.com/thmb/adrQ_4op_5EtWoKW_U0F8XMUuIY=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-9463659981-ab8bb96bb0af4db6a237ae11117c5d94.jpg',
    description: 'Get ripped in this strictly strength-based workout. Improve body composition and build lean muscle using a variety of strength moves and equipment.',
    teacher_id: 3,
  },
  {
    class_name: "Surf's up!",
    photo_url: 'https://media.timeout.com/images/105493347/image.jpg',
    description: 'Surfing is a way of life, mate! Let Uncle Jay show you the way!',
    teacher_id: 4,
  },
  {
    class_name: 'Golf like a pro',
    photo_url: 'https://media.timeout.com/images/105493347/image.jpg',
    description: 'Take your game to the next level! I offer a variety of lessons and programs for players of all abilities, from beginner to skilled. My services will help with your full swing, short game, course management, the mental game, and more.',
    teacher_id: 1,
  },
  {
    class_name: 'Bend it like Beckham',
    photo_url: 'https://rushcountyfoundation.org/wp-content/uploads/2019/01/soccer.jpg',
    description: "I believe in the power of soccer, the world's universal language, to create positive change for individuals, families, communities, and the world.",
    teacher_id: 2,
  },
];

const tableName = 'classes';
const creatTable = `
DROP TABLE IF EXISTS ${tableName};
CREATE TABLE IF NOT EXISTS ${tableName} (
  CLASS_ID SERIAL,
  CLASS_NAME TEXT,
  PHOTO_URL TEXT,
  DESCRIPTION TEXT,
  TEACHER_ID INT NOT NULL
);
`;

const insertData = `
  INSERT INTO ${tableName} (CLASS_NAME, PHOTO_URL, DESCRIPTION, TEACHER_ID) VALUES
`;

pool.query(creatTable)
  .then(() => console.log(`Table '${tableName}' successfully created!`))
  .then(() => {
    classes.map((aClass) => {
      const classData = `(
        '${aClass.class_name.split("'").join("''")}',
        '${aClass.photo_url}',
        '${aClass.description.split("'").join("''")}',
        ${aClass.teacher_id}
        );`;
      pool.query(insertData + classData).then(() => console.log(`Class '${aClass.class_name}' added`));
    });
  })
  .catch((err) => console.error('Error executing query', err.stack));
