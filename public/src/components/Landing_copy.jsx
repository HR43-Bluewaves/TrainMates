import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import style from '../../dist/landing_test.module.css';
import Login from './forms/Login';

const Landing = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const handleLogin = () => {
    setModalType('choose');
    setShowModal(true);
  };
  const handleTrainerLogin = () => {
    history.push('/trainerdashboard');
  };
  const handleSignUp = () => {
    setModalType('signup');
    setShowModal(true);
  };
  return (
    <div className="landing">
      <Login showModal={showModal} modalType={modalType} />
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
              <button className={style.login_button} type="submit" onClick={handleLogin}>
                Login to mates
              </button>
            </div>
          </div>
        </Nav>
        <div className={style.logo_pic} />
      </div>
      <div className={style.page_2}>
        <div className="container">
          <div className="row">
            <div className={`col ${style.story_left}`}>
              <h1>OUR</h1>
              <h1>STORY</h1>
            </div>
            <div className={`col ${style.story_right}`}>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.page_3}>
        <div className="container-fluid">
          <div className="row">
            <div className={`col-4 ${style.action_shot_title}`}>
              <div className={style.action_shot_tile_wrapper}>
                <h1>ACTION</h1>
                <h1>SHOTS</h1>
              </div>
            </div>
            <div className={`col-8 row ${style.action_shot_pics}`}>
              <span className="col item_1" />
              <span className={`col ${style.item_2}`} />
              <span className={`col ${style.item_3}`} />
              <span className={`col ${style.item_4}`} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.page_4}>
        <div className={style.sign_up_logo} />
        <button className={style.sign_up_bottom} id="sign_up_bottom" type="submit" onClick={handleSignUp}>SIGN UP</button>
      </div>
    </div>
  );
};

export default Landing;
