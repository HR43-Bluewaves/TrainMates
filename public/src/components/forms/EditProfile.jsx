/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddIcon from '@material-ui/icons/Add';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import { storage } from '../../firebase/firebase';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

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
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  first: yup
    .string('Enter your first name')
    .required('First name is required'),
  last: yup
    .string('Enter your last name')
    .required('Last name is required'),
});

const EditProfile = ({ editStatus, userId, classes }) => {
  const progBar = useStyles();
  const [imageAsFile, setImageAsFile] = useState('');
  const [imageAsUrl, setImageAsUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(10);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userReducer.user);
  const formik = useFormik({
    initialValues: {
      username: userInfo.user_name || '',
      password: userInfo.password || '',
      first: userInfo.first_name || '',
      last: userInfo.last_name || '',
      email: userInfo.email || '',
      city: userInfo.city || '',
      state: userInfo.state || '',
      zip: userInfo.zip || '',
    },
    validationSchema,
    onSubmit: (values) => {
      axios.put(`/api/user/${userId}`, {
        username: values.username,
        password: values.password,
        email: values.email,
        first: values.first,
        last: values.last,
        city: values.city,
        state: values.state,
        zip: values.zip || 0,
        url: imageAsUrl || userInfo.photo_url,
      }).then(async () => {
        const { data } = await axios.get('/api/user', {
          params: {
            username: values.username,
            password: values.password,
          },
        });
        dispatch({ type: 'user', user: data[0] });
        editStatus(true);
      }).catch((err) => {
        console.log(err);
        editStatus(false);
      });
    },
  });

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile(image);
  };

  const handleFireBaseUpload = () => {
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
    uploadTask.on('state_changed',
      ({ _delegate }) => {
        const { bytesTransferred, totalBytes } = _delegate;
        const percent = (bytesTransferred / totalBytes).toFixed(2) * 100;
        setProgress(percent);
      }, (err) => {
        console.log(err);
      }, () => {
        storage.ref('images').child(imageAsFile.name).getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl(fireBaseUrl);
          });
      });
  };

  const resetFiles = () => {
    setImageAsFile('');
    setImageAsUrl('');
  };

  useEffect(() => {
    if (imageAsFile && !imageAsUrl) {
      handleFireBaseUpload();
      setUploading(true);
    }
    if (imageAsUrl) {
      setUploading(false);
    }
  }, [imageAsFile, imageAsUrl]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="first"
          name="first"
          label="First Name"
          type="first"
          value={formik.values.first}
          onChange={formik.handleChange}
          error={formik.touched.first && Boolean(formik.errors.first)}
          helperText={formik.touched.first && formik.errors.first}
          defaultValue="color"
          className={classes.root}
          InputProps={{
            className: classes.input,
          }}
        />
        <TextField
          fullWidth
          id="last"
          name="last"
          label="Last Name"
          type="last"
          value={formik.values.last}
          onChange={formik.handleChange}
          error={formik.touched.last && Boolean(formik.errors.last)}
          helperText={formik.touched.last && formik.errors.last}
          defaultValue="color"
          className={classes.root}
          InputProps={{
            className: classes.input,
          }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          defaultValue="color"
          className={classes.root}
          InputProps={{
            className: classes.input,
          }}
        />
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
        <TextField
          fullWidth
          id="city"
          name="city"
          label="City"
          type="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          defaultValue="color"
          className={classes.root}
          InputProps={{
            className: classes.input,
          }}
        />
        <TextField
          fullWidth
          id="state"
          name="state"
          label="State"
          type="state"
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.touched.state && Boolean(formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
          defaultValue="color"
          className={classes.root}
          InputProps={{
            className: classes.input,
          }}
        />
        <TextField
          fullWidth
          id="zip"
          name="zip"
          label="Zip"
          type="zip"
          value={formik.values.zip}
          onChange={formik.handleChange}
          error={formik.touched.zip && Boolean(formik.errors.zip)}
          helperText={formik.touched.zip && formik.errors.zip}
          defaultValue="color"
          className={classes.root}
          InputProps={{
            className: classes.input,
          }}
        />
        <br />
        <br />
        <label htmlFor="upload-photo">
          <input
            style={{ display: 'none' }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            accept="image/png, image/jpeg"
            onClick={resetFiles}
            onChange={handleImageAsFile}
          />
          <Fab
            color="info"
            size="small"
            component="span"
            aria-label="add"
            variant="extended"
          >
            <AddIcon />
            {' '}
            Change photo
          </Fab>
        </label>
        <Button color="primary" variant="contained" fullWidth type="submit" disabled={uploading}>
          {!uploading ? <span style={{ color: 'white' }}>Submit</span>
            : (
              <div className={progBar.root}>
                <LinearProgress variant="determinate" value={progress} />
              </div>
            )}
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(EditProfile);
