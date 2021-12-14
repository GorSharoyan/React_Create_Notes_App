import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBnBfKa-b8WSyxfDzV9kfMB4NqS7r4dK-s",
  authDomain: "notes-test-app-bebd9.firebaseapp.com",
  databaseURL:
    "https://notes-test-app-bebd9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "notes-test-app-bebd9",
  storageBucket: "notes-test-app-bebd9.appspot.com",
  messagingSenderId: "174479905628",
  appId: "1:174479905628:web:ed03428ffc667b67c66799"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;
