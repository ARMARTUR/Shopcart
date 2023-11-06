import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkkgQUdHFd1XxpuxYPAoTnJYpFVrC5764",

  authDomain: "shopcart-8c6aa.firebaseapp.com",

  projectId: "shopcart-8c6aa",

  storageBucket: "shopcart-8c6aa.appspot.com",

  messagingSenderId: "586674920254",

  appId: "1:586674920254:web:a3856bf0b8f79e0d4bea6f",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
