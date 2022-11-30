import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA0PGnL9J3ybIHOgWr8vQUEPXEk7TjoY0A",
  authDomain: "agrohouse-2bc5a.firebaseapp.com",
  projectId: "agrohouse-2bc5a",
  storageBucket: "agrohouse-2bc5a.appspot.com",
  messagingSenderId: "8162396209",
  appId: "1:8162396209:web:125f3e732c995a0acaed10"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app)
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider()
