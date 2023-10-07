import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductPage from "../components/product/ProductPage";
import LandingPage from "../components/LandingPage";
import ProductDetail from "../components/ProductDetail";
import Login from "../components/auth/Login";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
