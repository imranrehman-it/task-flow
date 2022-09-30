import React from "react";
import styled from "styled-components";
import Card from "../Card";
import { Typography } from "@mui/material";

function Done() {
  return (
    <Stack>
      <Typography sx={{ fontWeight: "bold" }} variant="h3" component="div">
        Done
      </Typography>
      <Card />
      <Card />
      <Card />
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
