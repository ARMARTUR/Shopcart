import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBSx4YT3lBfzUVpaQta-qCQOGthqADDSho",
  authDomain: "shopcart-82fc6.firebaseapp.com",
  projectId: "shopcart-82fc6",
  storageBucket: "shopcart-82fc6.appspot.com",
  messagingSenderId: "1003142510785",
  appId: "1:1003142510785:web:9ce02758aae74691807c40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
