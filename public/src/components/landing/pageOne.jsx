import React from 'react';
import { motion } from 'framer-motion';
import { Nav } from 'react-bootstrap';
import style from '../../../dist/landing_test.module.css';

const PageOne = ({ handleTrainerLogin, handleLogin }) => (
  <div className={style.page_1}>
    <Nav class="navbar navbar-light fixed-top">
      <span className={style.logo_word} />
      <div className={style.login}>
        <div className={style.button_wrapper}>
          <button type="submit" className={style.trainer_signup} onClick={handleTrainerLogin}>
            Become A Trainer
          </button>
        </div>
        <div className={style.button_wrapper}>
          <button type="submit" className={style.signup}>
            <a href="#sign_up_bottom">Sign up</a>
          </button>
        </div>
        <div className={style.button_wrapper}>
          <button
            className={style.login_button}
            type="submit"
            onClick={handleLogin}
          >
            Login to mates
          </button>
        </div>
      </div>
    </Nav>
    <motion.div
      className={style.logo_pic}
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
    />
  </div>
);
export default PageOne;
