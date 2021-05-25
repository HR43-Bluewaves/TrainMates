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

const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .min(4, 'Enter valid username')
    .required('Username is required'),
  // email: yup
  //   .string('Enter your email')
  //   .email('Enter a valid email')
  //   .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const UserLogin = ({ userType }) => {
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
        console.log(data)
        if (data.length) {
          data[0].type = userType;
          dispatch({ type: 'user', user: data[0] });
          history.push('/home');
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
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UserLogin;
