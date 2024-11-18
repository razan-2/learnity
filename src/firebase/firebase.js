// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDD3EEFQZBtazDDrE1TRAh4VzowkfNb5-w",
  authDomain: "learnity-6d9a4.firebaseapp.com",
  projectId: "learnity-6d9a4",
  storageBucket: "learnity-6d9a4.appspot.com",
  messagingSenderId: "827046489843",
  appId: "1:827046489843:web:474fdbd807b1b80e461186",
  measurementId: "G-GBKMQV3M3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore()

const analytics = getAnalytics(app);

export {app, auth, firestore};