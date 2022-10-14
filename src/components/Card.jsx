import React, { useEffect, useState } from "react";
import Cards from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import AddTags from "./AddTags";
import Modal from "@mui/material/Modal";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import OpenCard from "./OpenCard";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "10px",
  p: 4,
};

function Card({ title, info, tags, update, details }) {
  const [tagList, setTagList] = useState(tags);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(info);
  const [color, setColor] = useState("gray");
  const [name, setName] = useState("TEST");
  const [_title, setTitle] = useState(title);
  const [_info, setInfo] = useState(info);
  const [_details, setDetails] = useState(details);
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const insertTag = ({ color, name }) => {
    setTagList((current) => [...current, { color: color, name: name }]);
  };

  return (
    <CardBlock>
      <InnerCard sx={{ borderRadius: "10px" }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" component="div">
            {_title}
          </Typography>
          <AddTags
            tags={tagList}
            insertTag={insertTag}
            setColor={setColor}
            setName={setName}
          />
          <Typography variant="body1">{_info}</Typography>
        </CardContent>
        <CardActions>
          <OpenCard
            title={_title}
            setTitle={setTitle}
            info={_info}
            setInfo={setInfo}
            details={_details}
            setDetails={setDetails}
            AddTags={
              <AddTags
                tags={tagList}
                insertTag={insertTag}
                setColor={setColor}
                setName={setName}
              />
            }
          />
        </CardActions>
      </InnerCard>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              {_title}
            </Typography>
            <AddTags
              tags={tagList}
              insertTag={insertTag}
              setColor={setColor}
              setName={setName}
            />
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Description
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {_details}
            </Typography>
          </Box>
        </Modal>
      </div>
    </CardBlock>
  );
}

const InnerCard = styled(Cards)`
  margin-top: 1rem;
`;

const CardBlock = styled.div``;

export default Card;
