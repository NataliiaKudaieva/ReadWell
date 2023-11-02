import { Input } from "@mui/material";
import { Search } from "@mui/icons-material";

const inputStyles = {
  display: "flex",
  color: "primary.black",
  width: "350px",
  fontSize: "16px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  backgroundColor: "primary.contrastText",
  padding: "5px 10px",
  border: "none",
  borderRadius: "5px",
  "&.MuiInput-underline:after": { borderBottomColor: "secondary.light" },
  "&.Mui-focused": { transform: "scale(1.05)" },
};

const iconSearchStyles = {
  color: "primary.black",
  position: "absolute",
  display: "inline-block",
  width: "25px",
  height: "25px",
  right: "10px",
  top: "10px",
  cursor: "pointer",
  padding: "0 2px",
};

export default function InputSearch() {
  return (
    <div style={{ position: "relative", marginLeft: "auto" }}>
      <Input
        inputProps={{ type: "text" }}
        sx={inputStyles}
        name="inputSearch"
        placeholder="Search book.."
        value={null}
        autoFocus={true}
      />
      <Search sx={iconSearchStyles} />
    </div>
  );
}
