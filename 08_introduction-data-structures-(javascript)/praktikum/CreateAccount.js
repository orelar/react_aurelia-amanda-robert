// Function for validating the form
function validationCreateAccount() {
  const accountFirstName = document.getElementById("validationFirstName");
  const accountLastName = document.getElementById("validationLastName");
  const accountUsername = document.getElementById("validationUsername");
  const accountEmail = document.getElementById("validationEmail");
  const accountLanguageInputs =
    document.getElementsByName("validationLanguage");
  const accountGenderInputs = document.getElementsByName("flexRadioDefault");
  const accountGenderMale = document.getElementById("validationMale");
  const accountGenderFemale = document.getElementById("validationFemale");
  const accountGenderOthers = document.getElementById("validationOthers");
  const accountAddress = document.getElementById("validationAddress");
  const accountAddressSecond = document.getElementById("validationAddress2");
  const accountNationality = document.getElementById("validationNationality");
  const accountLanguageBahasa = document.getElementById("validationBahasa");
  const accountLanguageEnglish = document.getElementById("validationEnglish");
  const accountLanguageOther = document.getElementById("validationOther");
  const submitButton = document.getElementById("submitButton");
  var specialChars = /[^a-zA-Z0-9 ]/g;
  let isValid = true;
  // submitButton.disabled = false;

  // Set up event listeners
  accountFirstName.addEventListener("input", updateButtonState);
  accountLastName.addEventListener("input", updateButtonState);
  accountUsername.addEventListener("input", updateButtonState);
  accountEmail.addEventListener("input", updateButtonState);
  accountAddress.addEventListener("input", updateButtonState);
  accountAddressSecond.addEventListener("input", updateButtonState);
  accountGenderMale.addEventListener("input", updateButtonState);
  accountGenderFemale.addEventListener("input", updateButtonState);
  accountGenderOthers.addEventListener("input", updateButtonState);
  accountNationality.addEventListener("change", updateButtonState);
  accountLanguageBahasa.addEventListener("input", updateButtonState);
  accountLanguageEnglish.addEventListener("input", updateButtonState);
  accountLanguageOther.addEventListener("input", updateButtonState);

  if (accountFirstName.value == "" || accountFirstName.value == null) {
    accountFirstName.style.border = "2px solid red";
    alert("Please fill the First Name!");
    isValid = false;
  }
  if (accountLastName.value == "" || accountLastName.value == null) {
    accountLastName.style.border = "2px solid red";
    alert("Please fill the Last Name!");
    isValid = false;
  }
  if (accountUsername.value == "" || accountUsername.value == null) {
    accountUsername.style.border = "2px solid red";
    alert("Please fill the Username!");

    isValid = false;
  }

  let isGenderChecked = false;
  let checkedGender = "";
  for (let i = 0; i < accountGenderInputs.length; i += 1) {
    if (accountGenderInputs[i].checked) {
      isGenderChecked = true;
      checkedGender =
        accountGenderInputs[i].nextElementSibling.textContent.trim();
      console.log(checkedGender);
      break;
    }
  }
  if (checkedGender == "") {
    alert("Please select the Gender!");
  }

  let checkedLanguages = [];
  for (let i = 0; i < accountLanguageInputs.length; i += 1) {
    if (accountLanguageInputs[i].checked) {
      checkedLanguages.push(
        accountLanguageInputs[i].nextElementSibling.textContent.trim()
      );
    }
  }

  if (checkedLanguages.length === 0) {
    isValid = false;
    alert("Please select the Language!");
  }

  if (accountEmail.value === "" || accountEmail.value == null) {
    accountEmail.style.border = "2px solid red";
    alert("Please fill the Email!");
    isValid = false;
  }

  if (accountNationality.selectedIndex === 0) {
    accountNationality.style.border = "2px solid red";
    alert("Please select the Nationality!");
    isValid = false;
  }

  if (accountAddress.value == "" || accountAddress.value == null) {
    accountAddress.style.border = "2px solid red";
    alert("Please fill the Address!");
    isValid = false;
  }

  if (accountAddressSecond.value == "" || accountAddressSecond.value == null) {
    accountAddressSecond.style.border = "2px solid red";
    alert("Please fill the Address 2!");
    isValid = false;
  }

  if (accountFirstName.value.length > 25) {
    alert("First Name cannot exceed 25 characters!");
    accountFirstName.style.border = "2px solid red";
    isValid = false;
  }

  if (accountLastName.value.length > 25) {
    alert("Last Name cannot exceed 25 characters!");
    accountFirstName.style.border = "2px solid red";
    isValid = false;
  }

  if (accountFirstName.value.match(specialChars)) {
    alert("First Name cannot contain symbols!");
    accountFirstName.style.border = "2px solid red";
    isValid = false;
  }

  if (accountLastName.value.match(specialChars)) {
    alert("Last Name cannot contain symbols!");
    accountLastName.style.border = "2px solid red";
    isValid = false;
  }

  if (!isValid) {
    submitButton.disabled = true;
    alert("Please input the correct values");

    return false;
  } else {
    const selectedOption =
      accountNationality.options[accountNationality.selectedIndex];
    const selectedNationality = selectedOption ? selectedOption.text : "";

    // Use the array of checked languages to create a comma-separated string
    const languagesSpoken = checkedLanguages.join(", ");
    alert(
      `First Name: ${accountFirstName.value}\nLast Name: ${accountLastName.value}\nUsername: ${accountUsername.value}\nEmail: ${accountEmail.value}\nGender: ${checkedGender}\nAddress: ${accountAddress.value}\nAddress 2: ${accountAddressSecond.value}\nNationality: ${selectedNationality}\nLanguage Spoken: ${languagesSpoken}`
    );
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
  const accountFirstName = document.getElementById("validationFirstName");
  const accountLastName = document.getElementById("validationLastName");
  const accountUsername = document.getElementById("validationUsername");
  const accountEmail = document.getElementById("validationEmail");
  const accountGenderMale = document.getElementById("validationMale");
  const accountGenderFemale = document.getElementById("validationFemale");
  const accountGenderOthers = document.getElementById("validationOthers");
  const accountAddress = document.getElementById("validationAddress");
  const accountAddressSecond = document.getElementById("validationAddress2");
  const accountNationality = document.getElementById("validationNationality");
  const accountLanguageBahasa = document.getElementById("validationBahasa");
  const accountLanguageEnglish = document.getElementById("validationEnglish");
  const accountLanguageOther = document.getElementById("validationOther");
  const submitButton = document.getElementById("submitButton");

  console.log("First Name:", accountFirstName.value.length > 0);
  console.log("Last Name:", accountLastName.value.length > 0);
  console.log("Username:", accountUsername.value.length > 0);
  console.log("Email:", accountEmail.value.length > 0);
  console.log("Gender Male:", accountGenderMale.checked);
  console.log("Gender Female:", accountGenderFemale.checked);
  console.log("Gender Others:", accountGenderOthers.checked);
  console.log("Address:", accountAddress.value.length > 0);
  console.log("Address Second:", accountAddressSecond.value.length > 0);
  console.log("Nationality:", accountNationality.selectedIndex > 0);
  console.log("Language Bahasa:", accountLanguageBahasa.checked);
  console.log("Language English:", accountLanguageEnglish.checked);
  console.log("Language Other:", accountLanguageOther.checked);

  if (
    accountFirstName.value.length > 0 &&
    accountLastName.value.length > 0 &&
    accountUsername.value.length > 0 &&
    accountEmail.value.length > 0 &&
    accountAddress.value.length > 0 &&
    accountAddressSecond.value.length > 0 &&
    (accountGenderMale.checked ||
      accountGenderFemale.checked ||
      accountGenderOthers.checked) &&
    accountNationality.selectedIndex > 0 &&
    (accountLanguageBahasa.checked ||
      accountLanguageEnglish.checked ||
      accountLanguageOther.checked)
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function clearForm() {
  // Clear all form fields here
  document.getElementById("validationFirstName").value = "";
  document.getElementById("validationLastName").value = "";
  document.getElementById("validationUsername").value = "";
  document.getElementById("validationEmail").value = "";
  document.getElementById("validationAddress").value = "";
  document.getElementById("validationAddress2").value = "";
  document.getElementById("validationNationality").selectedIndex = 0;
  // Clear gender and language checkboxes as well
  const accountGenderInputs = document.getElementsByName("flexRadioDefault");
  const accountLanguageInputs =
    document.getElementsByName("validationLanguage");
  accountGenderInputs.forEach((checkbox) => {
    checkbox.checked = false;
  });
  accountLanguageInputs.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Re-enable the submit button
  document.getElementById("submitButton").disabled = false;
}

let n = 1;
function addRow() {
  const accountLanguageInputs =
    document.getElementsByName("validationLanguage");
  const accountGenderInputs = document.getElementsByName("flexRadioDefault");
  const accountNationality = document.getElementById("validationNationality");

  const selectedOption =
    accountNationality.options[accountNationality.selectedIndex];
  const selectedNationality = selectedOption ? selectedOption.text : "";
  console.log("selectedNationality:", selectedNationality);

  let checkedGender = "";
  for (let i = 0; i < accountGenderInputs.length; i += 1) {
    if (accountGenderInputs[i].checked) {
      isGenderChecked = true;
      checkedGender =
        accountGenderInputs[i].nextElementSibling.textContent.trim();
      console.log("checkedGender: ", checkedGender);
      break;
    }
  }

  let checkedLanguages = [];
  for (let i = 0; i < accountLanguageInputs.length; i += 1) {
    if (accountLanguageInputs[i].checked) {
      checkedLanguages.push(
        accountLanguageInputs[i].nextElementSibling.textContent.trim()
      );
    }
  }
  // Use the array of checked languages to create a comma-separated string
  const languagesSpoken = checkedLanguages.join(", ");
  console.log("languageSpoken", languagesSpoken);
  var listFirstName = [];
  var listLastName = [];
  var listUsername = [];
  var listEmail = [];
  var listGender = [];
  var listAddress = [];
  var listAddressSecond = [];
  var listNationality = [];
  var listLanguageSpoken = [];

  let x = 0;

  var AddRown = document.getElementById("listAccountTable");
  var NewRow = AddRown.insertRow(n);

  listFirstName[x] = document.getElementById("validationFirstName").value;
  listLastName[x] = document.getElementById("validationLastName").value;
  listUsername[x] = document.getElementById("validationUsername").value;
  listEmail[x] = document.getElementById("validationEmail").value;
  listGender[x] = checkedGender;
  listAddress[x] = document.getElementById("validationAddress").value;
  listAddressSecond[x] = document.getElementById("validationAddress2").value;
  listNationality[x] = selectedNationality;
  listLanguageSpoken[x] = languagesSpoken;

  var cellNum = NewRow.insertCell(0);
  var cell1 = NewRow.insertCell(1);
  var cell2 = NewRow.insertCell(2);
  var cell3 = NewRow.insertCell(3);
  var cell4 = NewRow.insertCell(4);
  var cell5 = NewRow.insertCell(5);
  var cell6 = NewRow.insertCell(6);
  var cell7 = NewRow.insertCell(7);
  var cell8 = NewRow.insertCell(8);
  var cell9 = NewRow.insertCell(9);

  cellNum.textContent = n;
  cell1.textContent = listFirstName[x];
  cell2.textContent = listLastName[x];
  cell3.textContent = listUsername[x];
  cell4.textContent = listEmail[x];
  cell5.textContent = listGender[x];
  cell6.textContent = listAddress[x];
  cell7.textContent = listAddressSecond[x];
  cell8.textContent = listNationality[x];
  cell9.textContent = listLanguageSpoken[x];

  n++;
  x++;
}

function deleteRow() {
  // Get the table element by its ID
  var table = document.getElementById("listAccountTable");

  // Check if there are any rows in the table
  if (table.rows.length > 1) {
    // Delete the last row (excluding the header row)
    table.deleteRow(table.rows.length - 1);

    // Decrement n to update the row numbering
    n--;
  }
}

function searchRow() {
  var filter = usernameInput.value.toUpperCase();
  var table = document.getElementById("listAccountTable");
  var tr = table.getElementsByTagName("tr");
  var matchingRows = [];

  // Loop through all table rows, and find the ones that match the search query
  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[3]; // Select the Username column
    if (td) {
      var txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        matchingRows.push(tr[i]);
      }
    }
  }

  if (matchingRows.length === 0) {
    alert("Username not found in the table.");
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
      "\nFirst Name: " +
      rowData[1] +
      "\nLast Name: " +
      rowData[2] +
      "\nUsername: " +
      rowData[3] +
      "\nEmail: " +
      rowData[4] +
      "\nGender: " +
      rowData[5] +
      "\nAddress: " +
      rowData[6] +
      "\nAddress 2: " +
      rowData[7] +
      "\nNationality: " +
      rowData[8] +
      "\nLanguage: " +
      rowData[9];

    alert(message);
  }
}
