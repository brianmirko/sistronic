import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "../../../pages/Admin/dashboard/DashboardHome";
import RegisterClient from "../../../pages/Admin/clientes/RegisterClient";
import ListClient from "../../../pages/Admin/clientes/ListClient";
import RegisterProduct from "../../../pages/Admin/productos/RegisterProduct";
import ListProduct from "../../../pages/Admin/productos/ListProduct";
import UploadClient from "../../../pages/Admin/clientes/UpdateClient";

const FeedAdmin = () => {
  return (
    <>
      <Box flex={4} p={2}>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="admin-client-register" element={<RegisterClient />} />
          <Route path="admin-client-list" element={<ListClient />} />
          <Route path="admin-product-register" element={<RegisterProduct />} />
          <Route path="admin-product-list" element={<ListProduct />} />
          <Route path="admin-upload-client" element={<UploadClient />} />
        </Routes>
      </Box>
    </>
  );
};

export default FeedAdmin;
