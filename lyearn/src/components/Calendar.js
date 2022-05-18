// React imports
import React, { useState } from "react";

// MUI imports
import { Grid, Skeleton, Box } from "@mui/material";
import { Container } from "@mui/system";
import MainArticleSkeleton from "../skeletons/MainArticleSkeleton";

// Local imports

const Calendar = () => {
  const [data, setData] = useState(null);
  return (
    <>
      <Container fluid fullWidth>
        <Grid container p={4}>
          <Grid item xs={8}>
            {!data && <MainArticleSkeleton />}
          </Grid>
          <Grid item xs={4}>
            {!data && (
              <Skeleton
                variant="rectangular"
                width={400}
                height={400}
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
