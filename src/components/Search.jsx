import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "./Card";

function Search({ todoList }) {
  const [search, setSearch] = React.useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        label="Search.."
        id="fullWidth"
        onChange={changeHandler}
      />
    </Box>
  );
}

export default Search;
