/**
 * Prompt the user to enter a word to check if it is palindrome
 */
const userIn = prompt("Enter a word to check if it palindrome or not");
/**
 * Prompt the user if he wants to consider case sensitive in check
 */
const isCaseSen = confirm("Do want to consider case sensitive?");
/**
 * If case sensitive is not considered convert all letters to lowercase (or uppercase)
 */
const word = isCaseSen ? userIn : userIn.toLowerCase();
/**
 * Reverse the word
 */
const reversedWord = word.split("").reverse().join("");
/**
 * Check if the reversed word equals the entered word
 */
const isPalindrome = word == reversedWord;

/**
 * Print the results in the view
 */
document.write(
  `<h1>The word ${userIn} is${isPalindrome ? " " : " not "}palindrome</h1>`
);
