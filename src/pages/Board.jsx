import React from "react";
import Todo from "../components/BoardLists/Todo";
import Doing from "../components/BoardLists/Doing";
import Done from "../components/BoardLists/Done";

import styled from "styled-components";

function Board() {
  return (
    <>
      <h1>Board</h1>
      <BoardStack>
        <Todo />
        <Doing />
        <Done />
      </BoardStack>
    </>
  );
}

const BoardStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export default Board;
