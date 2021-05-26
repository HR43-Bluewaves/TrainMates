/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const LoginChoice = ({ setLoginType, loginType }) => {
  const handleChange = (event) => {
    setLoginType(event.target.value);
  };
  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="login" name="login" value={loginType && loginType} onChange={handleChange}>
        <FormControlLabel value="user" control={<Radio />} label="user" />
        <FormControlLabel value="trainer" control={<Radio />} label="trainer" />
      </RadioGroup>
    </FormControl>
  );
};

export default LoginChoice;
// <Button onClick={() => {
//   setType('login');
//   setLoginType('trainer');
// }}
// >
//   Trainer
// </Button>
// <Button onClick={() => {
//   setType('login');
//   setLoginType('user');
// }}
// >
//   User
// </Button>
