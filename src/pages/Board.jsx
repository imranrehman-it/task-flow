import React from "react";
import Todo from "../components/BoardLists/Todo";
import Doing from "../components/BoardLists/Doing";
import Done from "../components/BoardLists/Done";
import Search from "../components/Search";
import styled from "styled-components";
import { Typography } from "@mui/material";

function Board() {
  return (
    <>
      <Typography
        sx={{ fontWeight: "bold", marginLeft: "1rem" }}
        variant="h2"
        component="div"
      >
        Board
      </Typography>
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
  position: absolute;
`;

export default Board;
