import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDSnnpusQNLsr14cR0oLJJjLWSI8Ss4f8o',
  authDomain: 'blue-ocean-6af8d.firebaseapp.com',
  projectId: 'blue-ocean-6af8d',
  storageBucket: 'blue-ocean-6af8d.appspot.com',
  messagingSenderId: '845906164625',
  appId: '1:845906164625:web:5bef1b65373f4b5ee3b830',
  measurementId: 'G-HFX6M19S84',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
firebase.analytics();

export {
  storage, firebase as default,
};
