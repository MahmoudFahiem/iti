let numbers = [];
while (true) {
  /**
   * Prompt the user to enter a number (5 numbers)
   */
  const userIn = prompt(
    `Enter a valid number (prev Numbers Count ${numbers.length})`
  );
  /**
   * Convert the number(string) to number(number)
   */
  const number = parseInt(userIn);
  /**
   * If the number is not a number repeat
   */
  if (isNaN(number)) continue;
  /**
   * Add the number to user entered numbers
   */
  numbers.push(number);
  /**
   * When the user enter 5 numbers break the loop
   */
  if (numbers.length === 5) break;
}

/**
 * Sort the numbers in ascending and descending order and bind them into the view
 */
const viewTemp = `
  <main>
    <h1>Sorting</h1>
    <p>You have entered the values of 
      <span>${numbers.join(", ")}</span>
    </p>
    <p>Your values after being sorted in descending order
      <span>${numbers.sort((a, b) => b - a).join(", ")}</span>
    </p>
    <p>Your values after being sorted in ascending order
      <span>${numbers.sort((a, b) => a - b).join(", ")}</span>
    </p>
  </main>
`;

/**
 * Print the results into the view
 */
document.write(viewTemp);
