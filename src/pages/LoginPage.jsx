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
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const currentUser = useAuth();
  const [signIn, setSignIn] = useState(false);

  const signup = async () => {
    await createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    );
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
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmationRef}
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
              <h2 className="text-center mb-4">Login Up</h2>
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button className="w-100 mt-2" type="submit" onClick={signup}>
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
    </div>
  );
};

export default LoginPage;
