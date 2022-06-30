import { Box } from "@mui/material";
import React from "react";

const RightbarAdmin = () => {
  return (
    <>
      <Box
        bgcolor="lightcoral"
        flex={2}
        p={2}
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        RightbarAdmin
      </Box>
    </>
  );
};

export default RightbarAdmin;
