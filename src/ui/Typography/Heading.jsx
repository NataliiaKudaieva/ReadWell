import { Typography } from "@mui/material";

export default function Heading() {
  return (
    <Typography
      sx={{
        fontSize: "56px",
        lineHeight: 1.8,
        padding: "8px 10px",
        color: "primary.black",
        maxWidth: "400px",
      }}
    >
      New & Trending books about programming
    </Typography>
  );
}
