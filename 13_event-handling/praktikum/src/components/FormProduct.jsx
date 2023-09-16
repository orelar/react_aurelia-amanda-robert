import React, { useEffect, useState } from "react";

function FormProduct() {
  const [input, setInput] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [imageError, setImageError] = useState(null);
  const [productCategoryError, setProductCategoryError] = useState("");
  const [productFreshnessError, setProductFreshnessError] = useState("");

  const [additionalDescError, setAdditionalDescError] = useState("");
  const [productPriceError, setProductPriceError] = useState("");

  function handleChange(e) {
    e.preventDefault();

    setInput(e.target.value);
    setProductNameError("");
  }

  function handleImageProductChange(e) {
    if (e.target.files.length > 0) {
      // Image selected, clear the image error
      setImageError("");
    } else {
      setImageError("Image is not found! Please select a file");
    }
  }

  function handleAdditionalDescChange(e) {
    e.preventDefault();

    setInput(e.target.value);
    setAdditionalDescError("");
  }

  function handleProductPriceChange(e) {
    const priceValue = e.target.value;

    // Update the input value
    setInput(priceValue);
    setProductPriceError("");
  }

  function handleProductCategoryChange(e) {
    setProductCategoryError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length <= 0) {
      setProductNameError(
        "Product Name is empty! Please fill the Product Name"
      );
    }

    if (input === "" || input === null) {
      setAdditionalDescError(
        "Additional Desc is empty! Please fill the Additional Desc"
      );
    }
    if (!input.trim() || parseFloat(input) < 0) {
      setProductPriceError(
        "Product Price is empty! Please fill the Product Price"
      );
    }

    if (!input) {
      setImageError("Image is not found! Please select a file");
      setProductCategoryError("Product Category is empty! Please select one!");
      setProductFreshnessError(
        "Product Freshness is empty! Please select one!"
      );
    }
  }

  useEffect(() => {
    if (input.length > 25) {
      setProductNameError("Product Name must not exceed 25 characters");
    } else if (input.length > 10 && input.length < 25) {
      setProductNameError("Product Name must not exceed 10 characters");
    }
  }, [input]);
  return (
    <>
      {/* FormProduct */}
      <form
        name="FormCreateProduct"
        className="container text-left needs-validation"
        id="createProduct"
        noValidate=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
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
            className={`form-control w-100 ${
              productNameError ? "is-invalid" : input ? "is-valid" : ""
            }`}
            name="validationProductName"
            id="validationProductName"
            required=""
            data-toggle="tooltip"
            data-placement="top"
            title="Enter the product name here"
            onChange={(e) => handleChange(e)}
          />
          <div className="valid-feedback">Valid.</div>
          {productNameError && (
            <div className="error-feedback">{productNameError}</div>
          )}
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
            className={`form-select rounded-sm w-100 ${
              productCategoryError ? "is-invalid" : input ? "is-valid" : ""
            }`}
            id="validationProductCategory"
            required=""
            data-toggle="tooltip"
            data-placement="top"
            title="Select the product category"
            onChange={(e) => {
              handleProductCategoryChange(e);
            }}
          >
            <option selected="" disabled="" value="">
              Choose...
            </option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
            <option value="Category 4">Category 4</option>
          </select>
          <div className="valid-feedback">Valid.</div>
          {productCategoryError && (
            <div className="error-feedback">{productCategoryError}</div>
          )}
        </div>
        {/* Image of product */}
        <div
          className={`image-product mt-3 ${imageError ? "error-border" : ""}`}
        >
          <label
            htmlFor="validationImageProduct"
            className={`form-label font-weight-normal w-100 ${
              imageError ? "is-invalid" : input ? "is-valid" : ""
            }`}
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
            onChange={(e) => {
              handleImageProductChange(e);
            }}
          />
          <div className="valid-feedback">Successfully upload file!</div>
          {imageError && <div className="error-feedback">{imageError}</div>}
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
              value="Brand New"
              onChange={(e) => setProductFreshnessError(e.target.value)}
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
              value="Second Hand"
              onChange={(e) => setProductFreshnessError(e.target.value)}
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
              value="Refurbished"
              onChange={(e) => setProductFreshnessError(e.target.value)}
            />
            <label className="form-check-label" htmlFor="validationRefurbished">
              Refurbished
            </label>
          </div>
          <div className="valid-feedback">Valid.</div>
          {productFreshnessError && (
            <div className="error-feedback">{productFreshnessError}</div>
          )}
        </div>
        {/* Additional Description */}
        <div className="mt-3">
          <label htmlFor="validationAdditionalDesc" className="form-label">
            Additional Description
          </label>
          {/* Adding tooltip  */}
          <textarea
            type="text"
            className={`form-control w-100 ${
              additionalDescError ? "is-invalid" : input ? "is-valid" : ""
            }`}
            name="validationAdditionalDesc"
            id="validationAdditionalDesc"
            cols={30}
            rows={10}
            required=""
            data-toggle="tooltip"
            data-placement="top"
            title="Provide additional details about the product"
            defaultValue={""}
            onChange={(e) => handleAdditionalDescChange(e)}
          />
          <div className="valid-feedback">Valid.</div>
          {additionalDescError && (
            <div className="error-feedback">{additionalDescError}</div>
          )}
        </div>
        {/* Product price */}
        <div className="mt-3">
          <label htmlFor="validationProductPrice" className="form-label">
            Product Price
          </label>
          {/* Adding tooltip  */}
          <input
            type="number"
            className={`form-control pl-4 w-100 ${
              productPriceError ? "is-invalid" : input ? "is-valid" : ""
            }`}
            name="validationProductPrice"
            id="validationProductPrice"
            placeholder="$1"
            required=""
            data-toggle="tooltip"
            data-placement="top"
            title="Enter the product price"
            onChange={(e) => {
              handleProductPriceChange(e);
            }}
          />
          <div className="valid-feedback">Valid.</div>
          {productPriceError && (
            <div className="error-feedback">{productPriceError}</div>
          )}
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
