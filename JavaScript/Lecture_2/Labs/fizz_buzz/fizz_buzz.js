/**
 * Get a number from a user
 *
 * @returns {number} number
 */
const getNumber = () => {
  while (true) {
    /**
     * Prompt the user to enter a number
     */
    const userIn = prompt("Enter a valid number");
    const number = parseInt(userIn);
    if (!isNaN(number)) return number;
  }
};

/**
 *
 * @param {number} number
 * @returns {string} output
 */
const fizzBuzz = (number) => {
  let output = "";
  if (number % 3 === 0 && number % 5 === 0) {
    output = "fizz buzz";
  } else if (number % 3 === 0) {
    output = "fizz";
  } else if (number % 5 === 0) {
    output = "buzz";
  } else {
    output = "none";
  }
  return output;
};

/**
 * Get a number from user after validation
 */
const number = getNumber();

/**
 * Perform some checks to determine the output
 */
const output = fizzBuzz(number);

/**
 * Print the output into the view
 */
document.write(`<h1>${output}</h1>`);
