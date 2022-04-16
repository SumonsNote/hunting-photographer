// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from '.firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF80D3frdx4fHhqde3c48z-twalArtcrE",
  authDomain: "hunting-photographer.firebaseapp.com",
  projectId: "hunting-photographer",
  storageBucket: "hunting-photographer.appspot.com",
  messagingSenderId: "124548025360",
  appId: "1:124548025360:web:e4ef42539338b2f80f0e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;