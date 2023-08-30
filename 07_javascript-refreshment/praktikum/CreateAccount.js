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
