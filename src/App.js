import React from "react";
import Board from "./pages/Board";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Board />
      </div>
    </>
  );
}

export default App;
