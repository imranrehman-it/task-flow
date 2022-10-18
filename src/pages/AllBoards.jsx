import React from "react";
import BoardCard from "../components/BoardCard";
import data from "../components/BoardLists/data";
import Board from "./Board";

function AllBoards() {
  return (
    <div>
      <BoardCard
        name={data.title}
        desc={data.BoardDescription}
        img={data.BoardImage}
      />
    </div>
  );
}

export default AllBoards;
