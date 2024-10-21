// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP52z2qzA3afp549kHTJJ66aSfIHQomJU",
  authDomain: "netflix-v2-5d478.firebaseapp.com",
  projectId: "netflix-v2-5d478",
  storageBucket: "netflix-v2-5d478.appspot.com",
  messagingSenderId: "482421241099",
  appId: "1:482421241099:web:3ffcd7205cbd1b8cb45e0e",
  measurementId: "G-WPPNTT9T94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
