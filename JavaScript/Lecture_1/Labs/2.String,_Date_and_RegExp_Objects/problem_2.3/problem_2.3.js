/**
 * Predefined color options
 */
const colorOptions = ["red", "green", "blue"];

/**
 * Validates usernames
 *
 * @returns {string} username
 */
const nameValidation = () => {
  while (true) {
    /**
     * Prompt the user for his name
     */
    const name = prompt("Enter a valid name");
    /**
     * Validate user name
     */
    const pattern = /^[a-z A-Z]+$/g;
    if (pattern.test(name)) return name;
  }
};

/**
 * Validates color option
 *
 * @param {array} colorOptions
 * @returns {string} selectedColor
 */
const colorValidation = (colorOptions) => {
  while (true) {
    /**
     *  Prompt the user for his favourite color to use in document styling
     */
    const selectedColor = prompt("Welcome, choose a default color");
    /**
     * Parameter Validation
     */
    if (!colorOptions) throw Error("colorOptions paramter is required");
    /**
     * Check if color input is within the predefined options
     */
    if (colorOptions.indexOf(selectedColor) !== -1) return selectedColor;
  }
};

/**
 * Validates user telephone
 *
 * @returns {string} telephoneNumber
 */
const telephoneNumValidation = () => {
  while (true) {
    /**
     * Prompt the user for his telephone number
     */
    const telephoneNumber = prompt("Enter a valid telephone number (8 char)");
    /**
     * Validate telephone number
     */
    const pattern = /^[0-9]{8}$/g;
    if (pattern.test(telephoneNumber)) return telephoneNumber;
  }
};

/**
 * Validates user mobile number
 *
 * @returns {string} mobileNumber
 */
const mobileNumValidation = () => {
  while (true) {
    /**
     * Prompt the user for his mobile number
     */
    const mobileNumber = prompt("Enter a valid mobile number (11 char)");
    /**
     * Validate user mobile number
     */
    const pattern = /^0+1+[0-2]+[0-9]{8}$/g;
    if (pattern.test(mobileNumber)) return mobileNumber;
  }
};

/**
 * Validates user mobile number
 *
 * @returns {string} mobileNumber
 */
const emailValidation = () => {
  while (true) {
    /**
     * Prompt the user for his email
     */
    const email = prompt("Enter a valid email (abc@123.com char)");
    /**
     * Validate email
     */
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.com$/g;
    if (pattern.test(email)) return email;
  }
};

/**
 * Main Program
 */
const userFavColor = colorValidation(colorOptions);
const userName = nameValidation();
const userTelephoneNum = telephoneNumValidation();
const userMobileNum = mobileNumValidation();
const userEmail = emailValidation();
const currentDate = new Date().toDateString();
const viewTemp = `
  <main>
    <header>
      <h1>Entering User Info</h1>
      <p class="${userFavColor}">Welcome dear guest 
        <span>${userName}</span>
      </p>
      <p class="${userFavColor}">Your telephone number is 
        <span>${userTelephoneNum}</span>
      </p>
      <p class="${userFavColor}">Your mobile number is
        <span>${userMobileNum}</span>
      </p>
      <p class="${userFavColor}">Your email address is
        <span>${userEmail}</span>
      </p>
    </header>
    <footer>
      <p class="${userFavColor}">today is <span>${currentDate}</span></p>
    </footer>
  </main>
`;

/**
 * Print results into the view
 */
document.write(viewTemp);
