/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: 'white',
    paddingLeft: '20px',
  },
  input: {
    color: 'black',
  },
};

const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .min(4, 'Enter valid username')
    .required('Username is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const UserLogin = ({ userType, classes }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: ({ username, password }) => {
      axios.get(`/api/${userType}`, {
        params: {
          username,
          password,
        },
      }).then(({ data }) => {
        console.log(data);
        if (data.length) {
          data[0].type = userType;
          dispatch({ type: 'user', user: data[0] });
          const route = userType === 'user' ? '/home' : '/trainerdashboard';
          history.push(route);
        } else {
          // something telling username/password is invalid
        }
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          defaultValue="color"
          className={classes.root}
          InputProps={{
            className: classes.input,
          }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          defaultValue="color"
          className={classes.root}
          InputProps={{
            className: classes.input,
          }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          <span style={{ color: 'white' }}>Submit</span>
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(UserLogin);
