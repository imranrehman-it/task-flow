import React from "react";
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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

function Card({ title, info, tags }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <CardBlock sx={{ borderRadius: "10px" }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" component="div">
          {title}
        </Typography>
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
            label="Add Tag"
            size="small"
            onClick={handleClick}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          ></Popover>
        </Stack>
        <Typography variant="body1">{info}</Typography>
      </CardContent>
    </CardBlock>
  );
}

const CardBlock = styled(Cards)`
  margin-top: 1rem;
`;

export default Card;
