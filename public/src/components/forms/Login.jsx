/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import { Modal } from 'react-bootstrap';
/* eslint-disable no-console */
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import UserLogin from './userLogin';
import LoginChoice from './LoginChoice';
import SignUp from './SignUp';
import EditProfile from './EditProfile';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const Login = ({ modalClose, modalType, userId }) => {
  const [show, setShow] = useState(false);
  const [loginType, setLoginType] = useState('');
  const [type, setType] = useState(modalType);

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

  const editStatus = (status) => {
    if (status) {
      modalClose();
    }
  };

  const handleClose = () => {
    modalClose();
    setLoginType('');
  };
  const handleType = () => {
    if (type === 'login') {
      return <UserLogin close={handleClose} userType={loginType} />;
    }
    if (type === 'signup') {
      return <SignUp />;
    }
    if (type === 'trainer') {
      return <SignUp />;
    }
    if (type === 'edit') {
      return <EditProfile editStatus={editStatus} userId={userId} />;
    }
    return <div />;
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Dialog
          open={show}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          style={{ backgroundColor: 'transparent' }}
          overlayStyle={{ backgroundColor: 'transparent' }}
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Choose login type
            </DialogContentText>
            {type === 'login' && <LoginChoice loginType={loginType} setLoginType={setLoginType} />}
            {handleType()}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default Login;
