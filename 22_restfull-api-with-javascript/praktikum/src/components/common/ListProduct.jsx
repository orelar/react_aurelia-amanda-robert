import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchGetProducts, selectProducts } from "../../store/postsProduct";
import {
  fetchDeleteProduct,
  selectDeleteProduct,
} from "../../store/deleteProduct";
import {
  fetchUpdateProduct,
  selectUpdateProduct,
} from "../../store/updateProduct";

function ListProduct() {
  const navigate = useNavigate();
  const stateProducts = useSelector(selectProducts);
  const updateProductState = useSelector(selectUpdateProduct);

  const dispatch = useDispatch();

  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [editedProduct, setEditedProduct] = useState({
    id: null,
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
    image: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(fetchGetProducts());
  }, [dispatch]);

  // Use useEffect to update editedProduct when updateProductState.data changes
  useEffect(() => {
    if (editedProduct) {
      setEditedProduct(editedProduct);
    }
  }, [editedProduct]);
  // Debugging
  // console.log("UPDATE PRODUCT USE EFFECT",updateProductState.data);
  // console.log(editedProduct.productName);

  const handleDeleteClick = (productId) => {
    setProductIdToDelete(productId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (productIdToDelete !== null) {
      dispatch(fetchDeleteProduct(productIdToDelete))
        .then(() => {
          // After successful delete, fetch the updated product list
          dispatch(fetchGetProducts());
          setShowDeleteModal(false);
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });

      setProductIdToDelete(null);
    }
  };

  const handleEditClick = (product) => {
    setEditedProduct({ ...product });
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    // Dispatch the update action to update the product
    console.log(editedProduct, 'ini edited product sebelum') //Debugging
    dispatch(fetchUpdateProduct(editedProduct))
      .then(() => {
        // After successful update, fetch the updated product list
        dispatch(fetchGetProducts());
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <>
      <div>
        <h1 className="text-center">List Product</h1>
        {stateProducts.status === "loading" && <p>Loading</p>}
        {(stateProducts.status === "success" ||
          updateProductState.status === "success") && (
          <div className="table-responsive">
            <table
              className="table table-striped"
              style={{ width: "60rem", maxWidth: "100%" }}
              id="listProductTable"
            >
              <thead>
                <tr className="border-top" >
                  <th scope="col" id="list-product-number">
                    No
                  </th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Category</th>
                  <th scope="col">Image of Product</th>
                  <th scope="col">Product Freshness</th>
                  <th scope="col">Additional Description</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {stateProducts.data.map((product, index) => (
                  <tr key={product.id}>
                    <td id="index-number">{index + 1}</td>
                    <td>
                      {isEditing && editedProduct.id === product.id ? (
                        <input
                          type="text"
                          value={editedProduct.productName}
                          onChange={(e) => {
                            setEditedProduct((prevEditedProduct) => ({
                              ...prevEditedProduct,
                              productName: e.target.value,
                            }));
                          }}
                        />
                      ) : (
                        product.productName
                      )}
                    </td>
                    <td>{product.productCategory}</td>
                    <td>
                      <img
                        src={product.image}
                        alt={product.image}
                        style={{ maxWidth: "100px" }}
                      />
                    </td>
                    <td>{product.productFreshness}</td>
                    <td>{product.additionalDescription}</td>
                    <td>
                      {isEditing && editedProduct.id === product.id ? (
                        <input
                          type="number"
                          value={editedProduct.productPrice}
                          onChange={(e) => {
                            setEditedProduct((prevEditedProduct) => ({
                              ...prevEditedProduct,
                              productPrice: e.target.value,
                            }));
                          }}
                        />
                      ) : (
                        `$${product.productPrice}`
                      )}
                    </td>
                    <td>
                      <Link to={`/product/${product.id}`}>
                        <button className="btn btn-primary">Detail</button>
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteClick(product.id)}
                      >
                        Delete
                      </button>
                      {isEditing && editedProduct.id === product.id  ? (
                        <button
                          className="btn btn-success"
                          onClick={handleSaveEdit}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          onClick={() => handleEditClick(product)}
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ListProduct;