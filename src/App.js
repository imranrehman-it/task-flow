import React from "react";
import Board from "./pages/Board";
import Navbar from "./components/Navbar";
import AllBoards from "./pages/AllBoards";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Board />
        <AllBoards />
      </div>
    </>
  );
}

export default App;
