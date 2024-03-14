// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKzS1Qniy5EiuCeHIxJi-ZYGTPaGCVv3I",
  authDomain: "linevote-c749a.firebaseapp.com",
  projectId: "linevote-c749a",
  storageBucket: "linevote-c749a.appspot.com",
  messagingSenderId: "73424667386",
  appId: "1:73424667386:web:25db9cecedf722ed1b3f43",
  measurementId: "G-49Y9F0ECJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);