import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/analytics';
import config from '../../../config/config';

const firebaseConfig = {
  apiKey: config.firebaseKey,
  authDomain: 'blue-ocean-6af8d.firebaseapp.com',
  projectId: 'blue-ocean-6af8d',
  storageBucket: 'blue-ocean-6af8d.appspot.com',
  messagingSenderId: '845906164625',
  appId: '1:845906164625:web:5bef1b65373f4b5ee3b830',
  measurementId: 'G-HFX6M19S84',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
firebase.analytics();

export {
  storage, firebase as default,
};
