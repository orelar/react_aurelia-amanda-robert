// Define a flag to track successful submission
let isSubmitted = false;

// Define a flag to check if a form is valid or not
let isValid = true;

// Function for validating the form
function validationCreateAccount() {
  // Get input elements
  const accountFirstName = document.getElementById("validationFirstName");
  const accountLastName = document.getElementById("validationLastName");
  const accountUsername = document.getElementById("validationUsername");
  const accountEmail = document.getElementById("validationEmail");
  const accountAddress = document.getElementById("validationAddress");
  const accountAddressSecond = document.getElementById("validationAddress2");
  const accountGenderInputs = document.getElementsByName("flexRadioDefault");
  const accountLanguageInputs =
    document.getElementsByName("validationLanguage");
  const accountNationality = document.getElementById("validationNationality");

  const specialChars = /[^a-zA-Z0-9 ]/g;
  let isValid = true;

  // Function to display an alert and mark input as invalid
  function showErrorAlert(message) {
    alert(message);
    isValid = false;
  }

  if (!accountFirstName.value.trim()) {
    showErrorAlert("Please fill the First Name!");
  }

  if (!accountLastName.value.trim()) {
    showErrorAlert("Please fill the Last Name!");
  }

  if (accountUsername.value.indexOf(" ") >= 0) {
    showErrorAlert("Username cannot contain space!");
  }

  // Check if a gender option is selected
  const checkedGender = Array.from(accountGenderInputs).find(
    (input) => input.checked
  );
  if (!checkedGender) {
    showErrorAlert("Please select the Gender!");
  }

  // Collect selected languages
  const checkedLanguages = Array.from(accountLanguageInputs)
    .filter((input) => input.checked)
    .map((input) => input.nextElementSibling.textContent.trim());

  if (checkedLanguages.length === 0) {
    showErrorAlert("Please select the Language!");
  }

  if (!accountEmail.value.trim()) {
    showErrorAlert("Please fill the Email!");
  }

  if (accountNationality.selectedIndex === 0) {
    showErrorAlert("Please select the Nationality!");
  }

  if (!accountAddress.value.trim()) {
    showErrorAlert("Please fill the Address!");
  }

  if (!accountAddressSecond.value.trim()) {
    showErrorAlert("Please fill the Address 2!");
  }

  if (accountFirstName.value.length > 25) {
    showErrorAlert("First Name cannot exceed 25 characters!");
  }

  if (accountLastName.value.length > 25) {
    showErrorAlert("Last Name cannot exceed 25 characters!");
  }

  if (accountFirstName.value.match(specialChars)) {
    showErrorAlert("First Name cannot contain symbols!");
  }

  if (accountLastName.value.match(specialChars)) {
    showErrorAlert("Last Name cannot contain symbols!");
  }

  if (!isValid) {
    alert("Please input the correct values");
    submitButton.disabled = true;
    return false;
  } else {
    // Collect selected nationality
    const selectedNationality =
      accountNationality.options[accountNationality.selectedIndex].text;

    // Create a comma-separated string of selected languages
    const languagesSpoken = checkedLanguages.join(", ");

    alert(
      `First Name: ${accountFirstName.value}
      Last Name: ${accountLastName.value}
      Username: ${accountUsername.value}
      Email: ${accountEmail.value}
      Gender: ${checkedGender.nextElementSibling.textContent.trim()}
      Address: ${accountAddress.value}
      Address 2: ${accountAddressSecond.value}
      Nationality: ${selectedNationality}
      Language Spoken: ${languagesSpoken}`
    );

    submitButton.disabled = false;
    // Create a new row and add it to the table (implement addRow function)
    addRow();
    // Clear the form fields (implement clearForm function)
    clearForm();
    isSubmitted = true;
    return true;
  }
}

// Function for disable/enable submit button
function updateButtonState() {
  const accountFirstName = document.getElementById("validationFirstName");
  const accountLastName = document.getElementById("validationLastName");
  const accountUsername = document.getElementById("validationUsername");
  const accountEmail = document.getElementById("validationEmail");
  const accountAddress = document.getElementById("validationAddress");
  const accountAddressSecond = document.getElementById("validationAddress2");
  const accountGenderMale = document.getElementById("validationMale");
  const accountGenderFemale = document.getElementById("validationFemale");
  const accountGenderOthers = document.getElementById("validationOthers");
  const accountNationality = document.getElementById("validationNationality");
  const accountLanguageBahasa = document.getElementById("validationBahasa");
  const accountLanguageEnglish = document.getElementById("validationEnglish");
  const accountLanguageOther = document.getElementById("validationOther");
  const submitButton = document.getElementById("submitButton");

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

  // Add event listeners to update the button state when form fields change
  const inputFields = document.querySelectorAll("input, select");
  inputFields.forEach(function (input) {
    input.addEventListener("input", updateButtonState);
    input.addEventListener("change", updateButtonState);
  });
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

  const accountGenderInputs = document.getElementsByName("flexRadioDefault");
  const accountLanguageInputs =
    document.getElementsByName("validationLanguage");

  // Clear gender and language checkboxes as well
  accountGenderInputs.forEach((checkbox) => {
    checkbox.checked = false;
  });
  accountLanguageInputs.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Re-enable the submit button
  document.getElementById("submitButton").disabled = false;
}

let n = 1; // Define flag for table row
let x = 0; // Define flag for indexing
function addRow() {
  const accountLanguageInputs =
    document.getElementsByName("validationLanguage");
  const accountGenderInputs = document.getElementsByName("flexRadioDefault");
  const accountNationality = document.getElementById("validationNationality");

  const selectedOption =
    accountNationality.options[accountNationality.selectedIndex];
  const selectedNationality = selectedOption ? selectedOption.text : "";

  let checkedGender = "";
  for (let i = 0; i < accountGenderInputs.length; i += 1) {
    if (accountGenderInputs[i].checked) {
      checkedGender =
        accountGenderInputs[i].nextElementSibling.textContent.trim();
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

  var listFirstName = [];
  var listLastName = [];
  var listUsername = [];
  var listEmail = [];
  var listGender = [];
  var listAddress = [];
  var listAddressSecond = [];
  var listNationality = [];
  var listLanguageSpoken = [];

  var addRown = document.getElementById("listAccountTable");
  var newRow = addRown.insertRow(n);

  listFirstName[x] = document.getElementById("validationFirstName").value;
  listLastName[x] = document.getElementById("validationLastName").value;
  listUsername[x] = document.getElementById("validationUsername").value;
  listEmail[x] = document.getElementById("validationEmail").value;
  listGender[x] = checkedGender;
  listAddress[x] = document.getElementById("validationAddress").value;
  listAddressSecond[x] = document.getElementById("validationAddress2").value;
  listNationality[x] = selectedNationality;
  listLanguageSpoken[x] = languagesSpoken;

  var cellNum = newRow.insertCell(0);
  var cell1 = newRow.insertCell(1);
  var cell2 = newRow.insertCell(2);
  var cell3 = newRow.insertCell(3);
  var cell4 = newRow.insertCell(4);
  var cell5 = newRow.insertCell(5);
  var cell6 = newRow.insertCell(6);
  var cell7 = newRow.insertCell(7);
  var cell8 = newRow.insertCell(8);
  var cell9 = newRow.insertCell(9);

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
  const table = document.getElementById("listAccountTable");

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
  const usernameInput = document.getElementById("searchUsername");
  const filter = usernameInput.value.trim().toUpperCase();

  // Get the table and its rows
  const table = document.getElementById("listAccountTable");
  const rows = table.getElementsByTagName("tr");
  const matchingRows = [];

  // Loop through table rows to find matching ones
  for (let i = 0; i < rows.length; i++) {
    const usernameColumn = rows[i].getElementsByTagName("td")[3]; // Select the Username column
    if (usernameColumn) {
      const username = usernameColumn.textContent;
      if (username.toUpperCase().includes(filter)) {
        matchingRows.push(rows[i]);
      }
    }
  }

  // Handle no matching rows found
  if (matchingRows.length === 0) {
    alert("Username not found in the table.");
    return;
  }

  // Display data for all matching rows
  matchingRows.forEach((row) => {
    const columns = Array.from(row.getElementsByTagName("td")).map(
      (column) => column.textContent
    );

    const message = `Number: ${columns[0]}
                    First Name: ${columns[1]}
                    Last Name: ${columns[2]}
                    Username: ${columns[3]}
                    Email: ${columns[4]}
                    Gender: ${columns[5]}
                    Address: ${columns[6]}
                    Address 2: ${columns[7]}
                    Nationality: ${columns[8]}
                    Language: ${columns[9]}`;

    alert(message);
  });
}

// Add a submit event listener to the form
document.addEventListener("DOMContentLoaded", function () {
  const accountForm = document.getElementById("createAccount");

  // Add an event listener to the form's submit event
  accountForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Check if the form has already been submitted successfully
    if (isSubmitted) {
      clearForm(); // If yes, clear the form
      isSubmitted = false; // Reset the flag
    }
  });

  // Add event listeners to update the button state when form fields change
  const inputFields = accountForm.querySelectorAll("input, select");
  inputFields.forEach(function (input) {
    input.addEventListener("input", updateButtonState);
    input.addEventListener("change", updateButtonState);
  });
});

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Fetch the form that you want to validate
  var formAccount = document.getElementById("createAccount");

  // Get the language checkboxes
  var languageCheckboxes = formAccount.querySelectorAll(
    "input[name='validationLanguage']"
  );

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        var isLanguageSelected = Array.from(languageCheckboxes).some(
          function (checkbox) {
            return checkbox.checked;
          }
        );

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
