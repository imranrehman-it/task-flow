import React from "react";
import Cards from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import styled from "styled-components";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

function Card({ title, info }) {
  return (
    <CardBlock sx={{ borderRadius: "10px" }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Undertag
        </Typography>
        <Typography variant="body1">{info}</Typography>
      </CardContent>
    </CardBlock>
  );
}

const CardBlock = styled(Cards)`
  margin-top: 1rem;
`;

export default Card;
