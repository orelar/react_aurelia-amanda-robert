import React, { useEffect } from "react";
import NavbarForm from "../common/NavbarForm";
import Header from "../common/Header";
import FormProduct from "../common/FormProduct";
import ListProduct from "../common/ListProduct";

function ProductPage() {
  useEffect(() => {
    alert("Welcome!!!");
  }, []);

  return (
    <div>
      <NavbarForm />
      <Header />
      <FormProduct />
      <ListProduct />
    </div>
  );
}

export default ProductPage;
