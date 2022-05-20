// React imports
import React, { useEffect, useState } from "react";

// MUI imports
import { Grid, Skeleton, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

// Local imports
import MainArticleSkeleton from "../skeletons/MainArticleSkeleton";
import Event from "./Event";
import CalendarComponent from "./CalendarComponent";

const Calendar = () => {
  const [data, setData] = useState(null);
  const options = {
    method: "GET",
    Accept: "application/json",
  };

  const fetchData = () => {
    fetch("http://localhost:4000/events", options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log(response[0].event);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return (
    <>
      <Container fluid>
        <Grid pt={4} container spacing={4}>
          <Grid item lg={8} xs={12}>
            {data && (
              <Grid container>
                {data.map((day) => (
                  <Grid item xs={12}>
                    <Typography variant="h5" component="h2" key={day._id}>
                      {day.date}
                    </Typography>
                    <Box>
                      {day.events.map((event) => (
                        <Event data={event} key={event.id} />
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>

          {!data && (
            <Grid item lg={8} xs={12}>
              {!data && <MainArticleSkeleton />}
            </Grid>
          )}
          <Grid item xs={12} lg={4}>
            {data && (
              <Box>
                <CalendarComponent />
              </Box>
            )}
            {!data && (
              <Skeleton
                variant="rectangular"
                width={350}
                height={350}
                animation="wave"
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Calendar;
