// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"

import {TwitterAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCLtBkfqZTDUr0SoIfX2TPGhKx99fvFLc",
  authDomain: "musicplaylist-react.firebaseapp.com",
  projectId: "musicplaylist-react",
  storageBucket: "musicplaylist-react.appspot.com",
  messagingSenderId: "749482732442",
  appId: "1:749482732442:web:993f864e97d3aea0c7a823",
  measurementId: "G-355E2WV9Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);