import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCzEy-wx2ChQ_6QHmVXL0hKKP8tPRyoONw",
    authDomain: "clone-e41dd.firebaseapp.com",
    projectId: "clone-e41dd",
    storageBucket: "clone-e41dd.appspot.com",
    messagingSenderId: "857911249837",
    appId: "1:857911249837:web:98ab4915b80ed74f0caf24",
    measurementId: "G-3THKJ63Q9D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };