/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';

const LoginChoice = ({ setType, setLoginType }) => (
  <div>
    <Button onClick={() => {
      setType('login');
      setLoginType('trainer');
    }}
    >
      Trainer
    </Button>
    <Button onClick={() => {
      setType('login');
      setLoginType('user');
    }}
    >
      User
    </Button>
  </div>
);

export default LoginChoice;
