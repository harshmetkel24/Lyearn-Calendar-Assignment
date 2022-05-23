import { React, useState, useEffect, useContext } from "react";
import { InputBase, MenuList, MenuItem } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { FilterContext } from "../App";

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

const SearchButton = () => {
  const { filters } = useContext(FilterContext);
  const [data, setData] = useState(filters);
  useEffect(() => {
    setData(filters);
  }, [filters]);

  const filterData = (query, data) => {
    const ans = data.filter((d) => d.toLowerCase().includes(query));
    return query !== "" ? ans : null;
  };
  const [searchQuery, setSearchQuery] = useState(null);
  const [dataFiltered, setDataFiltered] = useState(null);
  useEffect(() => {
    setDataFiltered(filterData(searchQuery, data));
  }, [searchQuery]);
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </Search>
      {dataFiltered && (
        <MenuList sx={{ position: "absolute" }}>
          {dataFiltered.map((d) => (
            <MenuItem
              sx={{
                fontSize: 12,
                color: "#444",
                padding: "0.5em 4em",
              }}
              key={d.id}
            >
              {d}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </>
  );
};

export { SearchButton };
