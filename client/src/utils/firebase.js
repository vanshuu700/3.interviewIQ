
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-50d1b.firebaseapp.com",
  projectId: "ai-interview-50d1b",
  storageBucket: "ai-interview-50d1b.firebasestorage.app",
  messagingSenderId: "640693032102",
  appId: "1:640693032102:web:55fac3901dfd8ead971067"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}