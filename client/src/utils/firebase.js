
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervuary.firebaseapp.com",
  projectId: "intervuary",
  storageBucket: "intervuary.firebasestorage.app",
  messagingSenderId: "173297936711",
  appId: "1:173297936711:web:2ae94d02aca5ead55a8462"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}