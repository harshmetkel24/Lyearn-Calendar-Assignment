// React imports
import React, { useEffect, useState } from "react";

// MUI imports
import { Grid, Skeleton, Box } from "@mui/material";
import { Container } from "@mui/system";

// Local imports
import MainArticleSkeleton from "../skeletons/MainArticleSkeleton";
import Event from "./Event";
import CalendarComponent from "./CalendarComponent";

const Calendar = () => {
  const [data, setData] = useState(null);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "events-happened-in-world.p.rapidapi.com",
      "X-RapidAPI-Key": "47ea579b3emsh06e61e48b778ac2p1904b8jsn37e719d989e6",
    },
  };

  // const fetchData = () => {
  //   fetch(
  //     "https://events-happened-in-world.p.rapidapi.com/search?date=5&month=4&limit=5",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setData(response);
  //       console.log(response);
  //     })
  //     .catch((err) => console.error(err));
  // };

  useEffect(() => {
    // fetchData();
    setTimeout(() => {
      const data = {
        data: [
          {
            event: "lorem empsum text 1",
          },
          {
            event: "lorem empsum text 2",
          },
          {
            event: "lorem empsum text 3",
          },
        ],
      };
      setData(data);
    }, 2000);
  }, []);

  return (
    <>
      <Container fluid>
        <Grid pt={4} container spacing={4}>
          <Grid item lg={8} xs={12}>
            {data && (
              <Box>
                {data.data.map((event) => (
                  <Event data={event} key={event._id} />
                ))}
                {/* <Event data={data.data[0]} /> */}
              </Box>
            )}
            {!data && <MainArticleSkeleton />}
          </Grid>
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
