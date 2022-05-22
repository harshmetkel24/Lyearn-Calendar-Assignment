import React from "react";

// MUI imports
import { Grid, Box, Typography, Button } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import WeekendIcon from "@mui/icons-material/Weekend";
import {
  EventResisteredStatusButton,
  EventStatusDetailsButton,
  EventTimeDetails,
  RoundBlackBox,
} from "../StyleObjects";

// Local imports

const Event = ({ data, date }) => {
  return (
    <>
      {!data.event && (
        <Box sx={{ paddingBottom: "4em" }}>
          <Typography
            variant="subtitle"
            sx={{
              display: "inline-block",
              color: "#999999",
              fontWeight: "600",
              fontSize: {
                md: "1.1em",
                xs: "0.9em",
              },
            }}
          >{`No sessions scheduled for ${date}`}</Typography>
        </Box>
      )}
      {data.event && (
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
            <img className="event-img" src={data.src} />
          </Grid>
          <Grid item xs={9}>
            <Typography
              noWrap
              mb={1}
              mt={1}
              variant="h2"
              sx={{
                fontWeight: 600,
                fontSize: {
                  md: 18,
                  xs: 15,
                },
              }}
            >
              {data.event}
            </Typography>
            <Box sx={{ display: "flex", gap: "0.5em" }}>
              <Typography sx={EventTimeDetails} variant="subtitle">
                {data.time}
              </Typography>
              <Box sx={RoundBlackBox}></Box>
              <Typography variant="text" sx={EventTimeDetails}>
                {`${data.duration} mins`}
              </Typography>
            </Box>
            {!data.status.registered && (
              <Box sx={{ display: "flex", gap: "1em" }}>
                <Button
                  disableElevation
                  disableRipple
                  sx={EventStatusDetailsButton}
                  startIcon={<PeopleOutlineIcon sx={{ color: "#999999" }} />}
                >
                  {`${data.status.attending} attending`}
                </Button>
                <Button
                  disableElevation
                  disableRipple
                  sx={EventStatusDetailsButton}
                  startIcon={<WeekendIcon />}
                >
                  {`${data.status.seats} seats left`}
                </Button>
              </Box>
            )}
            {data.status.registered && (
              <Button
                variant="contained"
                disableElevation
                disableRipple
                size="small"
                sx={EventResisteredStatusButton}
              >
                Registered
              </Button>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Event;
