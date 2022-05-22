// React imports
import React from "react";

// MUI imports
import { Skeleton, Box } from "@mui/material";

// Local imports
import ArticleSkeleton from "./ArticleSkeleton";

const MainArticleSkeleton = () => {
  return (
    <>
      <Box>
        <Skeleton
          variant="string"
          width={200}
          height={20}
          animation="wave"
          sx={{ borderRadius: 1 }}
        />
        <ArticleSkeleton />
        <ArticleSkeleton />
        <Skeleton variant="string" width={200} height={20} animation="wave" />
        <ArticleSkeleton />
        <ArticleSkeleton />
      </Box>
    </>
  );
};

export default MainArticleSkeleton;
