import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Col, Container } from 'react-bootstrap';
import NavBar from '../user-dashboard/Navbar';
import TrainerNavBar from '../trainer-dashboard/TrainerNavbar';
import styles from './chat.module.css';

const Chat = () => {
  const user = useSelector((state) => state.userReducer.user);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className={styles.Chatcontainer}>
      <style type="text/css">
        {`
          .temp {
            color: white
          }
        `}
      </style>
      <h1 className="temp">More chat features coming soon!</h1>
      {user.type === 'trainer' ? <TrainerNavBar /> : <NavBar />}
      <Container className={styles.chatbox}>
        <Col xs={5} className={styles.contactList}>
          <div className={styles.listTitle}>
            <h1>LET&lsquo;S CHAT</h1>
          </div>
          <ul className={styles.listContent}>
            <li className={styles.contactItem}>Dennis W.</li>
            <li className={styles.contactItem}>Dennis W.</li>
            <li className={styles.contactItem}>Dennis W.</li>
            <li className={styles.contactItem}>Dennis W.</li>
            <li className={styles.contactItem}>Dennis W.</li>
          </ul>
        </Col>
        <motion.Col
          xs={7}
          className={styles.chatList}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className={styles.messagebox}
            variants={item}
          >
            <div className={styles.avatar}>D</div>
            <div className={styles.chatItem}>This is a message!</div>
          </motion.div>
          <motion.div
            className={styles.messagebox}
            variants={item}
          >
            <div className={styles.avatar}>D</div>
            <div className={styles.chatItem}>This is a message!</div>
          </motion.div>
          <motion.div
            className={styles.messagebox}
            variants={item}
          >
            <div className={styles.avatar}>D</div>
            <div className={styles.chatItem}>
              This is  a looooooooooooooo
              oooooooooooooooooooo
              oooooooooooooooooooooooong
              looooooooooooooo
              oooooooooooooooooooo
              oooooooooooooooooooooooong
              looooooooooooooo
              oooooooooooooooooooo
              oooooooooooooooooooooooong
              looooooooooooooo
              oooooooooooooooooooo
              oooooooooooooooooooooooong
              looooooooooooooo
              oooooooooooooooooooo
              oooooooooooooooooooooooong message!
            </div>
          </motion.div>

        </motion.Col>
      </Container>
    </div>
  );
};

export default Chat;
