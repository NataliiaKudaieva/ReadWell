import { IconButton, Box, Avatar } from "@mui/material";
import ButtonMain from "../Buttons/ButtonMain";
import { AddShoppingCart } from "@mui/icons-material";

import { Link } from "react-router-dom";

export default function MenuUser() {
  return (
    <Box
      sx={{
        display: "flex",
        width: 300,
        alignItems: "stretch",
        marginLeft: "auto",
      }}
    >
      <IconButton
        color="secondary"
        aria-label="add to shopping cart"
        edge="start"
        sx={{ mx: 2 }}
      >
        <Link to="cart">
          <AddShoppingCart sx={{ color: "secondary.light", fontSize: 30 }} />
        </Link>
      </IconButton>
      <ButtonMain text="Sign in" />

      <Link to="form">
        <Avatar
          src="/static/images/user.png"
          sx={{
            alignSelf: "center",
            ml: "40px",
            cursor: "pointer",
          }}
        />
      </Link>
    </Box>
  );
}
