import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchGetProductById, selectProduct } from "../store/postProduct";
import { useDispatch, useSelector } from "react-redux";

function ProductDetail() {
  const { productId } = useParams();
  const stateProduct = useSelector(selectProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetProductById(productId));
  }, [dispatch, productId]);
  console.log(stateProduct, "ini state product detail");

  // // Debugging
  // useEffect(() => {
  //   console.log("ProductDetail products:", productList);
  //   console.log("ProductDetail productId:", productId); // Log the productId from useParams

  //   productList.forEach((product) => {
  //     console.log("Product ID:", product.id);
  //   });
  // }, [productList, productId]);

  // Find the product with the matching productId
  // const product = productList.filter((p) => p.id === productId).shift();

  // Check if the product with the given productId exists
  // if (!product) {
  //   return <p>Product not found.</p>;
  // }

  return (
    <>
      {stateProduct.status === "loading" && <p>Loading</p>}
      {stateProduct.status === "success" && (
        <div>
          <h2>Product Detail</h2>
          <div>
            <strong>Product Name:</strong> {stateProduct.data.productName}
          </div>
          <div>
            <strong>Product Category:</strong>
            {stateProduct.data.productCategory}
          </div>
          <div>
            <strong>Product Freshness:</strong>
            {stateProduct.data.productFreshness}
          </div>
          <div>
            <strong>Product Price:</strong> ${stateProduct.data.productPrice}
          </div>
          <Link to="/product">Back to Product Page</Link>
        </div>
      )}
    </>
  );
}

// const mapStateToProps = (state) => ({
//   productList: state.products.products,
// });

// export default connect(mapStateToProps)(ProductDetail);
export default ProductDetail;
