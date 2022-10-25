import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

const app = initializeApp({
  apiKey: "AIzaSyD5OH2lmrw-oAAhPFV4l1S2tqbRLwhOuhE",
  authDomain: "task-flow-dd651.firebaseapp.com",
  projectId: "task-flow-dd651",
  storageBucket: "task-flow-dd651.appspot.com",
  messagingSenderId: "827187165170",
  appId: "1:827187165170:web:08efc591a8eb0d652cdd6b",
  measurementId: "G-TLT0RT2BQT",
});

export const auth = getAuth(app);
export default app;

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
