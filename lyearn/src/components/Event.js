import React from "react";

// MUI imports
import { Grid, Box, Typography, Button } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import WeekendIcon from "@mui/icons-material/Weekend";

// Local imports

const Event = ({ data }) => {
  return (
    <>
      <Grid
        container
        m={1}
        sx={{
          width: {
            sm: "100%",
            xs: "100vw",
          },
        }}
        mb={4}
      >
        <Grid item xs={3}>
          <img className="event-img" src="img.png" />
        </Grid>
        <Grid item xs={9}>
          <Typography
            noWrap
            mb={1}
            mt={1}
            variant="h2"
            sx={{
              fontWeight: {
                md: "500",
                xs: "450",
              },
              fontSize: {
                md: "1.3em",
                xs: "0.8em",
              },
            }}
          >
            {data.event}
          </Typography>
          <Box mb={1} sx={{ display: "flex", gap: "0.5em" }}>
            <Typography
              sx={{
                fontWeight: {
                  md: "500",
                  xs: "450",
                },
                fontSize: {
                  md: "1em",
                  xs: "0.7em",
                },
              }}
              variant="subtitle"
            >{`${Date()}`}</Typography>
            <Box
              sx={{
                backgroundColor: "#111",
                borderRadius: "50%",
                width: {
                  md: "8px",
                  xs: "6px",
                },
                height: {
                  md: "8px",
                  xs: "6px",
                },
                margin: {
                  md: "8px 0",
                  xs: "10px 0",
                },
              }}
            ></Box>
            <Typography
              variant="text"
              sx={{
                fontWeight: {
                  md: "500",
                  xs: "450",
                },
                fontSize: {
                  md: "1em",
                  xs: "0.7em",
                },
              }}
            >
              {`${Math.floor(Math.random() * 60)} mins`}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "1em" }}>
            <Button
              sx={{
                fontSize: {
                  md: "1em",
                  xs: "0.5em",
                },
              }}
              startIcon={<PeopleOutlineIcon />}
              color="info"
            >
              {`${Math.floor(Math.random() * 150)} attending`}
            </Button>
            <Button
              sx={{
                fontSize: {
                  md: "1em",
                  xs: "0.5em",
                },
              }}
              startIcon={<WeekendIcon />}
              color="warning"
            >
              {`${Math.floor(Math.random() * 100)} seats`}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Event;
