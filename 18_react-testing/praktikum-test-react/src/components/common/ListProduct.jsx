import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProduct, editProduct } from "../../store/products/productSlices";


function ListProduct({ products, onDeleteProduct, onEditProduct }) {
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [editedProduct, setEditedProduct] = useState({
    id: null,
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
    image: "",
  }); // State for edited product
  const [isEditing, setIsEditing] = useState(false); // Edit mode flag

  const handleDeleteClick = (productId) => {
    setProductIdToDelete(productId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (productIdToDelete !== null) {
      onDeleteProduct(productIdToDelete);
      setProductIdToDelete(null);
      setShowDeleteModal(false);
    }
  };

  const handleEditClick = (product) => {
    // Set the edited product and enter edit mode
    setEditedProduct(product);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    // Update the product in the Redux store and exit edit mode
    onEditProduct(editedProduct);
    setIsEditing(false);
  };

  return (
    <>
      <div>
        <h1 className="text-center">List Product</h1>
        <div className="table-responsive">
          <table
            className="table table-striped"
            style={{ width: "60rem", maxWidth: "100%" }}
            id="listProductTable"
          >
            <thead>
              <tr className="border-top">
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
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td id="index-number">{index + 1}</td>
                  {isEditing ? (
                    <td>
                      <input
                        type="text"
                        value={editedProduct.productName}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editedProduct,
                            productName: e.target.value,
                          })
                        }
                      />
                    </td>
                  ) : (
                    <td>{product.productName}</td>
                  )}
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
                  <td>${product.productPrice}</td>
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
                    {isEditing ? (
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
      </div>

      {/* Delete Confirmation Modal */}
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

const mapStateToProps = (state) => ({
  products: state.products.products,
});


const mapDispatchToProps = (dispatch) => ({
  onDeleteProduct: (productId) => dispatch(deleteProduct(productId)),
  onEditProduct: (product) => dispatch(editProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);