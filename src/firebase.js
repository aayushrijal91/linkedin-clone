import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA3yYFcsL9RYQc5XDhixCMbH0TUgqWXReA",
    authDomain: "linkedin-ayz.firebaseapp.com",
    projectId: "linkedin-ayz",
    storageBucket: "linkedin-ayz.appspot.com",
    messagingSenderId: "1038458518167",
    appId: "1:1038458518167:web:4577a259891d78390dc7d2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };