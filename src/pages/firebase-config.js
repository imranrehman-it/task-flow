import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { getDatabase, ref, set, onValue, push, child } from "firebase/database";
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
const db = getDatabase();

export function newUser(userid, email) {
  const reference = ref(db, "users/" + userid);

  set(reference, {
    email: email,
    Boards: {
      "first board": {
        title: "first-board",
        image:
          "https://static.vecteezy.com/system/resources/previews/005/084/897/original/expert-marketing-broker-stock-trader-present-stock-market-in-year-showing-growth-rates-on-board-isolated-free-vector.jpg",
        description: "This is your first board, start adding tasks",

        todo: {
          title: "First task",
          description: "This is your first to-do task",
          details:
            "all the specific dtails associated with this task, here you will include all the details",
        },

        doing: {
          title: "Open my first task-board",
          description:
            "Open the task-board to start learning about all the new features",
          details: "Learn more and start using the board by adding your tasks",
        },

        done: {
          title: "Create account",
          description: "Created an account and started using the board",
          details: "You've opened your board and created your acccount!",
        },
      },
    },
  });
}

export function addBoardToDB(userid, boardName, boardDescription) {
  const reference = ref(db, "users/" + userid + "/Boards/" + boardName);

  set(reference, {
    title: boardName,
    image:
      "https://static.vecteezy.com/system/resources/previews/005/084/897/original/expert-marketing-broker-stock-trader-present-stock-market-in-year-showing-growth-rates-on-board-isolated-free-vector.jpg",
    description: boardDescription,

    todo: {
      title: "First task",
      description: "This is your first to-do task",
      details:
        "all the specific dtails associated with this task, here you will include all the details",
    },

    doing: {
      title: "Opened my new task-board",
      description: "Opened my newly created" + boardName + " task board",
      details: "Learn more and start using the board by adding your tasks",
    },

    done: {
      title: "Create new board",
      description: "Created a board",
      details: "open a new board to add new task to",
    },
  });
}

export function addTodoToDB(userid, boardName, task, description, details) {
  const reference = ref(
    db,
    "users/" + userid + "/Boards/" + boardName + "/todo/" + task
  );
  set(reference, {
    title: "added task",
    description: "testing adding task",
    details: "specific details associated with this test",
  });
}

export function addDoingToDB(userid, boardName, task, description, details) {
  const reference = ref(
    db,
    "users/" + userid + "/Boards/" + boardName + "/doing/" + task
  );
  set(reference, {
    title: "added task",
    description: "testing adding task",
    details: "specific details associated with this test",
  });
}

export function addDoneToDB(userid, boardName, task, description, details) {
  const reference = ref(
    db,
    "users/" + userid + "/Boards/" + boardName + "/done/" + task
  );
  set(reference, {
    title: "added task",
    description: "testing adding task",
    details: "specific details associated with this test",
  });
}

export function removeDoneToDB(userid, boardName, task, description, details) {
  const reference = ref(
    db,
    "users/" + userid + "/Boards/" + boardName + "/done/" + task
  );

  reference.remove();
}

export function removeDoingToDB(userid, boardName, task, description, details) {
  const reference = ref(
    db,
    "users/" + userid + "/Boards/" + boardName + "/doing/" + task
  );
  reference.remove();
}

export function addTodoToDB(userid, boardName, task, description, details) {
  const reference = ref(
    db,
    "users/" + userid + "/Boards/" + boardName + "/todo/" + task
  );
  reference.remove();
}

const reference = ref(db, "users/");
onValue(reference, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

export const auth = getAuth(app);
