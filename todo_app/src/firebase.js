import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBKgvp-OkDouWtnQthLpCsPFx7huaksJLU",
  authDomain: "todoapp-de81f.firebaseapp.com",
  databaseURL: "https://todoapp-de81f.firebaseio.com",
  projectId: "todoapp-de81f",
  storageBucket: "todoapp-de81f.appspot.com",
  messagingSenderId: "651263864633",
  appId: "1:651263864633:web:88cf2c4e11486110a9c2e8",
  measurementId: "G-FEF5SQY7GQ",
});

const db = firebaseApp.firestore();

export default db;
