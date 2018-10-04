import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDt1P0hj1e7vUvnV7PK06Kg0MHViqETBVg",
    authDomain: "react-with-firbase.firebaseapp.com",
    databaseURL: "https://react-with-firbase.firebaseio.com",
    projectId: "react-with-firbase",
    storageBucket: "react-with-firbase.appspot.com",
    messagingSenderId: "794981935465"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({
      timestampsInSnapshots: true
  })

export default firebase;