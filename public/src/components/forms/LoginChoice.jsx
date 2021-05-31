/* eslint-disable react/prop-types */
import React from 'react';
// import { Button } from 'react-bootstrap';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  overrides: {
    MuiRadio: {
      root: {
        color: 'white',
      },
      colorSecondary: {
        '&$checked': {
          color: 'white',
        },
      },
    },
  },
});

const LoginChoice = ({ setLoginType, loginType }) => {
  const handleChange = (event) => {
    setLoginType(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <FormControl component="fieldset">
        <RadioGroup aria-label="login" name="login" value={loginType && loginType} onChange={handleChange}>
          <FormControlLabel value="user" control={<Radio />} label="user" />
          <FormControlLabel value="trainer" control={<Radio />} label="trainer" />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};

export default LoginChoice;
