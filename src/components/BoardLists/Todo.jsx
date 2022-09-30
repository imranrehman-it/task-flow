import React, { useState } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import Card from "../Card";
import data from "./data";
import AddCard from "../AddCard";

function Todo() {
  const [todoList, setTodoList] = useState(data.todo); //array type

  return (
    <Stack>
      <Typography sx={{ fontWeight: "bold" }} variant="h4" component="div">
        To-Do
      </Typography>

      {todoList.map((item) => {
        return <Card title={item.title} info={item.info} />;
      })}

      <AddCard />
    </Stack>
  );
}

const Stack = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: rgb(239, 239, 239);
  border-radius: 10px;
  width: 20%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

export default Todo;
