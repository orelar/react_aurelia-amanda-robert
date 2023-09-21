$(".grid").masonry({
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  percentPosition: true,
});

// Define a flag to track successful submission
let isSubmitted = false;

// Define a flag to check if a form is valid or not
let isValid = true;

// Function for validating the form
function validationCreateAccount() {
  // Get input elements
  const accountFirstName = document.getElementById("validationFirstName");
  const accountLastName = document.getElementById("validationLastName");
  const accountEmail = document.getElementById("validationEmail");
  const accountMessage = document.getElementById("validationMessage");

  const specialChars = /[^a-zA-Z0-9 ]/g;
  let isValid = true;

  // Function to display an alert and mark input as invalid
  function showErrorAlert(message) {
    alert(message);
    isValid = false;
  }
  console.log(accountMessage);


  if (!accountFirstName.value.trim()) {
    showErrorAlert("Please fill the First Name!");
  }

  if (!accountLastName.value.trim()) {
    showErrorAlert("Please fill the Last Name!");
  }

  if (!accountEmail.value.trim()) {
    showErrorAlert("Please fill the Email!");
  }

  if (!accountMessage.value.trim()) {
    showErrorAlert("Please fill the Message!");
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
    console.log(accountMessage);
   
    alert(
      `First Name: ${accountFirstName.value}
      Last Name: ${accountLastName.value}
      Email: ${accountEmail.value}
      Message: ${accountMessage.value}`
    );

    submitButton.disabled = false;

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
  const accountEmail = document.getElementById("validationEmail");
  const accountMessage = document.getElementById("validationMessage");
  const submitButton = document.getElementById("submitButton");

  if (
    accountFirstName.value.length > 0 &&
    accountLastName.value.length > 0 &&
    accountEmail.value.length > 0 &&
    accountMessage.value.length > 0
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }

  // Add event listeners to update the button state when form fields change
  const inputFields = document.querySelectorAll("input, textarea");
  inputFields.forEach(function (input) {
    input.addEventListener("input", updateButtonState);
    input.addEventListener("textarea", updateButtonState);

  });
}

function clearForm() {
  // Clear all form fields here
  document.getElementById("validationFirstName").value = "";
  document.getElementById("validationLastName").value = "";
  document.getElementById("validationEmail").value = "";
  document.getElementById("validationMessage").value = "";

  // Re-enable the submit button
  document.getElementById("submitButton").disabled = false;
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
  const inputFields = accountForm.querySelectorAll("input, textarea");
  inputFields.forEach(function (input) {
    input.addEventListener("input", updateButtonState);
    input.addEventListener("textarea", updateButtonState);
  });
});
