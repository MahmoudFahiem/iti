/**
 * Prompt the user to enter a text
 */
const userIn = prompt("Enter a string value");
/**
 * Count e letter
 */
const eCounts = (userIn.match(/e/g) || []).length;
/**
 * Print the e letter counts in the view
 */
document.write(`<h1>Number of letter 'e' in the message is ${eCounts}</h1>`);
