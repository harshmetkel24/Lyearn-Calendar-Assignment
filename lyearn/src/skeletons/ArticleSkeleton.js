// React imports
import React from "react";

// MUI imports
import { Grid, Skeleton, Box } from "@mui/material";

const ArticleSkeleton = () => {
  return (
    <>
      <Box>
        <Grid container p={4}>
          <Grid item xs={2}>
            <Skeleton
              variant="rectangular"
              width={100}
              height={100}
              animation="wave"
              sx={{ borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={10}>
            <Box mt={1} mb={1}>
              <Skeleton
                sx={{ borderRadius: 1 }}
                variant="text"
                width={400}
                height={30}
                animation="wave"
              />
            </Box>
            <Box mb={1} style={{ display: "flex", gap: "0.5em" }}>
              <Skeleton
                sx={{ borderRadius: 1 }}
                variant="text"
                width={120}
                animation="wave"
              />
              <Skeleton
                sx={{ borderRadius: 1 }}
                variant="text"
                width={120}
                animation="wave"
              />
            </Box>
            <Box mb={1} style={{ display: "flex", gap: "0.5em" }}>
              <Skeleton
                variant="circular"
                width={20}
                height={20}
                animation="wave"
              />
              <Skeleton
                sx={{ borderRadius: 1 }}
                variant="text"
                width={80}
                height={20}
                animation="wave"
              />
              <Skeleton
                variant="circular"
                width={20}
                height={20}
                animation="wave"
              />
              <Skeleton
                sx={{ borderRadius: 1 }}
                variant="text"
                width={80}
                height={20}
                animation="wave"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ArticleSkeleton;
