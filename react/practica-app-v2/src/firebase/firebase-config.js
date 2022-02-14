import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA88G68Cnupx7tEu0TU3jqt37D_EWaREGs",
  authDomain: "fir-app-udemy-db22f.firebaseapp.com",
  databaseURL: "https://fir-app-udemy-db22f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-app-udemy-db22f",
  storageBucket: "fir-app-udemy-db22f.appspot.com",
  messagingSenderId: "863781109553",
  appId: "1:863781109553:web:9745747a4b7ca282db7a10"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}