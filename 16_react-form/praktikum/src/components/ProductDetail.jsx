import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail({ productList }) {
  const {productId}  = useParams();
console.log('Ini product ID', productId);
// console.log('name', name);
  console.log('ini product Listnya', productList)

  useEffect(() => {
    console.log('ini product Listnya', productList);
  }, [productList]);

  // Find the product with the matching productId
  const product = productList.filter((p) => p.id == productId).shift();
  console.log('Ini Product di filter', product);

  // Check if the product with the given productId exists
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h2>Product Detail</h2>
      <div>
        <strong>Product Name:</strong> {product.productName}
      </div>
      <div>
        <strong>Product Category:</strong> {product.productCategory}
      </div>
      <div>
        <strong>Product Freshness:</strong> {product.productFreshness}
      </div>
      <div>
        <strong>Product Price:</strong> ${product.productPrice}
      </div>
      <Link to="/product">Back to Product Page</Link>
    </div>
  );
}

export default ProductDetail;
