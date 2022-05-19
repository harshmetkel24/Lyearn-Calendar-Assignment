// React imports
import React, { useEffect, useState } from "react";

// MUI imports
import { Grid, Skeleton, Box } from "@mui/material";
import { Container } from "@mui/system";

// Local imports
import MainArticleSkeleton from "../skeletons/MainArticleSkeleton";
import Event from "./Event";

const Calendar = () => {
  const [data, setData] = useState(null);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "events-happened-in-world.p.rapidapi.com",
      "X-RapidAPI-Key": "47ea579b3emsh06e61e48b778ac2p1904b8jsn37e719d989e6",
    },
  };

  const fetchData = () => {
    fetch(
      "https://events-happened-in-world.p.rapidapi.com/search?date=5&month=4&limit=5",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
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
            {/* {data && <Box>hello</Box>} */}
            {1 && (
              <Skeleton
                variant="rectangular"
                width={300}
                height={300}
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
