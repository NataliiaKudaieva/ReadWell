/* eslint-disable react/prop-types */

import { Button } from "@mui/material";

export default function ButtonMain({ text }) {
  return (
    <Button
      variant="contained"
      sx={{
        mr: "2",
        width: "200px",
        bgcolor: "primary.main",
        display: "block",
        padding: "12px 17px",
        fontWeight: 400,
        textTransform: "uppercase",
        fontSize: 13,
        letterSpacing: 2,
        lineHeight: 1,
        transition: "all ease 0.5s",
        ":hover": {
          bgcolor: "white",
          color: "primary.main",

          border: "1px solid ",
        },
      }}
    >
      {text}
    </Button>
  );
}
