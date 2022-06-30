import { Box, Stack } from "@mui/material";
import React from "react";
import FeedAdmin from "../../components/admin/feed/FeedAdmin";
import NavbarAdmin from "../../components/admin/navbar/NavbarAdmin";
import RightbarAdmin from "../../components/admin/rightbar/RightbarAdmin";
import SidebarAdmin from "../../components/admin/sidebar/SidebarAdmin";

const AdminHome = () => {
  return (
    <Box>
      {/* navbar */}
      <NavbarAdmin />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SidebarAdmin />
        <FeedAdmin />
        {/* <RightbarAdmin /> */}
      </Stack>
    </Box>
  );
};

export default AdminHome;
