import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

function OpenCard({
  title,
  info,
  AddTags,
  setInfo,
  setTitle,
  details,
  setDetails,
}) {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEdit = () => {
    setEdit(!edit);
  };

  const editDescription = (e) => {
    setDetails(e.target.value);
  };

  const editTitle = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {title}
          </Typography>
          {AddTags}
          <Typography
            contentEditable="true"
            onChange={editTitle}
            id="modal-modal-title"
            variant="h5"
            component="h2"
          >
            Description
          </Typography>
          {!edit && (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {details}
            </Typography>
          )}
          {edit && (
            <div>
              <textarea value={details} onChange={editDescription}></textarea>
            </div>
          )}
          <Button onClick={handleEdit}>Edit</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default OpenCard;
