// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5bZnwqZZ4NOOVYoBQQlIiDtxoLzOTdoM",
  authDomain: "barros-react-coderhouse.firebaseapp.com",
  projectId: "barros-react-coderhouse",
  storageBucket: "barros-react-coderhouse.appspot.com",
  messagingSenderId: "797489466885",
  appId: "1:797489466885:web:e09411ff6757008024966c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;