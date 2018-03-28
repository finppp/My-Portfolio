import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC8JyF3RJozODI0CbqQBsk8u0Wb3zfKoFU",
  authDomain: "finni-ce5e9.firebaseapp.com",
  databaseURL: "https://finni-ce5e9.firebaseio.com",
  projectId: "finni-ce5e9",
  storageBucket: "finni-ce5e9.appspot.com",
  messagingSenderId: "472108067199"
};

firebase.initializeApp(config);
var firebaseDatabase = firebase.database();
export { firebaseDatabase as database };
