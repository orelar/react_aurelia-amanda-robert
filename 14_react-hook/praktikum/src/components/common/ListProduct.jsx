import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ListProduct({ products, onDeleteProduct }) {
  // State to track the ID of the product to be deleted
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  // State to control the visibility of the delete confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Function to set the product ID to be deleted when the delete button is clicked
  const handleDeleteClick = (productId) => {
    setProductIdToDelete(productId);
    setShowDeleteModal(true);
  };

  // Function to handle the actual delete action
  const handleConfirmDelete = () => {
    if (productIdToDelete !== null) {
      onDeleteProduct(productIdToDelete);
      setProductIdToDelete(null); // Clear the product ID
      setShowDeleteModal(false); // Close the modal
    }
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
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  <td>{product.productFreshness}</td>
                  <td>${product.productPrice}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteClick(product.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => handleEditProduct(product.id)}
                    >
                      Edit
                    </button>
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

export default ListProduct;