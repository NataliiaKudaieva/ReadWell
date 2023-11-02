import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

import Username from "../../features/user/UserName";
import MenuUser from "./MenuUser";
import InputSearch from "../../features/searchBooks/InputSearch";

function NavBar() {
  return (
    <AppBar
      sx={{
        height: 80,
        display: "flex",
        justifyContent: "center",
        bgcolor: "primary.contrastText",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Username />
        <InputSearch sx={{ flexGrow: 2 }} />
        <MenuUser />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
