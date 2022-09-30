import React, { useState } from "react";
import styled from "styled-components";
import Card from "../Card";
import { Typography } from "@mui/material";
import data from "./data";
import AddCard from "../AddCard";

function Done() {
  const [doneList, setDoneList] = useState(data.done);

  const insertDoneList = ({ title, info }) => {
    setDoneList((current) => [...current, { title: title, info: info }]);
  };

  return (
    <Stack>
      <Typography sx={{ fontWeight: "bold" }} variant="h4" component="div">
        Done
      </Typography>
      {doneList.map((item) => {
        return <Card title={item.title} info={item.info} />;
      })}
      <AddCard addList={insertDoneList} />
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

export default Done;
