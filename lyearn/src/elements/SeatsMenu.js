import React from "react";

// MUI imports
import { Button, Menu, MenuItem, Checkbox, Divider } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";

// Local imports
import {
  SeatsMenuBottomButtons,
  SeatsMenuCheckBoxButtons,
  SeatsMenuSeatButton,
} from "../StyleObjects";

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
        size="small"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
        sx={SeatsMenuSeatButton}
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
            disableElevation
            disableRipple
            sx={SeatsMenuCheckBoxButtons}
            startIcon={<SquareIcon htmlColor="#FBBF24" />}
            endIcon={
              <Checkbox
                size="small"
                sx={{
                  color: "#D1D1D1",
                }}
              />
            }
          >
            Filling Fast
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            sx={SeatsMenuCheckBoxButtons}
            size="small"
            disableElevation
            disableRipple
            startIcon={<SquareIcon htmlColor="#4C98FB" />}
            endIcon={<Checkbox size="small" sx={{ color: "#D1D1D1" }} />}
          >
            Available
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            size="small"
            disableElevation
            disableRipple
            sx={SeatsMenuCheckBoxButtons}
            startIcon={<SquareIcon htmlColor="#BFBFBF" />}
            endIcon={<Checkbox size="small" sx={{ color: "#D1D1D1" }} />}
          >
            Booked
          </Button>
        </MenuItem>
        <Divider variant="middle" />
        <MenuItem>
          <Button
            size="small"
            variant="text"
            style={{
              color: "#999999",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            sx={SeatsMenuBottomButtons}
          >
            Clear
          </Button>
          <Button
            size="small"
            variant="contained"
            style={{
              backgroundColor: "#000",
              "&:hover": {
                backgroundColor: "#222",
              },
            }}
            sx={SeatsMenuBottomButtons}
          >
            Save
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};

export default SeatsMenu;
