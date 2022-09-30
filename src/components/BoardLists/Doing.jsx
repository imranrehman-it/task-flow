import React, { useState } from "react";
import styled from "styled-components";
import Card from "../Card";
import { Typography } from "@mui/material";
import data from "./data";
import AddCard from "../AddCard";

function Doing() {
  const [doingList, setDoingList] = useState(data.doing);

  const insertDoingList = ({ title, info, tags }) => {
    setDoingList((current) => [
      ...current,
      { title: title, info: info, tags: tags },
    ]);
  };

  return (
    <Stack>
      <Typography sx={{ fontWeight: "bold" }} variant="h4" component="div">
        Doing
      </Typography>
      {doingList.map((item) => {
        return <Card title={item.title} info={item.info} tags={item.tags} />;
      })}

      <AddCard addList={insertDoingList} />
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

export default Doing;
