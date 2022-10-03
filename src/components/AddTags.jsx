import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { AiFillPlusCircle } from "react-icons/ai";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const AddTags = ({ tags, insertTag, setName, setColor }) => {
  const clickHandler = () => {
    insertTag({ color: "yellow", name: "hello" });
  };

  return (
    <>
      <Stack sx={{ flexWrap: "wrap", gap: 1 }} direction="row" spacing={1}>
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
    </>
  );
};

export default AddTags;
