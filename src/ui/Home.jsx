import { Container } from "@mui/material";
import Heading from "./Typography/Heading";
import bookImage from "../assets/images/booksPreview.jpg";

import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container
      sx={{
        maxWidth: "1500px",
        backgroundColor: "secondary.contrastText",
        color: "contrastText",
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        borderRadius: 5,
        padding: "15px 20px",
        ContainerSizing: "border-box",
      }}
    >
      <Heading />
      <img
        alt="books"
        src={bookImage}
        style={{
          maxWidth: "500px",
          minHeight: "250px",
          display: "block",
        }}
      />
      <Link to="/catalog">
        <Button
          variant="contained"
          endIcon={<ArrowRightAltIcon />}
          size="medium"
          sx={{ alignSelf: "start" }}
        >
          Explore now
        </Button>
      </Link>
    </Container>
  );
}
