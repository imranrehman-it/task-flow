import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Router, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  const routeToLogin = () => {
    let path = `login`;
    navigate(path);
  };

  const routeToHome = () => {
    let path = ``;
    navigate(path);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" z-index="999">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button color="inherit" onClick={routeToHome}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Trello
            </Typography>
          </Button>

          <Button color="inherit" onClick={routeToLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
