import React from "react";
import BoardCard from "../components/BoardCard";
import data from "../components/BoardLists/data";
import Board from "./Board";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { Auth } from "firebase/auth";
import { auth } from "./firebase-config";

function AllBoards() {
  return (
    <>
      <Typography
        sx={{ fontWeight: "bold", marginLeft: "1rem" }}
        variant="h2"
        component="div"
      >
        Your Boards
      </Typography>
      <BoardGrid>
        <BoardCard
          name={data.title}
          desc={data.BoardDescription}
          img={
            data.BoardImage[Math.floor(Math.random() * data.BoardImage.length)]
          }
        />
        <BoardCard
          name={data.title}
          desc={data.BoardDescription}
          img={
            data.BoardImage[Math.floor(Math.random() * data.BoardImage.length)]
          }
        />
        <BoardCard
          name={data.title}
          desc={data.BoardDescription}
          img={
            data.BoardImage[Math.floor(Math.random() * data.BoardImage.length)]
          }
        />
        <BoardCard
          name={data.title}
          desc={data.BoardDescription}
          img={
            data.BoardImage[Math.floor(Math.random() * data.BoardImage.length)]
          }
        />
        <BoardCard
          name={data.title}
          desc={data.BoardDescription}
          img={
            data.BoardImage[Math.floor(Math.random() * data.BoardImage.length)]
          }
        />
        <BoardCard
          name={data.title}
          desc={data.BoardDescription}
          img={
            data.BoardImage[Math.floor(Math.random() * data.BoardImage.length)]
          }
        />
      </BoardGrid>
    </>
  );
}

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
`;

export default AllBoards;
