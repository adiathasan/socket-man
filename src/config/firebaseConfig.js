import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0NzJo1vXUboSEtZ3VE6GZNI-RCrNlC30",
  authDomain: "slack-clone-ad.firebaseapp.com",
  databaseURL: "https://slack-clone-ad.firebaseio.com",
  projectId: "slack-clone-ad",
  storageBucket: "slack-clone-ad.appspot.com",
  messagingSenderId: "624063857627",
  appId: "1:624063857627:web:3f65e5bfab0153f1edddfe",
  measurementId: "G-P3DBLHM68Z",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GithubAuthProvider();

export { provider, auth };

export default firestore;
