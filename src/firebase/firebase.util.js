import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const  config  = {
    apiKey: "AIzaSyDLvpwGg-lKk80sg9hR9RphoQz91MYj2Ms",
    authDomain: "crwn-db-7492e.firebaseapp.com",
    databaseURL: "https://crwn-db-7492e.firebaseio.com",
    projectId: "crwn-db-7492e",
    storageBucket: "",
    messagingSenderId: "1067283641489",
    appId: "1:1067283641489:web:6e6a25a0c9b48993"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;