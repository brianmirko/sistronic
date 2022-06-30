import { Box, IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

//container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 50px",
}));

//header
export const AppbarHeader = styled(Typography)(() => ({
  flexGrow: 1,
  fontSize: "2em",
  color: Colors.white,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const ActionContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  height: 70,
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px ${Colors.border}`,
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 10,
  left: "250px",
  zIndex: 1999,
}));
