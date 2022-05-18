// React imports
import React from "react";

// MUI imports
import { Button, AppBar, Grid } from "@mui/material";
import { Box } from "@mui/system";

// Local imports
import { NavButton, SearchButton } from "../elements/Buttons";

const Navbar = () => {
  return (
    <AppBar position="static" mb={2} color="transparent">
      <Grid container p={1}>
        <Grid item xs={9}>
          <Grid container spacing={3}>
            <Grid item>
              <Button
                sx={{
                  borderRadius: "2em",
                  textTransform: "none",
                  fontWeight: "500",
                }}
                variant="outlined"
              >
                Seats
              </Button>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  marginLeft: "0",
                  height: "2.2em",
                  width: "2px",
                  backgroundColor: "#EAEAEA",
                  borderRadius: "40%",
                }}
              ></Box>
            </Grid>
            <Grid item>
              <NavButton name={"Design"} />
            </Grid>
            <Grid item>
              <NavButton name={"Pruduct Management"} />
            </Grid>
            <Grid item>
              <NavButton name={"Mindfullness"} />
            </Grid>
            <Grid item>
              <NavButton name={"Productivity"} />
            </Grid>
            <Grid item>
              <NavButton name={"Mental Health"} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <SearchButton />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navbar;
