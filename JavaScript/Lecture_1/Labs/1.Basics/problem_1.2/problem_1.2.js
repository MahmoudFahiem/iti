/**
 * numbers from the user
 */
let numbers = [];

while (true) {
  /**
   * Prompt the user for a number
   */
  const userIn = prompt(
    `Enter a valid number (prev numbers are ${numbers.join(", ") || "-- "})`
  );
  /**
   * Convert the number(string) user entered to number(number)
   */
  const number = parseInt(userIn);
  /**
   * If the number is not valide repeat again
   */
  if (isNaN(number)) continue;
  /**
   * If the number is not 0 add it to the numbers array
   */
  if (number != 0) numbers.push(number);
  /**
   * Calculate the sum of the user entered numbers
   */
  const sum = numbers.reduce((sum, number) => sum + number, 0);
  /**
   * If the number is 0 or the sum exceeds 100 break the loop and print the sum
   */
  if (number == 0 || sum > 100) {
    document.write(`<h1>The sum of numbers is ${sum}</h1>`);
    break;
  }
}
