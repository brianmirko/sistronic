import { AppBar, Box, Typography } from "@mui/material";
import React from "react";
import { AppbarContainer } from "../../styles/appbar";
import Actions from "./Actions";
import { Colors } from "../../styles/theme";

import "../../styles/auxs.css";

const AppbarMobile = ({ matches }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        height: "60px",
        justifyContent: "center",
        background: Colors.primary,
      }}
      elevation={10}
    >
      <AppbarContainer>
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize: "2em",
              color: Colors.white,
              textDecoration: "none",
              letterSpacing: ".3rem",
              mr: 2,
              "&:hover": {
                color: Colors.white,
              },
            }}
          >
            SISTRONIC
          </Typography>
        </Box>
        <Actions matches={matches} />
      </AppbarContainer>
    </AppBar>
  );
};

export default AppbarMobile;
