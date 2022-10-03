import React, { useState } from "react";
import Cards from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { AiFillPlusCircle } from "react-icons/ai";
import Popover from "@mui/material/Popover";
import styled from "styled-components";
import AddTags from "./AddTags";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

function Card({ title, info, tags, update }) {
  const [tagList, setTagList] = useState(tags);

  const insertTag = ({ tagList }) => {
    setTagList((current) => [
      ...current,
      { color: "#B266FF", name: "important" },
    ]);
  };

  return (
    <CardBlock sx={{ borderRadius: "10px" }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" component="div">
          {title}
        </Typography>
        <AddTags tags={tagList} insertTag={insertTag} />
        <Typography variant="body1">{info}</Typography>
      </CardContent>
    </CardBlock>
  );
}

const CardBlock = styled(Cards)`
  margin-top: 1rem;
`;

export default Card;
