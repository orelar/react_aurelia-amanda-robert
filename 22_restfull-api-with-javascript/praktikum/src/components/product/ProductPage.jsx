import React, { useEffect, useState } from "react";
import NavbarForm from "../common/NavbarForm";
import Header from "../common/Header";
import FormProduct from "../common/FormProduct";
import ListProduct from "../common/ListProduct";

function ProductPage({ products, setProducts }) {
  

  // Function to add a product to the list
  const handleAddProduct = (newProduct) => {
    console.log("New Product:", newProduct); // Log the new product to see its contents for debugging
    setProducts([...products, newProduct]);
  };

  // Function to delete a product by ID
  function handleDeleteProduct(productId) {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  }

  useEffect(() => {
    alert("Welcome!!!");
  }, []);

  console.log('PRODUCTS',products);


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
