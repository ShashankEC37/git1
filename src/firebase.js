import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDdI44ykUfI1IKIndAGCRd6gERtXpOzPVU",
  authDomain: "clone-fc4d8.firebaseapp.com",
  databaseURL: "https://clone-fc4d8.firebaseio.com",
  projectId: "clone-fc4d8",
  storageBucket: "clone-fc4d8.appspot.com",
  messagingSenderId: "905311665905",
  appId: "1:905311665905:web:9c134d071ba8b9f15fb350",
  measurementId: "G-WXJ2ESX2ZR",
});

const auth = firebase.auth();

export { auth };
