import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/product/ProductPage";
import LandingPage from "./components/LandingPage";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/login/Login";
import PrivateRoute from "./routes/PrivateRoute";


function App() {
  const [products, setProducts] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="/product" element={<PrivateRoute><ProductPage products={products} setProducts={setProducts}/></PrivateRoute>} />
          <Route path="/product/:productId" element={<ProductDetail productList={products}/>} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
