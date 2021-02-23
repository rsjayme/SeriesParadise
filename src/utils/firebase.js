import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC_HX_sztUnEDXYIl-LHVoq4lp60LcVUe4',
  authDomain: 'series-paradise.firebaseapp.com',
  projectId: 'series-paradise',
  storageBucket: 'series-paradise.appspot.com',
  messagingSenderId: '333100817633',
  appId: '1:333100817633:web:0829cc57100b285af22ba0',
  measurementId: 'G-DLTEFQWNC7',
};

export const fireBaseInit = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
};

export const fireBaseLogin = async (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};

export const fireBaseDb = () => {
  return firebase.firestore();
};
