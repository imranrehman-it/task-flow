import React, { useState } from "react";
import Cards from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { AiFillPlusCircle } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

function AddCard({ addList }) {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [renderTitle, setRenderTitle] = useState(false);

  const addHandler = () => {
    setRenderTitle(true);
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const infoChangeHandler = (e) => {
    setInfo(e.target.value);
  };

  const saveHandler = () => {
    console.log(title);
    console.log(info);
    addList({ title: title, info: info, tags: [] });
    setRenderTitle(false);
  };

  return (
    <>
      {!renderTitle && (
        <CardBlock sx={{ borderRadius: "10px" }}>
          <CardActions>
            <Button size="medium" onClick={addHandler}>
              <AiFillPlusCircle size="2rem" style={{ marginRight: ".5rem" }} />
              Add a card
            </Button>
          </CardActions>
        </CardBlock> 
      )}

      {renderTitle && (
        <CardBlock sx={{ borderRadius: "10px" }}>
          <CardContent>
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
              onChange={titleChangeHandler}
            />
            <TextField
              sx={{ marginTop: "1rem" }}
              multiline
              id="outlined-basic"
              label="Enter a description of the task"
              fullWidth
              variant="outlined"
              InputProps={{
                style: {
                  fontSize: "1rem",
                  fontWeight: "700",
                  lineHeight: "1.334",
                },
              }}
              onChange={infoChangeHandler}
            />
          </CardContent>
          <CardActions>
            <Button onClick={saveHandler}>Add</Button>
          </CardActions>
        </CardBlock>
      )}
    </>
  );
}

const CardBlock = styled(Cards)`
  margin-top: 1rem;
`;

export default AddCard;
