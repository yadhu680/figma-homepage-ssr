"use client";
import { Skeleton, Box } from "@mui/material";

export default function Shimmer({ height = 240 }: { height?: number }) {
  return (
    <Box sx={{ width: "100%", px: 2, py: 3 }}>
      <Skeleton
        variant="rectangular"
        height={height}
        animation="wave"
        sx={{ borderRadius: 2 }}
      />
      <Skeleton variant="text" width="40%" animation="wave" />
    </Box>
  );
}
