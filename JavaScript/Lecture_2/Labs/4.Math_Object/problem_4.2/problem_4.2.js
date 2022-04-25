/**
 * Get a number from user
 *
 * @returns {number} number
 */
const getNumber = () => {
  while (true) {
    const userIn = prompt(
      "What is the value you want to calculate its square root?"
    );
    const number = parseInt(userIn);
    if (!isNaN(number)) return number;
  }
};

/**
 * Get a number from user after validation and calculate its square root
 */
const number = getNumber();
const squareRoot = Math.sqrt(number);

alert(`Square root of ${number} ${squareRoot}`);
