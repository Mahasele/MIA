// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMeStz4hV5ttA8QzmBCXrbODerjIk7NWU",
  authDomain: "miaendass.firebaseapp.com",
  projectId: "miaendass",
  storageBucket: "miaendass.appspot.com",
  messagingSenderId: "67328115149",
  appId: "1:67328115149:web:2782fdbb87d3c8c3d4c484",
  measurementId: "G-YJ7MTH82BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);