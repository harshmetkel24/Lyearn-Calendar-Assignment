import React from "react";

// MUI imports
import { Grid, Box, Typography, Button } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import WeekendIcon from "@mui/icons-material/Weekend";

// Local imports
import Img1 from "../img3.svg";

const Event = ({ data }) => {
  return (
    <>
      <Grid container m={1}>
        <Grid item lg={3}>
          <img src={Img1} />
        </Grid>
        <Grid item lg={9}>
          <Typography noWrap mb={1} mt={1} variant="h6">
            {data.event}
          </Typography>
          <Box mb={1} sx={{ display: "flex", gap: "0.5em" }}>
            <Typography variant="subtitle">{`${Date()}`}</Typography>
            <Box
              sx={{
                backgroundColor: "#111",
                borderRadius: "50%",
                width: "8px",
                height: "8px",
                margin: "8px 0",
              }}
            ></Box>
            <Typography variant="text" sx={{ fontWeight: "600" }}>
              {`${Math.floor(Math.random() * 60)} mins`}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "1em" }}>
            <Button startIcon={<PeopleOutlineIcon />} color="info">
              {`${Math.floor(Math.random() * 150)} attending`}
            </Button>
            <Button startIcon={<WeekendIcon />} color="warning">
              {`${Math.floor(Math.random() * 100)} seats`}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Event;
