import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import UserLogin from './userLogin';

const Login = () => {
  const [show, setShow] = useState(false);
  const [loginType, setLoginType] = useState('user');
  const [type, setType] = useState('login');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleType = () => {
    if (type === 'login') {
      return loginType === 'user' ? <UserLogin close={handleClose} />
        : <div>Trainer</div>;
    }
    return <div>Sign Up</div>;
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
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
