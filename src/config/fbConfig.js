import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAGOTOfbrqHMp2xQorK6EU-KHgkGiCmy-0",
    authDomain: "netninjatut.firebaseapp.com",
    databaseURL: "https://netninjatut.firebaseio.com",
    projectId: "netninjatut",
    storageBucket: "netninjatut.appspot.com",
    messagingSenderId: "637275771651"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
