import React from "react";

// MUI imports
import { Button, Menu, MenuItem, Checkbox } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";

const SeatsMenu = () => {
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
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
        sx={{
          borderRadius: 4,
          color: "#000",
          textTransform: "none",
          border: "3px solid black",
          "&:hover": {
            backgroundColor: "transparent",
            border: "3px solid black",
          },
        }}
      >
        Seats
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
          <Button
            size="small"
            sx={{
              textTransform: "none",
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
            startIcon={<SquareIcon htmlColor="#FBBF24" />}
            endIcon={<Checkbox />}
          >
            Filling Fast
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            sx={{
              textTransform: "none",
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
            size="small"
            startIcon={<SquareIcon htmlColor="#4C98FB" />}
            endIcon={<Checkbox />}
          >
            Available
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            size="small"
            sx={{
              textTransform: "none",
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
            startIcon={<SquareIcon htmlColor="#BFBFBF" />}
            endIcon={<Checkbox />}
          >
            Booked
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};

export default SeatsMenu;
