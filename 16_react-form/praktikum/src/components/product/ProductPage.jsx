import React, { useEffect, useState } from "react";
import NavbarForm from "../common/NavbarForm";
import Header from "../common/Header";
import FormProduct from "../common/FormProduct";
import ListProduct from "../common/ListProduct";
import ProductDetail from "../ProductDetail";
import { useParams } from "react-router-dom";

function ProductPage({ products, setProducts }) {
  // const [products, setProducts] = useState([]);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const name = "aurel";

  // const getProductDetail = async () => {
  //   if (!productList || productList.length === 0) {
  //     // Handle the case where productList is undefined or empty
  //     setProduct(null);
  //     return;
  //   }

  //   console.log('ini product list', productList)
  
  //   const fetchedProduct = productList.find((p) => p.id === productId);
  //   setProduct(fetchedProduct);
  //   console.log('ini fetched product',fetchedProduct);
  // };

  // useEffect(() => {
  //   getProductDetail();
  // }, [productId])


  // Function to add a product to the list
  const handleAddProduct = (newProduct) => {
    console.log("New Product:", newProduct); // Log the new product to see its contents
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
      <FormProduct onAddProduct={handleAddProduct} />
      <ListProduct products={products} onDeleteProduct={handleDeleteProduct} />
      {/* <ProductDetail productList={products} name={name}/> */}
    </div>
  );
}

export default ProductPage;
