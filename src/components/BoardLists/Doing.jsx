import React, { useState } from "react";
import styled from "styled-components";
import Card from "../Card";
import { Typography } from "@mui/material";
import data from "./data";

function Doing() {
  const [doingList, setDoingList] = useState(data.doing);

  return (
    <Stack>
      <Typography sx={{ fontWeight: "bold" }} variant="h4" component="div">
        Doing
      </Typography>
      {doingList.map((item) => {
        return <Card title={item.title} info={item.info} />;
      })}
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
