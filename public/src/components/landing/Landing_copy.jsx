import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Login from '../forms/Login';
import PageOne from './pageOne';
import PageTwo from './pageTwo';
import PageThree from './pageThree';
import PageFour from './pageFour';

const Landing = () => {
  // const history = useHistory();
  const [modalType, setModalType] = useState('');
  const handleLogin = () => {
    setModalType('login');
  };
  const handleTrainerLogin = () => {
    setModalType('trainer');
    // history.push('/trainerdashboard');
  };
  const handleSignUp = () => {
    setModalType('signup');
  };

  const modalClose = () => {
    setModalType('');
  };
  return (
    <div className="landing">
      <Login modalClose={modalClose} modalType={modalType} />
      <PageOne
        handleTrainerLogin={handleTrainerLogin}
        handleLogin={handleLogin}
      />
      <PageTwo />
      <PageThree />
      <PageFour handleSignUp={handleSignUp} />
    </div>
  );
};

export default Landing;
