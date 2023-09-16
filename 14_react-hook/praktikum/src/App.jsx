import React, { useEffect } from "react";
import AccountPage from "./components/account/AccountPage";
import ProductPage from "./components/product/ProductPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductPage />,
    },
    {
      path: "/account",
      element: <AccountPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
