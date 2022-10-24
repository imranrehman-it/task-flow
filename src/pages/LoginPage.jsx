import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const LoginPage = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <LoginPageStyle>
      <h3>register user</h3>
      <input
        placeholder="username"
        onChange={(event) => setRegisterEmail(event.target.value)}
      ></input>
      <input
        placeholder="password"
        onChange={(event) => setRegisterPassword(event.target.value)}
      ></input>
      <button onClick={register}>submit</button>
      <h3>Login user</h3>
      <input
        placeholder="username"
        onChange={(event) => setLoginEmail(event.target.value)}
      ></input>
      <input
        placeholder="password"
        onChange={(event) => setLoginPassword(event.target.value)}
      ></input>
      <button onClick={login}>login</button>
      <button onClick={logout}>signout</button>
    </LoginPageStyle>
  );
};

const LoginPageStyle = styled.div`
  margin-top: 80px;
`;

export default LoginPage;
