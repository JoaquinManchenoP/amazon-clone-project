import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhl4i5qqpAnFCOnJPLVLwt5eqa8KZ7E1E",
  authDomain: "clone-project-80839.firebaseapp.com",
  databaseURL: "https://clone-project-80839.firebaseio.com",
  projectId: "clone-project-80839",
  storageBucket: "clone-project-80839.appspot.com",
  messagingSenderId: "943124735697",
  appId: "1:943124735697:web:eb92595957634e7aeb87f0",
  measurementId: "G-DQEC8TNDEB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
