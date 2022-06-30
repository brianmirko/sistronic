import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "5px 0",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px 0",
  overflow: "hidden",
  background: Colors.primary,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  color: Colors.white,
  fontSize: "1.5rem",
  fontWeight: "normal",
}));
