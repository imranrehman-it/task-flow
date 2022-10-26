import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyD5OH2lmrw-oAAhPFV4l1S2tqbRLwhOuhE",
  authDomain: "task-flow-dd651.firebaseapp.com",
  databaseURL: "https://task-flow-dd651-default-rtdb.firebaseio.com",
  projectId: "task-flow-dd651",
  storageBucket: "task-flow-dd651.appspot.com",
  messagingSenderId: "827187165170",
  appId: "1:827187165170:web:08efc591a8eb0d652cdd6b",
  measurementId: "G-TLT0RT2BQT",
};

const app = initializeApp(firebaseConfig);

export function writeUserData(userid, email) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userid);

  set(reference, {
    email: email,
  });
}

export const auth = getAuth(app);
