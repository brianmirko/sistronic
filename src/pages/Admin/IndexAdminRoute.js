import React from "react";
import AdminHome from "./AdminHome";
import AdminProducts from "./AdminProducts";
import { Outlet, Route, Routes } from "react-router-dom";

const IndexAdminRoute = () => {
  return (
    <>
      <AdminHome />
      {/* <Routes>
        <Route path="/products" element={<AdminProducts />} />
      </Routes> */}
    </>
  );
};

export default IndexAdminRoute;
