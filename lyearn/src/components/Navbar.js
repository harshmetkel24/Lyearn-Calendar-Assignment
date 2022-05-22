// React imports
import React from "react";

// MUI imports
import { AppBar, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";

// Local imports
import { NavButton, SearchButton } from "../elements/Buttons";
import MenuElement from "../elements/Menu";
import SeatsMenu from "../elements/SeatsMenu";

const Navbar = () => {
  return (
    <AppBar elevation={0} position="static" color="transparent">
      <Grid container p={1} sx={{ justifyContent: "space-between" }}>
        <MenuElement />
        <Grid
          item
          lg={9}
          xs={6}
          sx={{
            display: {
              lg: "inline-flex",
              xs: "none",
            },
          }}
        >
          <Grid container pt={1} spacing={3}>
            <Grid item>
              <SeatsMenu />
            </Grid>
            <Grid item>
              <Divider orientation="vertical" />
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
        <Grid item lg={3} xs={6}>
          <SearchButton />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navbar;
