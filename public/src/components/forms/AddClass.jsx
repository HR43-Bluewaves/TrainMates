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
  class: yup
    .string('Enter class name')
    .required('Class name is required'),
  description: yup
    .string('Describe your class')
    .required('Description is required'),
});

const AddClass = ({ editStatus, userId, classes }) => {
  const user = useSelector((state) => state.userReducer.user);
  const progBar = useStyles();
  const [imageAsFile, setImageAsFile] = useState('');
  const [imageAsUrl, setImageAsUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(10);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      class: '',
      description: '',

    },
    validationSchema,
    onSubmit: (values) => {
      console.log('userid', userId);
      axios.post('/api/classes', {
        name: values.class,
        description: values.description,
        url: imageAsUrl || null,
        id: userId,
      }).then(async () => {
        const { data } = await axios.get('/api/classes');
        console.log('updated classes', data);
        const processedData = data.filter((course) => (
          course.teacher_id === user.trainer_id
        ));
        dispatch({ type: 'classes', classes: processedData });
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
          id="class"
          name="class"
          label="Class name"
          type="class"
          value={formik.values.class}
          onChange={formik.handleChange}
          error={formik.touched.class && Boolean(formik.errors.class)}
          helperText={formik.touched.class && formik.errors.class}
          defaultValue="color"
          className={classes.root}
          InputProps={{
            className: classes.input,
          }}
        />
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description"
          type="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
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
            Upload Class Image
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

export default withStyles(styles)(AddClass);
