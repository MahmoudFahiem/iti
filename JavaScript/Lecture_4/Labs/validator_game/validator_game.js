const alertContainerUI = document.querySelector(".alerts-container");
const form = document.querySelector("form");

const printErrors = (errors) => {
  if (errors.length !== 0) {
    const errorTemp = `
    <section class="pt-4 validation-container">
      <div class="container">
        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading">
            <i class="fa-regular fa-circle-xmark"></i> Things gone wrong
          </h4>
          <ul class="error-list">
            ${errors.map((error) => `<li>${error}</li>`).join("")}
          </ul>
        </div>
      </div>
    </section>
  `;
    alertContainerUI.innerHTML = errorTemp;
  } else {
    const successTemp = `
    <section class="pt-4 validation-container">
      <div class="container">
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading m-0">
            <i class="fa-regular fa-circle-check"></i> The form is validated
          </h4>
        </div>
      </div>
    </section>
  `;
    alertContainerUI.innerHTML = successTemp;
  }
};

const validate = (e) => {
  const errors = [];
  const validateName = () => {
    const nameInUI = document.querySelector("#name");
    const nameVal = nameInUI.value;
    const namePattern = /^[a-z A-Z]+$/g;
    if (nameVal === "") errors.push("Name is required");
    else if (!namePattern.test(nameVal)) errors.push("Enter a valid name");
  };

  const validateEmail = () => {
    const emailInUI = document.querySelector("#email");
    const emailVal = emailInUI.value;
    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.com$/g;
    if (emailVal === "") errors.push("Email is required");
    else if (!emailPattern.test(emailVal)) errors.push("Enter a valid email");
  };

  const validatePassword = () => {
    const passwordInUI = document.querySelector("#password");
    const passwordVal = passwordInUI.value;
    if (passwordVal === "") errors.push("Password is required");
    else if (passwordVal.length < 8)
      errors.push("Password must be at least 8 characters");
  };

  const validateGender = () => {
    const genderInUI = document.querySelector("[name=gender]:checked");
    if (!genderInUI) errors.push("Please select your gender");
  };

  const validateSports = () => {
    const sportsInUI = document.querySelectorAll("[name=sports]:checked");
    if (sportsInUI.length < 2) errors.push("Please select at least two sports");
  };

  const validateCountry = () => {
    const countrySelect = document.querySelector(
      "select[name=country] option:checked:not(option:disabled)"
    );
    if (!countrySelect) errors.push("Please select your country");
  };

  e.preventDefault();
  validateName();
  validateEmail();
  validatePassword();
  validateGender();
  validateSports();
  validateCountry();
  printErrors(errors);
};

form.addEventListener("submit", validate);
