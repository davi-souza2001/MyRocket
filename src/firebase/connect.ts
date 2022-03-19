import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA8sMJQZDlyHd6b0WtlZ00BMSv6ShtFJeU",
  authDomain: "myrocketoficial.firebaseapp.com",
  projectId: "myrocketoficial",
  storageBucket: "myrocketoficial.appspot.com",
  messagingSenderId: "857729673139",
  appId: "1:857729673139:web:22ab8869471c49f2854dc6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };