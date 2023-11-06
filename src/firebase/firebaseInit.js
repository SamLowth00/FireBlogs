import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDIvawkbNLUtC7ZpStPUFqhmUGQSYnKel8",
    authDomain: "fireblogs-d59ae.firebaseapp.com",
    projectId: "fireblogs-d59ae",
    storageBucket: "fireblogs-d59ae.appspot.com",
    messagingSenderId: "397375707423",
    appId: "1:397375707423:web:e33d440b17e3fc1bfd382a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();