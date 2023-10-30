import React from "react";
import { Outlet } from "react-router-dom";
import RestrictedPage from "../components/auth/401";
function PrivateRoute() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated === "true") {
    return <Outlet />;
  }

  return <RestrictedPage />;
}

export default PrivateRoute;
