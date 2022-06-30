import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

export const SubscribeTf = styled(TextField)(() => ({
  ".MuiInputLabel-root": {
    color: Colors.dim_grey,
  },
  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.dim_grey}`,
  },
}));
