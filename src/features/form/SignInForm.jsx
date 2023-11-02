/* eslint-disable no-unused-vars */
import React from "react";
import { SvgIcon, TextField } from "@mui/material";
import { AccountCircleRounded } from "@mui/icons-material";
import ButtonMain from "../../ui/Buttons/ButtonMain";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

export default function SignInForm() {
  const [isShown, setIsShown] = useState(true);
  return (
    <>
      {/* {isShown ? (
        <form className="form" onSubmit={null}>
          <SvgIcon
            sx={{
              position: "absolute",
              right: 20,
              top: 20,
              fontSize: 20,
              cursor: "pointer",
            }}
            onClick={() => setIsShown(false)}
          >
            <CancelIcon color={"secondary"} />
          </SvgIcon>
          <SvgIcon
            sx={{
              width: 180,
              height: 130,
              cursor: "pointer",
            }}
            color="neutral"
          >
            <AccountCircleRounded
              sx={{
                fill: "primary.dark",
                color: "primary.dark",
              }}
            />
          </SvgIcon>

          <TextField
            variant="filled"
            id="login"
            label="Login"
            value={null}
            size="small"
            color="secondary"
          />
          <TextField
            variant="filled"
            id="password"
            value={null}
            label="Password"
            sx={{ mb: 3, textTransform: "lowercase" }}
            size="small"
            color="secondary"
          />
          <ButtonMain text={"Log In"} />
        </form>
      ) : (
        ""
      )} */}
    </>
  );
}
