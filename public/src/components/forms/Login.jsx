/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import UserLogin from './UserLogin';
import LoginChoice from './LoginChoice';
import SignUp from './SignUp';

const Login = ({ showModal, modalType }) => {
  const [show, setShow] = useState(showModal);
  const [loginType, setLoginType] = useState('');
  const [type, setType] = useState(modalType);

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  useEffect(() => {
    setType(modalType);
  }, [modalType]);

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
    if (type === 'signup') {
      return <SignUp />;
    }
    return <div />;
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
