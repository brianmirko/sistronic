import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const RouteController = () => {
  const [isAuth, setIsAuth] = useState(true);

  const init = () => {
    if (!localStorage.getItem("auth")) {
      setIsAuth(false);
    } else {
      const auth = JSON.parse(localStorage.getItem("auth"));
      if (auth === "yes") {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    }
  };
  useEffect(() => init, []);

  return isAuth ? <Outlet /> : <Navigate to="/admin" />;
};

export default RouteController;
