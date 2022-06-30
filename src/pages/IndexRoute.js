import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexAdminRoute from "./Admin/IndexAdminRoute";
import Home from "./Home/Home";
import Login from "./Login";
import ContactPage from "./Home/ContactPage";
import ProductsPage from "./Home/ProductsPage";
import RouteController from "./RouteController";

const IndexRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/user/login" element={<Login />} />
        <Route element={<RouteController />}>
          <Route path="admin/*" element={<IndexAdminRoute />} />
        </Route>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<h1>Error 404: Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default IndexRoute;
