// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi3yVkxHwT4K3rpkQyu6gHu-4poHIh_IY",
  authDomain: "netflix-5b6df.firebaseapp.com",
  projectId: "netflix-5b6df",
  storageBucket: "netflix-5b6df.appspot.com",
  messagingSenderId: "59746314070",
  appId: "1:59746314070:web:fe9ba8f383135f793758f7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
