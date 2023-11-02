import { IconButton, SvgIcon, Box } from "@mui/material";
import ButtonMain from "../Buttons/ButtonMain";
import { AddShoppingCart } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
        <AddShoppingCart sx={{ color: "secondary.light", fontSize: 30 }} />
      </IconButton>
      <ButtonMain text={"Sign in"} />

      <Link to="form">
        <SvgIcon
          sx={{
            alignSelf: "center",
            ml: "auto",
            width: 100,
            height: 50,
            cursor: "pointer",
          }}
        >
          <AccountCircleIcon sx={{ color: "secondary.light" }} />
        </SvgIcon>
      </Link>
      {/* <Avatar
        src="/static/images/user.png"
        sx={{ alignSelf: "center", ml: "auto" }}
      /> */}
    </Box>
  );
}
