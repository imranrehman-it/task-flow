import React from "react";
import Cards from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import styled from "styled-components";

function AddCard() {
  return (
    <CardBlock sx={{ borderRadius: "10px" }}>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </CardBlock>
  );
}

const CardBlock = styled(Cards)`
  margin-top: 1rem;
`;

export default AddCard;
