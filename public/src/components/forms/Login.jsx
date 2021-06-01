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
import EditTrainer from './EditTrainer';
import AddClass from './AddClass';
import EditClass from './EditClass';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ce8837',
    },
  },
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiFilledInput: {
      margin: 'dense',
    },
    MuiFormControl: {
      margin: 'dense',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiListItem: {
      dense: true,
    },
    MuiOutlinedInput: {
      margin: 'dense',
    },
    MuiFab: {
      size: 'small',
    },
    MuiTable: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
    },
    MuiToolbar: {
      variant: 'dense',
    },
  },
  overrides: {
    MuiIconButton: {
      sizeSmall: {
        // Adjust spacing to reach minimal touch target hitbox
        marginLeft: 4,
        marginRight: 4,
        padding: 12,
      },
    },
  },
});
const Login = ({
  modalClose, modalType, userId, classId,
}) => {
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
      return <SignUp type={loginType} />;
    }
    if (type === 'trainer') {
      return <SignUp type="trainer" />;
    }
    if (type === 'edit') {
      return <EditProfile editStatus={editStatus} userId={userId} />;
    }
    if (type === 'class') {
      return <AddClass editStatus={editStatus} userId={userId} />;
    }
    if (type === 'edit-trainer') {
      return <EditTrainer editStatus={editStatus} userId={userId} />;
    }
    if (type === 'edit-class') {
      return <EditClass editStatus={editStatus} classId={classId} />;
    }
    return <div />;
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Dialog
          PaperProps={{
            style: {
              backgroundColor: 'black',
              borderWidth: 5,
              borderRadius: 5,
              borderColor: '#ce8837',
              borderStyle: 'solid',
              color: '#fff',
            },
          }}
          open={show}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          style={{ backgroundColor: 'transparent' }}
          overlayStyle={{ backgroundColor: 'transparent' }}
        >
          <DialogTitle id="form-dialog-title">{type === 'login' && Login}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <span style={{ color: 'white' }}>{type === 'login' && 'Choose login type'}</span>
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
