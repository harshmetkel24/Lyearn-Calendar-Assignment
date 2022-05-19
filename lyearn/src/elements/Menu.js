import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

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
        startIcon={<MenuIcon sx={{ fontSize: 40 }} />}
      >
        Navigate
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
        <MenuItem
          onClick={handleClose}
          sx={{
            backgroundColor: "#2196f3",
            "&:hover": {
              backgroundColor: "#4dabf5",
            },
          }}
        >
          Seats
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