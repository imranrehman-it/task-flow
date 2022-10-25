import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth,
} from "firebase/auth";
import { auth } from "./firebase-config";

const LoginPage = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerPage, setReisterPage] = useState(true);

  const [user, setUser] = useState({});

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      const uid = user.uid;
    } else {
      console.log("no user");
    }
  });

  const register = async () => {
    if (user) {
      createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("done");
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
          // ..
        });
    } else {
      console.log("already signed in");
    }
  };

  const login = async () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.code);
      });
  };

  const logout = async () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error.message + ":error");
      });
  };

  return (
    <div className="App">
      {registerPage && (
        <div>
          <h3> Register User </h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />

          <button onClick={register}> Create User</button>
          <button onClick={() => setReisterPage(!registerPage)}>
            {" "}
            already a user
          </button>
        </div>
      )}
      {!registerPage && (
        <div>
          <h3> Login </h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          <button onClick={login}> Login</button>
        </div>
      )}

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
};

export default LoginPage;
