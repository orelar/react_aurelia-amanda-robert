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

  if (productName.value == "" || productName.value == null) {
    productName.style.border = "2px solid red";
    alert("Please fill the Product Name!");
    isValid = false;
  }

  let isFreshnessChecked = false;
  let checkedFreshness = "";
  for (let i = 0; i < productFreshnessInputs.length; i += 1) {
    if (productFreshnessInputs[i].checked) {
      isFreshnessChecked = true;
      checkedFreshness = productFreshnessInputs[i].nextElementSibling.textContent.trim();
      break;
    } 
  }
  if (checkedFreshness == "") {
      alert("Please select the Product Freshness!");
    }

  if (productImage.value === "") {
    productImage.style.border = "2px solid red";
    alert("Please upload file for the Product Image!");
    isValid = false;
  }

  if (productCategory.selectedIndex === 0) {
    productCategory.style.border = "2px solid red";
    alert("Please select the Product Category!");
    isValid = false;
  }

  if (
    productAdditionalDesc.value == "" ||
    productAdditionalDesc.value == null
  ) {
    productAdditionalDesc.style.border = "2px solid red";
    alert("Please fill the Product Additional Description!");
    isValid = false;
  }

  if (productPrice.value == "" || productPrice.value == null) {
    productPrice.style.border = "2px solid red";
    alert("Please fill the Product Price!");
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

    // Create a new row and add it to the table
    addRow();

    // Clear the form fields
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

let n = 1;
function addRow() {
  const productFreshnessInputs =
    document.getElementsByName("flexRadioDefault");

  const productCategory = document.getElementById("validationProductCategory");

  const selectedOption = productCategory.options[productCategory.selectedIndex];
  const selectedCategory = selectedOption ? selectedOption.text : '';
  console.log("selectedCategory:", selectedCategory);

  let checkedFreshness = "";
  for (let i = 0; i < productFreshnessInputs.length; i += 1) {
    if (productFreshnessInputs[i].checked) {
      isFreshnessChecked = true;
      checkedFreshness = productFreshnessInputs[i].nextElementSibling.textContent.trim();
      console.log("checkedFreshness: ", checkedFreshness);

      break;
    } 
  }

  var listProductName = [];
  var listProductCategory = [];
  var listImageProduct = [];
  var listProductFreshness = [];
  var listAdditionalDesc = [];
  var listProductPrice = [];

  let x = 0;

  var AddRown = document.getElementById("listProductTable");
  var NewRow = AddRown.insertRow(n);

  listProductName[x] = document.getElementById("validationProductName").value;
  listImageProduct[x] = document.getElementById("validationImageProduct").value;
  listAdditionalDesc[x] = document.getElementById("validationAdditionalDesc").value;
  listProductPrice[x] = document.getElementById("validationProductPrice").value;
  listProductFreshness[x] = checkedFreshness;
  listProductCategory[x] = selectedCategory;

  var cellNum = NewRow.insertCell(0);
  var cell1 = NewRow.insertCell(1);
  var cell2 = NewRow.insertCell(2);
  var cell3 = NewRow.insertCell(3);
  var cell4 = NewRow.insertCell(4);
  var cell5 = NewRow.insertCell(5);
  var cell6 = NewRow.insertCell(6);

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
  var table = document.getElementById("listProductTable");

  // Check if there are any rows in the table
  if (table.rows.length > 1) {
    // Delete the last row (excluding the header row)
    table.deleteRow(table.rows.length - 1);

    // Decrement n to update the row numbering
    n--;
  }
}

function searchRow() {
  var filter = productNameInput.value.toUpperCase();
  var table = document.getElementById("listProductTable");
  var tr = table.getElementsByTagName("tr");
  var matchingRows = [];

  // Loop through all table rows, and find the ones that match the search query
  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[1]; // Select the Product Name column
    if (td) {
      var txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        matchingRows.push(tr[i]);
      }
    }
  }

  if (matchingRows.length === 0) {
    alert("Product Name not found in the table.");
    return;
  }

  // Display data for all matching rows in separate alert messages
  for (var j = 0; j < matchingRows.length; j++) {
    var rowData = [];
    var columns = matchingRows[j].getElementsByTagName("td");
    for (var k = 0; k < columns.length; k++) {
      rowData.push(columns[k].innerText);
    }

    var message =
      "Number: " +
      rowData[0] +
      "\nProduct Name: " +
      rowData[1] +
      "\nProduct Category: " +
      rowData[2] +
      "\nImage of Product: " +
      rowData[3] +
      "\nProduct Freshness: " +
      rowData[4] +
      "\nAdditional Description: " +
      rowData[5] +
      "\nProduct Price: " +
      rowData[6];

    alert(message);
  }
}

