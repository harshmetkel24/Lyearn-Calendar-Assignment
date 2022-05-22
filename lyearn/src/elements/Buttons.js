import React from "react";
import { Button, InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const NavButton = ({ name }) => {
  return (
    <Button
      size="small"
      disableElevation
      sx={{
        backgroundColor: "#F2F2F2",
        color: "#222222",
        borderRadius: 4,
        textTransform: "none",
        fontWeight: "500",
        "&:hover": {
          backgroundColor: "#D0D0D0",
        },
      }}
      variant="contained"
    >
      {name}
    </Button>
  );
};

// Search button code

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "2em",
  backgroundColor: "#FFFFFF",
  border: "1.5px solid #EAEAEA",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    color: "#999999",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchButton = ({}) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export { NavButton, SearchButton };
