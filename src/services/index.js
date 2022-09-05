// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV6XpbT2-yukZ12VVIFctuIwhgby0x8DY",
  authDomain: "ecommercecafe-peralta.firebaseapp.com",
  projectId: "ecommercecafe-peralta",
  storageBucket: "ecommercecafe-peralta.appspot.com",
  messagingSenderId: "97887736372",
  appId: "1:97887736372:web:0e351bd98ee5aa14abf061"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db

