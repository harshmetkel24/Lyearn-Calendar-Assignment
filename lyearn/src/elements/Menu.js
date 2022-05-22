import * as React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

// Local imports
import SeatsMenu from "./SeatsMenu";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        sx={{
          display: {
            lg: "none",
            xs: "inline-flex",
          },
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<FilterListIcon sx={{ fontSize: 40 }} />}
      >
        Filters
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <SeatsMenu />
        </MenuItem>
        <MenuItem onClick={handleClose}>Design</MenuItem>
        <MenuItem onClick={handleClose}>Product Management</MenuItem>
        <MenuItem onClick={handleClose}>Mindfullness</MenuItem>
        <MenuItem onClick={handleClose}>Productivity</MenuItem>
        <MenuItem onClick={handleClose}>Mental Health</MenuItem>
      </Menu>
    </>
  );
}
