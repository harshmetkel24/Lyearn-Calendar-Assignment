import { React, useEffect, useState, useContext } from "react";

// MUI imports
import { Box, Typography } from "@mui/material";

// Local imports

import { ClickedContext, FilterContext } from "../App";
import EventsUtil from "../elements/EventsUtil";

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
              paddingLeft: "0.5em",
              fontSize: {
                md: "1.1em",
                xs: "0.9em",
              },
            }}
          >{`No sessions scheduled for ${date}`}</Typography>
        </Box>
      )}
      {data.event && <EventsUtil data={data} />}
    </>
  );
};

export default Event;
