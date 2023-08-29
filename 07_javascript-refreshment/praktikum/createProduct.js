// Function for validating the form
function validationCreateProduct() {
  const productName = document.getElementById("validationProductName");
  const productCategory = document.getElementById("validationProductCategory");
  const productImage = document.getElementById("validationImageProduct");
  const productFreshnessInputs = document.getElementsByName("flexRadioDefault");
  const productFreshnessBrandNew =
    document.getElementById("validationBrandNew");
  const productFreshnessSecondHand = document.getElementById(
    "validationSecondHand"
  );
  const productFreshnessRefurbished = document.getElementById(
    "validationRefurbished"
  );
  const productAdditionalDesc = document.getElementById(
    "validationAdditionalDesc"
  );
  const productPrice = document.getElementById("validationProductPrice");
  const submitButton = document.getElementById("submitButton");
  var specialChars = /[^a-zA-Z0-9 ]/g;
  let isValid = true;
  submitButton.disabled = false;

  // Set up event listeners
  productName.addEventListener("input", updateButtonState);
  productAdditionalDesc.addEventListener("input", updateButtonState);
  productPrice.addEventListener("input", updateButtonState);
  productImage.addEventListener("input", updateButtonState);
  productFreshnessBrandNew.addEventListener("input", updateButtonState);
  productFreshnessSecondHand.addEventListener("input", updateButtonState);
  productFreshnessRefurbished.addEventListener("input", updateButtonState);
  productCategory.addEventListener("change", updateButtonState);

  productName.style.border = "1px solid #ced4da";
  productCategory.style.border = "1px solid #ced4da";
  productImage.style.border = "1px solid #ced4da";
  productAdditionalDesc.style.border = "1px solid #ced4da";
  productPrice.style.border = "1px solid #ced4da";

  if (productName.value == "" || productName.value == null) {
    productName.style.border = "2px solid red";
    isValid = false;
  }

  let isFreshnessChecked = false;
  let checkedFreshness = "";
  for (let i = 0; i < productFreshnessInputs.length; i += 1) {
    if (productFreshnessInputs[i].checked) {
      isFreshnessChecked = true;
      checkedFreshness = productFreshnessInputs[i].nextElementSibling.textContent.trim();
      console.log(checkedFreshness);
      break;
    } 
    if (!productFreshnessInputs[i].checked){
      productFreshnessInputs[i].style.outline = "2px solid red";
    }
  }

  if (productImage.value === "") {
    productImage.style.border = "2px solid red";
    isValid = false;
  }

  if (productCategory.selectedIndex === 0) {
    productCategory.style.border = "2px solid red";
    isValid = false;
  }

  if (
    productAdditionalDesc.value == "" ||
    productAdditionalDesc.value == null
  ) {
    productAdditionalDesc.style.border = "2px solid red";
    isValid = false;
  }

  if (productPrice.value == "" || productPrice.value == null) {
    productPrice.style.border = "2px solid red";
    isValid = false;
  }

  if (productName.value.length > 25) {
    alert("Product Name cannot exceed 25 characters!");
    productName.style.border = "2px solid red";
    isValid = false;
  }

  if (productName.value.match(specialChars)) {
    alert("Product Name cannot contain symbols!");
    productName.style.border = "2px solid red";
    isValid = false;
  }

  if (!isValid) {
    submitButton.disabled = true;
    alert("Please input the correct values");
    return false;
  } else {
    const selectedOption = productCategory.options[productCategory.selectedIndex];
    const selectedCategory = selectedOption ? selectedOption.text : '';
    alert(`Product Name: ${productName.value}\nProduct Category: ${selectedCategory}\nProduct Image: ${productImage.value}\nProduct Freshness: ${checkedFreshness}\nProduct Additional Description: ${productAdditionalDesc.value}\nProduct Price: ${productPrice.value}`);
    submitButton.disabled = false;
    return true;
  }
}

// Function for disable/enable submit button
function updateButtonState() {
  const productName = document.getElementById("validationProductName");
  const productCategory = document.getElementById("validationProductCategory");
  const productImage = document.getElementById("validationImageProduct");
  const productFreshnessBrandNew =
    document.getElementById("validationBrandNew");
  const productFreshnessSecondHand = document.getElementById(
    "validationSecondHand"
  );
  const productFreshnessRefurbished = document.getElementById(
    "validationRefurbished"
  );
  const productAdditionalDesc = document.getElementById(
    "validationAdditionalDesc"
  );
  const productPrice = document.getElementById("validationProductPrice");
  const submitButton = document.getElementById("submitButton");

  if (
    productName.value.length > 0 &&
    productPrice.value.length > 0 &&
    productAdditionalDesc.value.length > 0 &&
    productImage.value.length > 0 &&
    (productFreshnessBrandNew.checked ||
      productFreshnessSecondHand.checked ||
      productFreshnessRefurbished.checked) &&
    productCategory.selectedIndex > 0
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
