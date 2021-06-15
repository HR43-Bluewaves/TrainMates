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
    class_name: 'Step it up',
    photo_url: 'https://st.depositphotos.com/1825047/4138/i/600/depositphotos_41388073-stock-photo-the-dancer.jpg',
    description: 'Leave It On The Floor. Let your body do the talk!',
    teacher_id: 5,
  },
  {
    class_name: 'Get Ripped, Mate!',
    photo_url: 'https://www.verywellfit.com/thmb/adrQ_4op_5EtWoKW_U0F8XMUuIY=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-9463659981-ab8bb96bb0af4db6a237ae11117c5d94.jpg',
    description: 'Get ripped in this strictly strength-based workout. Improve body composition and build lean muscle using a variety of strength moves and equipment.',
    teacher_id: 3,
  },
  {
    class_name: 'Bump, set, spike!',
    photo_url: 'https://media.istockphoto.com/videos/women-in-sport-volleyball-video-id693245270?b=1&k=6&m=693245270&s=640x640&h=EpTr9dvmSoMwAGmszBzP3EOeykqoynpam0nXdHFRF1g=',
    description: 'Beginniner friendly to advanced drills. Ready to receive the fun lessons or let this opporunity float away?',
    teacher_id: 3,
  },
  {
    class_name: "Surf's up!",
    photo_url: 'https://media.timeout.com/images/105493347/image.jpg',
    description: 'Surfing is a way of life, mate! Let Uncle Jay show you the way!',
    teacher_id: 4,
  },
  {
    class_name: 'Acting for the stars!',
    photo_url: 'https://i.pinimg.com/originals/bd/3b/38/bd3b38e7890ffb1d010e9a78dc12f8b8.jpg',
    description: 'Aloha! Let Uncle Jay help you find your act!',
    teacher_id: 4,
  },
  {
    class_name: 'Golf like a pro',
    photo_url: 'https://media.istockphoto.com/photos/hand-of-woman-golf-player-gentle-put-a-golf-ball-onto-wooden-tee-on-picture-id1155100733?k=6&m=1155100733&s=612x612&w=0&h=sxIAEntucAKS_NnFTBAMtwlIvqgPCt8wDMv_G2bfLuw=',
    description: 'Take your game to the next level! I offer a variety of lessons and programs for players of all abilities, from beginner to skilled. My services will help with your full swing, short game, course management, the mental game, and more.',
    teacher_id: 1,
  },
  {
    class_name: 'Skyfall',
    photo_url: 'https://media.istockphoto.com/photos/amazing-skydiving-at-the-sunset-picture-id955020826?k=6&m=955020826&s=612x612&w=0&h=_rEv2CzSircnQvpFOpDkZv5GYe-WfzDohquDyPJax2c=',
    description: "Adventure is just around the corner. Suited for people with love for sightseeing. Let's take a dive!",
    teacher_id: 1,
  },
  {
    class_name: 'Bend it like Beckham',
    photo_url: 'https://rushcountyfoundation.org/wp-content/uploads/2019/01/soccer.jpg',
    description: "I believe in the power of soccer, the world's universal language, to create positive change for individuals, families, communities, and the world.",
    teacher_id: 2,
  },
  {
    class_name: 'Serving up an ace',
    photo_url: 'https://media.istockphoto.com/photos/beautiful-female-tennis-player-serving-picture-id483794130?k=6&m=483794130&s=612x612&w=0&h=STYFBXosaK5CBMug-f5F8vRIhiLKMkgtfTAihdMcTpw=',
    description: 'Good shot, bad luck, and hell are the five basic words to be used in a game of tennis, though these, of course, can be slightly amplified with the help from me.',
    teacher_id: 2,
  },
];

const tableName = 'classes';
const createtable = `
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

pool.query(createtable)
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
