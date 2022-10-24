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
          <img
            src="https://cdn.discordapp.com/attachments/262818409513877504/1033961346338926702/taskflow-high-resolution-logo-white-on-transparent-background.png"
            width="80px"
            height="50px"
            onClick={routeToHome}
          />

          <Button color="inherit" onClick={routeToLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
