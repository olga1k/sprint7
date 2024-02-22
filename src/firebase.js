// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB3AsxEu1UdkWcIXUcneNSqvfI_cE4EZU8",
  authDomain: "starwars-c323d.firebaseapp.com",
  projectId: "starwars-c323d",
  storageBucket: "starwars-c323d.appspot.com",
  messagingSenderId: "337347347920",
  appId: "1:337347347920:web:9cc82937f036b6c7d6a5d5",
  measurementId: "G-QFJ3DKM5J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };