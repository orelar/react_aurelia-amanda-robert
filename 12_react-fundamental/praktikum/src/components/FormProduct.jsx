import React from "react";

function FormProduct() {
  return (
    <>
      {/* FormProduct */}
      <form
        name="FormCreateProduct"
        className="container text-left needs-validation"
        id="createProduct"
        noValidate=""
        onsubmit="return validationCreateProduct();"
      >
        <h3>Detail Product</h3>
        {/* Product name */}
        <div className="product-name mt-3">
          <label
            htmlFor="validationProductName"
            className="form-label font-weight-normal text-center"
          >
            Product name
          </label>
          {/* Adding tooltip  */}
          <input
            type="text"
            className="form-control w-100"
            name="validationProductName"
            id="validationProductName"
            required=""
            data-toggle="tooltip"
            data-placement="top"
            title="Enter the product name here"
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        {/* Product Category */}
        <div className="product-category d-flex flex-column mt-4">
          <label
            htmlFor="validationProductCategory"
            className="form-label font-weight-normal"
          >
            Product category
          </label>
          {/* Adding tooltip  */}
          <select
            name="validationProductCategory"
            className="form-select rounded-sm"
            id="validationProductCategory"
            required=""
            data-toggle="tooltip"
            data-placement="top"
            title="Select the product category"
          >
            <option selected="" disabled="" value="">
              Choose...
            </option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
            <option>Category 4</option>
          </select>
          <div className="valid-feedback">Valid.</div>
        </div>
        {/* Image of product */}
        <div className="image-product mt-3">
          <label
            htmlFor="validationImageProduct"
            className="form-label font-weight-normal"
          >
            Image of product
          </label>
          {/* Adding tooltip */}
          <input
            type="file"
            className="form-control btn-primary bg-white text-primary rounded-sm small"
            name="validationImageProduct"
            id="validationImageProduct"
            required=""
            data-toggle="tooltip"
            data-placement="top"
            title="Upload an image of the product"
          />
          <div className="valid-feedback">Successfully upload file!</div>
        </div>
        {/* Product Freshness */}
        <div className="mt-3">
          <label htmlFor="product-freshness">Product Freshness</label>
          <div className="form-check" id="validationProductFreshness">
            {/* Adding tooltip  */}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="validationBrandNew"
              required=""
            />
            <label className="form-check-label" htmlFor="validationBrandNew">
              Brand New
            </label>
          </div>
          <div className="form-check">
            {/* Adding tooltip  */}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="validationSecondHand"
            />
            <label className="form-check-label" htmlFor="validationSecondHand">
              Second Hand
            </label>
          </div>
          <div className="form-check">
            {/* Adding tooltip  */}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="validationRefurbished"
            />
            <label className="form-check-label" htmlFor="validationRefurbished">
              Refurbished
            </label>
          </div>
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please select one.</div>
        </div>
        {/* Additional Description */}
        <div className="mt-3">
          <label htmlFor="validationAdditionalDesc" className="form-label">
            Additional Description
          </label>
          {/* Adding tooltip  */}
          <textarea
            type="text"
            className="form-control"
            name="validationAdditionalDesc"
            id="validationAdditionalDesc"
            cols={30}
            rows={10}
            required=""
            data-toggle="tooltip"
            data-placement="top"
            title="Provide additional details about the product"
            defaultValue={""}
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        {/* Product price */}
        <div className="mt-3">
          <label htmlFor="validationProductPrice" className="form-label">
            Product Price
          </label>
          {/* Adding tooltip  */}
          <input
            type="number"
            className="form-control pl-4"
            name="validationProductPrice"
            id="validationProductPrice"
            placeholder="$1"
            required=""
            data-toggle="tooltip"
            data-placement="top"
            title="Enter the product price"
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">
            Please fill out the correct price number.
          </div>
        </div>
        <div className="text-center">
          <button
            className="w-100 btn btn-primary text-white border-0 py-3 rounded-sm"
            type="submit"
            id="submitButton"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default FormProduct;
