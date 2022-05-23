// React imports
import { React, useContext, useState } from "react";

// MUI imports
import { AppBar, Divider, Grid, Button } from "@mui/material";

// Local imports
import { SearchButton } from "../elements/Buttons";
import MenuElement from "../elements/Menu";
import SeatsMenu from "../elements/SeatsMenu";
import { ClickedContext, FilterContext } from "../App";

const Navbar = () => {
  const { filters } = useContext(FilterContext);
  const { clicked, setClicked } = useContext(ClickedContext);
  const handleChange = (pos) => {
    const updatedClicked = clicked.map((item, index) =>
      pos === index ? !item : item
    );
    setClicked(updatedClicked);
  };
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
            {filters.map((filter, pos) => {
              return (
                <Grid item key={pos}>
                  <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => handleChange(pos)}
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
                  >
                    {filter}
                  </Button>
                </Grid>
              );
            })}
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
