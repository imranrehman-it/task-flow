import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { AiFillPlusCircle } from "react-icons/ai";
import data from "./BoardLists/data";

function AddTags({ tags, insertTag }) {
  const clickHandler = () => {
    console.log(tags);
    insertTag(tags);
    console.log(tags);
  };

  return (
    <Stack direction="row" spacing={1}>
      {tags.map((tag) => {
        return (
          <Chip
            sx={{
              background: tag.color,
              fontWeight: "bold",
            }}
            key={tag.name}
            size="small"
            label={tag.name}
          />
        );
      })}
      <Chip
        icon={<AiFillPlusCircle />}
        onClick={clickHandler}
        label="Add Tag"
        size="small"
      />
    </Stack>
  );
}

export default AddTags;
