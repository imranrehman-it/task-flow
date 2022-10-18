import React from "react";
import BoardCard from "../components/BoardCard";
import data from "../components/BoardLists/data";
import Board from "./Board";
import styled from "styled-components";

function AllBoards() {
  return (
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
  );
}

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
`;

export default AllBoards;
