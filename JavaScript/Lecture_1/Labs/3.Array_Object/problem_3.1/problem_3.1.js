/**
 * User entered numbers (3 numbers)
 */
let numbers = [];
while (true) {
  /**
   * Prompt the user to enter a number (3 numbers in total)
   */
  const userIn = prompt(
    `Enter a valid number (prev Numbers Count ${numbers.length})`
  );
  /**
   * Convert the number(string) into number(number)
   */
  const number = parseInt(userIn);
  if (isNaN(number) || number === 0) continue;
  /**
   * Add the number into the numbers array
   */
  numbers.push(number);
  /**
   * If the numbers become 3 break the loop
   */
  if (numbers.length === 3) break;
}

/**
 * Basic calculations on user's entered numbers
 */
const sum = numbers.reduce((sum, number) => (sum += number), 0);
const mul = numbers.reduce((mul, number) => (mul *= number), 1);
const div = numbers.reduce((div, number, indx) =>
  indx == 0 ? number : (div /= number)
);
const viewTemp = `
  <main>
    <h1>Adding -- Multiplying -- and Dividing 3 values</h1>
    <p>Sum of the 3 numbers 
      <span>${numbers
        .map((number) => (number < 0 ? `(${number})` : number))
        .join("+")} = ${sum}</span>
    </p>
    <p>Multiplication of the 3 numbers
      <span>${numbers
        .map((number) => (number < 0 ? `(${number})` : number))
        .join("*")} = ${mul}</span>
    </p>
    <p>Division the 3 
      <span>${numbers
        .map((number) => (number < 0 ? `(${number})` : number))
        .join("/")} = ${div.toFixed(4)}</span>
    </p>
  </main>
`;

/**
 * Print the results into the view
 */
document.write(viewTemp);
