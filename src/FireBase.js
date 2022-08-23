// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZGDmGuchFt9CZG5sExbLqIOS_B-CyMcs",
  authDomain: "multihospital-5d8bc.firebaseapp.com",
  projectId: "multihospital-5d8bc",
  storageBucket: "multihospital-5d8bc.appspot.com",
  messagingSenderId: "364985563696",
  appId: "1:364985563696:web:aba90162bb23d86e634bf5",
  measurementId: "G-RYMQJZ09RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);