/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
export default function TextButton({ text, marginRight }) {
  return (
    <Button
      variant="text"
      sx={{
        display: "inline-block",
        fontSize: 15,
        fontWeight: 500,
        mr: `${marginRight}`,
        color: "primary.dark",
      }}
    >
      {text}
    </Button>
  );
}
