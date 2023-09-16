// Define a flag to track successful submission
let isSubmitted = false;

// Define a flag to check if a form is valid or not
let isValid = true;

// Function for validating the form
function validationCreateProduct() {
  // Get input elements
  const productName = document.getElementById("validationProductName");
  const productCategory = document.getElementById("validationProductCategory");
  const productImage = document.getElementById("validationImageProduct");
  const productFreshnessInputs = document.getElementsByName("flexRadioDefault");
  const productAdditionalDesc = document.getElementById(
    "validationAdditionalDesc"
  );
  const productPrice = document.getElementById("validationProductPrice");
  const submitButton = document.getElementById("submitButton");

  const specialChars = /[^a-zA-Z0-9 ]/g;
  let isValid = true;

  // Function to display an alert and mark input as invalid
  function showErrorAlert(message) {
    alert(message);
    isValid = false;
  }

  if (!productName.value.trim()) {
    showErrorAlert("Please fill the Product Name!");
  }

  const checkedFreshness = Array.from(productFreshnessInputs).find(
    (input) => input.checked
  );
  if (!checkedFreshness) {
    showErrorAlert(
      productFreshnessInputs[0],
      "Please select the Product Freshness!"
    );
  }

  if (!productImage.value.trim()) {
    showErrorAlert("Please upload file for the Product Image!");
  }

  if (productCategory.selectedIndex === 0) {
    showErrorAlert("Please select the Product Category!");
  }

  if (!productAdditionalDesc.value.trim()) {
    showErrorAlert(
      productAdditionalDesc,
      "Please fill the Product Additional Description!"
    );
  }

  if (!productPrice.value.trim()) {
    showErrorAlert("Please fill the Product Price!");
  }

  if (productName.value.length > 25) {
    showErrorAlert("Product Name cannot exceed 25 characters!");
  }

  if (productName.value.match(specialChars)) {
    showErrorAlert("Product Name cannot contain symbols!");
  }

  if (!isValid) {
    alert("Please input the correct values");
    submitButton.disabled = true;
    return false;
  } else {
    // Collect selected product category
    const selectedOption =
      productCategory.options[productCategory.selectedIndex];
    const selectedCategory = selectedOption ? selectedOption.text : "";
    alert(
      `Product Name: ${productName.value}
        Product Category: ${selectedCategory}
        Product Image: ${productImage.value}
        Product Freshness: ${checkedFreshness}
        Product Additional Description: ${productAdditionalDesc.value}
        Product Price: ${productPrice.value}`
    );

    submitButton.disabled = false;

    // Create a new row and add it to the table (implement addRow function)
    addRow();

    // Clear the form fields (implement clearForm function)
    clearForm();

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

  // Add event listeners to update the button state when form fields change
  const inputFields = document.querySelectorAll("input, select");
  inputFields.forEach(function (input) {
    input.addEventListener("input", updateButtonState);
    input.addEventListener("change", updateButtonState);
  });
}

function clearForm() {
  // Clear all form fields here
  document.getElementById("validationProductName").value = "";
  document.getElementById("validationImageProduct").value = "";
  document.getElementById("validationAdditionalDesc").value = "";
  document.getElementById("validationProductPrice").value = "";
  document.getElementById("validationProductCategory").selectedIndex = 0;
  // Clear product freshness as well
  const productFreshnessInputs = document.getElementsByName("flexRadioDefault");
  productFreshnessInputs.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Re-enable the submit button
  document.getElementById("submitButton").disabled = false;
}

let n = 1; // Define flag for table row
let x = 0; // Define flag for indexing
function addRow() {
  const productFreshnessInputs = document.getElementsByName("flexRadioDefault");

  const productCategory = document.getElementById("validationProductCategory");

  const selectedOption = productCategory.options[productCategory.selectedIndex];
  const selectedCategory = selectedOption ? selectedOption.text : "";

  let checkedFreshness = "";
  for (let i = 0; i < productFreshnessInputs.length; i += 1) {
    if (productFreshnessInputs[i].checked) {
      checkedFreshness =
        productFreshnessInputs[i].nextElementSibling.textContent.trim();
      break;
    }
  }

  var listProductName = [];
  var listProductCategory = [];
  var listImageProduct = [];
  var listProductFreshness = [];
  var listAdditionalDesc = [];
  var listProductPrice = [];

  var addRown = document.getElementById("listProductTable");
  var newRow = addRown.insertRow(n);

  listProductName[x] = document.getElementById("validationProductName").value;
  listImageProduct[x] = document.getElementById("validationImageProduct").value;
  listAdditionalDesc[x] = document.getElementById(
    "validationAdditionalDesc"
  ).value;
  listProductPrice[x] = document.getElementById("validationProductPrice").value;
  listProductFreshness[x] = checkedFreshness;
  listProductCategory[x] = selectedCategory;

  var cellNum = newRow.insertCell(0);
  var cell1 = newRow.insertCell(1);
  var cell2 = newRow.insertCell(2);
  var cell3 = newRow.insertCell(3);
  var cell4 = newRow.insertCell(4);
  var cell5 = newRow.insertCell(5);
  var cell6 = newRow.insertCell(6);

  cellNum.textContent = n;
  cell1.textContent = listProductName[x];
  cell2.textContent = listProductCategory[x];
  cell3.textContent = listImageProduct[x];
  cell4.textContent = listProductFreshness[x];
  cell5.textContent = listAdditionalDesc[x];
  cell6.textContent = listProductPrice[x];

  n++;
  x++;
}

function deleteRow() {
  // Get the table element by its ID
  const table = document.getElementById("listProductTable");

  // Check if there are any rows in the table
  if (table.rows.length > 1) {
    // Delete the last row (excluding the header row)
    table.deleteRow(table.rows.length - 1);

    // Decrement n to update the row numbering
    n--;
  }
}

function searchRow() {
  // Get the input value
  const productNameInput = document.getElementById("searchProductName");
  const filter = productNameInput.value.trim().toUpperCase();

  // Get the table and its rows
  const table = document.getElementById("listProductTable");
  const rows = table.getElementsByTagName("tr");
  const matchingRows = [];

  // Loop through table rows to find matching ones
  for (let i = 0; i < rows.length; i++) {
    const productNameColumn = rows[i].getElementsByTagName("td")[1]; // Select the Product Name column
    if (productNameColumn) {
      const username = productNameColumn.textContent;
      if (username.toUpperCase().includes(filter)) {
        matchingRows.push(rows[i]);
      }
    }
  }

  // Handle no matching rows found
  if (matchingRows.length === 0) {
    alert("Product Name not found in the table.");
    return;
  }

  // Display data for all matching rows
  matchingRows.forEach((row) => {
    const columns = Array.from(row.getElementsByTagName("td")).map(
      (column) => column.textContent
    );

    const message = `Number: ${columns[0]}
                    Product Name: ${columns[1]}
                    Product Category: ${columns[2]}
                    Image of Product: ${columns[3]}
                    Product Freshness: ${columns[4]}
                    Additional Description: ${columns[5]}
                    Product Price: ${columns[6]}`;

    alert(message);
  });
}

// Add a submit event listener to the form
document.addEventListener("DOMContentLoaded", function () {
  const productForm = document.getElementById("createProduct");

  // Add an event listener to the form's submit event
  productForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Check if the form has already been submitted successfully
    if (isSubmitted) {
      clearForm(); // If yes, clear the form
      isSubmitted = false; // Reset the flag
    }
  });

  // Add event listeners to update the button state when form fields change
  const inputFields = productForm.querySelectorAll("input, select");
  inputFields.forEach(function (input) {
    input.addEventListener("input", updateButtonState);
    input.addEventListener("change", updateButtonState);
  });
});
