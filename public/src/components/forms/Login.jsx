/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import UserLogin from './UserLogin';
import LoginChoice from './LoginChoice';

const Login = ({ showModal }) => {
  const [show, setShow] = useState(showModal);
  const [loginType, setLoginType] = useState('');
  const [type, setType] = useState('choose');

  useEffect(() => {
    console.log(showModal);
    setShow(showModal);
  }, [showModal]);

  const handleClose = () => {
    setShow(false);
    setType('choose');
    setLoginType('');
  };
  const handleType = () => {
    if (type === 'choose') {
      return <LoginChoice setType={setType} setLoginType={setLoginType} />;
    }
    if (type === 'login') {
      return <UserLogin close={handleClose} userType={loginType} />;
    }
    return <div>Sign Up</div>;
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {handleType()}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
