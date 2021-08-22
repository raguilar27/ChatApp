import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDBSzfvYoNyv3jQL0l395CCdgQlOIfP2rU",
    authDomain: "chatapp-d0106.firebaseapp.com",
    projectId: "chatapp-d0106",
    storageBucket: "chatapp-d0106.appspot.com",
    messagingSenderId: "274124030908",
    appId: "1:274124030908:web:5707fea482752aa0a7a1b9",
  })
  .auth();
