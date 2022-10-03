import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { AiFillPlusCircle } from "react-icons/ai";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { BlockPicker } from "react-color";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const AddTags = ({ tags, insertTag, setName, setColor }) => {
  const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");
  const [open, setOpen] = React.useState(false);
  const [tagname, setTagName] = useState("");
  const [tagcolor, setTagColor] = useState("");

  const handleClose = () => {
    setOpen(false);
    if (tagname.length > 0) {
      insertTag({ color: blockPickerColor, name: tagname });
    }
    setTagName("");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const changeHandler = (e) => {
    setTagName(e.target.value);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Edit Tag</h3>
          <TextField
            multiline
            id="outlined-basic"
            label="Title"
            fullWidth
            variant="outlined"
            InputProps={{
              style: {
                fontSize: "1.5rem",
                fontWeight: "700",
                lineHeight: "1.334",
              },
            }}
            onChange={changeHandler}
          />

          <ColorSelector>
            <h3>Color Picker</h3>
            <BlockPicker
              color={blockPickerColor}
              onChange={(color) => {
                setBlockPickerColor(color.hex);
              }}
            />
          </ColorSelector>
        </Box>
      </Modal>
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
          onClick={handleOpen}
          label="Add Tag"
          size="small"
        />
      </Stack>
    </>
  );
};

const ColorSelector = styled.div`
  width: fill;
`;
export default AddTags;
