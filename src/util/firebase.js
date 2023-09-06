// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdGB00bfcS18fodusSbvOeN76MIyKJrTE",
  authDomain: "netflixgpt-1998c.firebaseapp.com",
  projectId: "netflixgpt-1998c",
  storageBucket: "netflixgpt-1998c.appspot.com",
  messagingSenderId: "1058113245870",
  appId: "1:1058113245870:web:2c279acf6919684323133f",
  measurementId: "G-RP7SCS0Y88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();