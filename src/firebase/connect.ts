import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, child, get, onValue, push } from 'firebase/database'

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
const database = getDatabase();

export { auth, database, ref, get, set, child, onValue, push };