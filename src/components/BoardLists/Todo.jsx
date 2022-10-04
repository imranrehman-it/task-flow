import React, { useState } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import Card from "../Card";
import data from "./data";
import AddCard from "../AddCard";
import Button from "@mui/material/Button";
import { AiFillPlusCircle } from "react-icons/ai";
import Search from "../Search";

function Todo() {
  const [todoList, setTodoList] = useState(data.todo); //array type

  const insertTodoList = ({ title, info, tags }) => {
    setTodoList((current) => [
      ...current,
      { title: title, info: info, tags: tags },
    ]);
  };

  return (
    <Stack>
      <Typography sx={{ fontWeight: "bold" }} variant="h4" component="div">
        To-Do
      </Typography>
      {todoList.map((item) => {
        return (
          <Card
            title={item.title}
            info={item.info}
            tags={item.tags}
            details={item.details}
            update={insertTodoList}
          />
        );
      })}
      <AddCard addList={insertTodoList} />
    </Stack>
  );
}

const Stack = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: rgb(239, 239, 239);
  border-radius: 10px;
  width: 25%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

export default Todo;
