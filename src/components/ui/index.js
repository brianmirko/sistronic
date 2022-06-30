import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Colors } from "../../styles/theme";
import { clamp } from "./clamp";
import { Add, Remove } from "@mui/icons-material";

export default function IncDec() {
  const clampV = clamp(1, 10);
  const [value, setValue] = useState(0);

  return (
    <Box display="flex">
      <IconButton
        sx={{
          borderRadius: 0,
          background: `${Colors.primary}`,
        }}
        onClick={() => setValue(clampV(value - 1))}
      >
        <Remove />
      </IconButton>
      <Typography
        variant="h6"
        sx={{
          p: 2,
        }}
      >
        {value}
      </Typography>
      <IconButton
        sx={{
          borderRadius: 0,
          background: `${Colors.primary}`,
        }}
        onClick={() => setValue(clampV(value + 1))}
      >
        <Add />
      </IconButton>
    </Box>
  );
}
