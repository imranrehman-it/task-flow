import React from "react";
import Board from "./pages/Board";
import Navbar from "./components/Navbar";
import AllBoards from "./pages/AllBoards";
import { LoginPage } from "./pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
