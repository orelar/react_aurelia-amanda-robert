import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

  // Regular expression for product name validation (letters and spaces, 1-25 characters)
  const productNameRegex = /^[a-zA-Z\s]{1,25}$/;

  // Function for product name validation
  function isValidProductName(productName) {
    return productNameRegex.test(productName);
  }
  
  // Regular expression for product freshness validation (allowed choices)
  const productFreshnessRegex = /^(Brand New|Second Hand|Refurbished)$/;
  
  // Function for product freshness validation
  function isValidProductFreshness(productFreshness) {
    return productFreshnessRegex.test(productFreshness);
  }
  
  // Regular expression for product category validation (allowed choices)
  const productCategoryRegex = /^(Category 1|Category 2|Category 3|Category 4)$/;
  
  // Function for product category validation
  function isValidProductCategory(productCategory) {
    return productCategoryRegex.test(productCategory);
  }
  
  // Regular expression for product price validation (positive numbers with or without decimals)
  const priceRegex = /^(\d+(\.\d{1,2})?)$/;
  
  // Function for product price validation
  function isValidProductPrice(productPrice) {
    return priceRegex.test(productPrice) && parseFloat(productPrice) >= 0;
  }
  

function FormProduct({ onAddProduct }) {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [selectedProductCategory, setSelectedProductCategory] = useState("");
  const [selectedProductFreshness, setSelectedProductFreshness] = useState("");
  const [inputAdditionalDesc, setInputAdditionalDesc] = useState("");
  const [inputProductPrice, setInputProductPrice] = useState("");
  const [error, setError] = useState({
    productNameError: "",
    productCategoryError: "",
    productFreshnessError: "",
    imageError: "",
    additionalDescError: "",
    productPriceError: "",
  });


  function generateUniqueId() {
    return uuidv4(); // Generate a UUID
  }

  function handleInputs(name, value) {
    setError((err) => ({ ...err, [name]: value }));
  }

  function handleChange(e) {
    e.preventDefault();
    const value = e.target.value;
    setInput(value);
    const isValidProdName = isValidProductName(value); // Set the result of the validation to isValid

    handleInputs("productNameError", "");
    if (!isValidProdName) {
      handleInputs(
        "productNameError",
        "Product Name is invalid! Only letters and spaces are allowed, and it should be 1-25 characters long"
      );
    }
  }
 

   // Modify the handleImageProductChange function
   function handleImageProductChange(e) {
    if (e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setImage(selectedFile);
      handleInputs("imageError", "");
    } else {
      setImage(null); // Reset the image state if no file is selected
      handleInputs("imageError", "Image is not found! Please select a file");
    }
  }
  function handleAdditionalDescChange(e) {
    e.preventDefault();
    const value = e.target.value;
    setInputAdditionalDesc(value);
    handleInputs("additionalDescError", "");
  }

  function handleProductCategoryChange(e) {
    const value = e.target.value;
    setSelectedProductCategory(value);
    const isValidProdCategory = isValidProductCategory(value); // Set the result of the validation to isValid

    handleInputs("productCategoryError", "");
    if (!isValidProdCategory) {
      handleInputs(
        "productCategoryError",
        "Product Category is invalid! Please select a valid category"
      );
    }
  }

  function handleProductFreshnessChange(e) {
    const value = e.target.value;
  setSelectedProductFreshness(value);
  const isValidProdFreshness = isValidProductFreshness(value); // Set the result of the validation to isValid

  handleInputs("productFreshnessError", "");
  if (!isValidProdFreshness) {
    handleInputs(
      "productFreshnessError",
      "Product Freshness is invalid! Please select a valid freshness"
    );
  }
  }

  function handleProductPriceChange(e) {
    const priceValue = e.target.value;
    setInputProductPrice(priceValue);
    const isValidProdPrice = isValidProductPrice(priceValue); // Set the result of the validation to isValid

    handleInputs("productPriceError", "");
    if (!isValidProdPrice) {
      handleInputs(
        "productPriceError",
        "Product Price is invalid! Please enter a valid positive number"
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = false;
    console.log("Form submitted"); 

    if (!input) {
      handleInputs(
        "productNameError",
        "Product Name is empty! Please fill the Product Name"
      );
      handleInputs("imageError", "Image is not found! Please select a file");
      handleInputs(
        "productCategoryError",
        "Product Category is empty! Please select one!"
      );
      handleInputs(
        "productFreshnessError",
        "Product Freshness is empty! Please select one!"
      );
      isValid = false;
    } else {
      handleInputs("productNameError", "");
      handleInputs("imageError", "");
      handleInputs("productCategoryError", "");
      handleInputs("productFreshnessError", "");
      isValid = true;
    }

    if (input === "" || input === null) {
      handleInputs(
        "additionalDescError",
        "Additional Desc is empty! Please fill the Additional Desc"
      );
      isValid = false;
    }

    if (input.length > 25) {
      handleInputs(
        "productNameError",
        "Product Name must not exceed 25 characters"
      );
      isValid = false;
    } else if (input.length > 10 && input.length < 25) {
      handleInputs(
        "productNameError",
        "Product Name must not exceed 10 characters"
      );
      isValid = false;
    }

    if (!input.trim() || parseFloat(input) < 0) {
      handleInputs(
        "productPriceError",
        "Product Price is empty! Please fill the Product Price"
      );
      isValid = false;
    } else {
      isValid = true;
    }

    // If there are no errors and no empty fields, add the product
    const newProduct = {
      id: generateUniqueId(),
      productName: input,
      productCategory: selectedProductCategory,
      productFreshness: selectedProductFreshness,
      additionalDesc: inputAdditionalDesc,
      productPrice: parseFloat(inputProductPrice),
      image: URL.createObjectURL(image), // Assuming `image` is the selected file

    };

    // Product name validation
    if (!isValidProductName(input)) {
      handleInputs(
        "productNameError",
        "Product Name is invalid! Only letters and spaces are allowed, and it should be 1-25 characters long"
      );
      isValid = false;
    } else {
      handleInputs("productNameError", "");
    }

    // Product category validation
    if (!isValidProductCategory(selectedProductCategory)) {
      handleInputs(
        "productCategoryError",
        "Product Category is invalid! Please select a valid category"
      );
      isValid = false;
    } else {
      handleInputs("productCategoryError", "");
    }

    // Product freshness validation
    if (!isValidProductFreshness(selectedProductFreshness)) {
      handleInputs(
        "productFreshnessError",
        "Product Freshness is invalid! Please select a valid freshness"
      );
      isValid = false;
    } else {
      handleInputs("productFreshnessError", "");
    }

    // Product price validation
    if (!isValidProductPrice(inputProductPrice)) {
      handleInputs(
        "productPriceError",
        "Product Price is invalid! Please enter a valid positive number"
      );
      isValid = false;
    } else {
      handleInputs("productPriceError", "");
    }

    if (isValid ) {
      onAddProduct(newProduct);
      // Reset the form
      e.target.reset();
      setInput("");
      setSelectedProductCategory("");
      setSelectedProductFreshness("");
      setInputAdditionalDesc("");
      setInputProductPrice("");
    }
  }

  useEffect(() => {
    if (input.length > 25) {
      handleInputs(
        "productNameError",
        "Product Name must not exceed 25 characters"
      );
    } else if (input.length > 10 && input.length < 25) {
      handleInputs(
        "productNameError",
        "Product Name must not exceed 10 characters"
      );
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
          <input
            type="text"
            className={`form-control w-100 ${
              error.productNameError ? "is-invalid" : input ? "is-valid" : ""
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
          {error.productNameError && (
            <div className="error-feedback">{error.productNameError}</div>
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
          <select
            name="validationProductCategory"
            className={`form-select rounded-sm w-100 ${
              error.productCategoryError
                ? "is-invalid"
                : input
                ? "is-valid"
                : ""
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
          {error.productCategoryError && (
            <div className="error-feedback">{error.productCategoryError}</div>
          )}
        </div>
         {/* Image of product */}
      <div
        className={`image-product mt-3 ${
          error.imageError ? "error-border" : ""
        }`}
      >
        <label
          htmlFor="validationImageProduct"
          className={`form-label font-weight-normal w-100 ${
            error.imageError ? "is-invalid" : image ? "is-valid" : ""
          }`}
        >
          Image of product
        </label>
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
        {image && (
          <div className="mt-2">
            <img
              src={URL.createObjectURL(image)}
              alt="Selected product"
              style={{ maxWidth: "100px" }}
            />
          </div>
        )}
        {error.imageError && (
          <div className="error-feedback">{error.imageError}</div>
        )}
      </div>
        {/* Product Freshness */}
        <div className="mt-3">
          <label htmlFor="product-freshness">Product Freshness</label>
          <div className="form-check" id="validationProductFreshness">
            <input
              className="form-check-input"
              type="radio"
              name="productFreshness"
              id="validationBrandNew"
              required=""
              value="Brand New"
              onChange={(e) => {
                handleProductFreshnessChange(e);
              }}
            />
            <label className="form-check-label" htmlFor="validationBrandNew">
              Brand New
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="productFreshness"
              id="validationSecondHand"
              value="Second Hand"
              onChange={(e) => {
                handleProductFreshnessChange(e);
              }}
            />
            <label className="form-check-label" htmlFor="validationSecondHand">
              Second Hand
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="productFreshness"
              id="validationRefurbished"
              value="Refurbished"
              onChange={(e) => {
                handleProductFreshnessChange(e);
              }}
            />
            <label className="form-check-label" htmlFor="validationRefurbished">
              Refurbished
            </label>
          </div>
          <div className="valid-feedback">Valid.</div>
          {error.productFreshnessError && (
            <div className="error-feedback">{error.productFreshnessError}</div>
          )}
        </div>
        {/* Additional Description */}
        <div className="mt-3">
          <label htmlFor="validationAdditionalDesc" className="form-label">
            Additional Description
          </label>
          <textarea
            type="text"
            className={`form-control w-100 ${
              error.additionalDescError ? "is-invalid" : input ? "is-valid" : ""
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
          {error.additionalDescError && (
            <div className="error-feedback">{error.additionalDescError}</div>
          )}
        </div>
        {/* Product price */}
        <div className="mt-3">
          <label htmlFor="validationProductPrice" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className={`form-control pl-4 w-100 ${
              error.productPriceError ? "is-invalid" : input ? "is-valid" : ""
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
          {error.productPriceError && (
            <div className="error-feedback">{error.productPriceError}</div>
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
