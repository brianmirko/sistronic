import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import AppbarDesktop from "./AppbarDesktop";

const Appbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppbarDesktop matches={matches} />
    </>
  );
};

export default Appbar;
