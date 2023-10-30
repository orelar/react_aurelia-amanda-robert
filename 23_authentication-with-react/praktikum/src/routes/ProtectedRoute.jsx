import React from "react";
import { Navigate, Outlet } from "react-router-dom";
function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log(isAuthenticated, "is authenticated dari protected");
  if (isAuthenticated === "true") {
    alert("Already Logged In");
    return <Navigate to="/" />;
  }
  if (isAuthenticated === "false") {
    return <Outlet />;
  }
}

export default ProtectedRoute;
