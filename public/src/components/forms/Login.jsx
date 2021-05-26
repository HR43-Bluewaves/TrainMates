/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import UserLogin from './userLogin';
import LoginChoice from './LoginChoice';
import SignUp from './SignUp';

const Login = ({ modalClose, modalType }) => {
  const [show, setShow] = useState(false);
  const [loginType, setLoginType] = useState('');
  const [type, setType] = useState(modalType);
  console.log(modalType);

  useEffect(() => {
    setType(modalType);
  }, [modalType]);

  useEffect(() => {
    if (modalType.length) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [modalType]);

  useEffect(() => {
    return () => {
      setShow(false);
    };
  }, []);

  const handleClose = () => {
    modalClose();
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
