import React from "react";

function ListProduct() {
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
                <th scope="col">Additional Desciption</th>
                <th scope="col">Product Price</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="mb-4">
          <form className="needs-validation" noValidate="">
            <input
              type="text"
              name="searchProductName"
              id="searchProductName"
              minLength={1}
              placeholder="Search by Product Name"
              required=""
              className="px-2 pe-4 rounded-2 form-control"
              style={{ width: 250 }}
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Something wrong</div>
            <div className="d-flex">
              <button
                type="button"
                className="bg-primary rounded-lg text-white border-0 px-4 py-2"
                onclick="deleteRow()"
              >
                Delete
              </button>
              <button
                type="button"
                className="bg-white text-primary rounded-lg border-2 border-primary px-4 py-2"
                onclick="searchRow()"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
