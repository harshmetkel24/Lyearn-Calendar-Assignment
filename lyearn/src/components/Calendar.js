// React imports
import React, { useEffect, useState, useContext } from "react";

// MUI imports
import { Grid, Skeleton, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

// Local imports
import MainArticleSkeleton from "../skeletons/MainArticleSkeleton";
import Event from "./Event";
import CalendarComponent from "./CalendarComponent";
import { ClickedContext, FilterContext } from "../App";

const Calendar = () => {
  const [data, setData] = useState(null);
  const options = {
    method: "GET",
    Accept: "application/json",
  };

  const fetchData = () => {
    const url =
      process.env.NODE_ENV == "production"
        ? "/events/"
        : "http://localhost:4000/events";
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log(response[0].event);
      })
      .catch((err) => console.error(err));
  };
  const { filters } = useContext(FilterContext);
  const { clicked } = useContext(ClickedContext);
  const [newData, setNewData] = useState(null);
  useEffect(() => {
    let temp = [];
    clicked.map((item, index) => {
      if (item) {
        temp.push(filters[index]);
      }
    });
    let update = [];
    if (data && temp.length) {
      data.map((day) => {
        let row = [];
        if (day) {
          day.events.map((event) => {
            if (event) {
              console.log(event);
              for (let i = 0; i < temp.length; ++i)
                if (temp[i] === event.genre) {
                  row.push(event);
                  break;
                } else setNewData(null);
            }
          });
        }
        if (row.length) update.push(row);
      });
    }
    setNewData(update);
    console.log(newData);
  }, [clicked]);

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
            {data && !newData.length && (
              <Grid container>
                {data.map((day) => (
                  <Grid item xs={12}>
                    <Typography
                      pl={1}
                      component="h2"
                      sx={{
                        fontWeight: "600",
                        fontSize: {
                          md: "1em",
                          xs: "0.9em",
                        },
                      }}
                      key={day._id}
                    >
                      {day.date}
                    </Typography>
                    <Box>
                      {day.events.map((event) => (
                        <Event data={event} date={day.date} key={event.id} />
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
            {data && newData && (
              <Grid container>
                {newData.map((day) => (
                  <Grid item xs={12}>
                    <Typography
                      pl={1}
                      component="h2"
                      sx={{
                        fontWeight: "600",
                        fontSize: {
                          md: "1em",
                          xs: "0.9em",
                        },
                      }}
                      key={day._id}
                    >
                      {day.date}
                    </Typography>
                    <Box>
                      {day.map((event) => (
                        <Event data={event} date={day.date} key={event.id} />
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
                sx={{ borderRadius: 1 }}
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
