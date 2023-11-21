
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2gsZ7gyJXymVtg1FSd1-hC-8-1o54zqk",
  authDomain: "react-firebase-dd90a.firebaseapp.com",
  projectId: "react-firebase-dd90a",
  storageBucket: "react-firebase-dd90a.appspot.com",
  messagingSenderId: "37776914383",
  appId: "1:37776914383:web:6c1d38afe22611d08884ba",
  measurementId: "G-9GQF0Q89QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {
    auth
};
