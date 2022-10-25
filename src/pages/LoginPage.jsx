import React, { useState, useRef } from "react";
import styled from "styled-components";
import { auth, signup, useAuth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Form, Card, Button } from "react-bootstrap";

const LoginPage = () => {
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();
  const signupPasswordConfirmationRef = useRef();

  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const currentUser = useAuth();
  const [signIn, setSignIn] = useState(false);

  const signup = async () => {
    await createUserWithEmailAndPassword(
      auth,
      signupEmailRef.current.value,
      signupPasswordRef.current.value
    );
  };

  const signin = async () => {
    await signInWithEmailAndPassword(
      auth,
      loginEmailRef.current.value,
      loginPasswordRef.current.value
    );
  };

  const logOut = async () => {
    signOut(auth);
  };

  return (
    <div>
      {!signIn && (
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={signupEmailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={signupPasswordRef}
                    required
                  />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={signupPasswordConfirmationRef}
                    required
                  />
                </Form.Group>
                <Button className="w-100 mt-2" type="submit" onClick={signup}>
                  Sign Up
                </Button>
                <div>{currentUser?.email}</div>
              </Form>
            </Card.Body>
          </Card>
          <div
            className="w-100 text-center mt-2"
            onClick={() => setSignIn(!signIn)}
          >
            Already have an account? Login
          </div>
        </>
      )}
      {signIn && (
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={loginEmailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={loginPasswordRef}
                    required
                  />
                </Form.Group>
                <Button className="w-100 mt-2" type="submit" onClick={signin}>
                  Login
                </Button>
                <div>{currentUser?.email}</div>
              </Form>
            </Card.Body>
          </Card>
          <div
            className="w-100 text-center mt-2"
            onClick={() => setSignIn(!signIn)}
          >
            New User? Sign up
          </div>
        </>
      )}

      <Button className="w-100 mt-2" type="submit" onClick={logOut}>
        Log Out
      </Button>
    </div>
  );
};

export default LoginPage;
