import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const LoginPage = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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

  const login = async () => {};

  const logout = async () => {};

  return (
    <LoginPageStyle>
      <h3>register user</h3>
      <textarea
        placeholder="username"
        onChange={(event) => setRegisterEmail(event.target.value)}
      ></textarea>
      <textarea
        placeholder="password"
        onChange={(event) => setRegisterPassword(event.target.value)}
      ></textarea>
      <button onClick={register}>submit</button>
    </LoginPageStyle>
  );
};

const LoginPageStyle = styled.div`
  margin-top: 80px;
`;
