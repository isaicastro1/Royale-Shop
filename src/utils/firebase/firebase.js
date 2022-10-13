import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm5mH653M2Qav80nXKQaTQwyDfPhFHp8I",
  authDomain: "crown-clothing-db-c721a.firebaseapp.com",
  projectId: "crown-clothing-db-c721a",
  storageBucket: "crown-clothing-db-c721a.appspot.com",
  messagingSenderId: "817671552551",
  appId: "1:817671552551:web:6bc44fb5295ac3e44dd802",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
