import React from "react";
import { AppBar, Typography, Box } from "@mui/material";
import { AppbarContainer } from "../../styles/appbar";
import Actions from "./Actions";
import { Colors } from "../../styles/theme";

const AppbarDesktop = ({ matches }) => {
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
        <Box sx={{ flexGrow: 1 }}>
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

export default AppbarDesktop;
