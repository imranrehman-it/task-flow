import React, { useState } from "react";
import styled from "styled-components";

export const LoginPage = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async () => {};

  const login = async () => {};

  const logout = async () => {};

  return <LoginPageStyle>LoginPage</LoginPageStyle>;
};

const LoginPageStyle = styled.div`
  margin-top: 80px;
`;
