// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTYBpt9imCZhxbmqjI6KM6nBuJ_BwkIWM",
  authDomain: "netflix-gpt-b4fc7.firebaseapp.com",
  projectId: "netflix-gpt-b4fc7",
  storageBucket: "netflix-gpt-b4fc7.firebasestorage.app",
  messagingSenderId: "496251783696",
  appId: "1:496251783696:web:d6faf8203acf70e8ce9895",
  measurementId: "G-WYPP9ZCECF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth,app, analytics };