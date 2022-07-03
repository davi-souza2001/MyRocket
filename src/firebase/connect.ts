import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage"

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APPID
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const storage = getStorage(app)

export { auth, storage }
