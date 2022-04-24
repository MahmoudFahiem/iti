/**
 * Prompt the user for a message
 */
const message = prompt("Enter a message");
/**
 * Prepare template for view
 */
let viewTemp = "<h1>Heading</h1><hr>";

/**
 * Loop through all possible headings
 * and append it to the viewTemp variable
 */
for (let i = 1; i <= 6; i++) {
  viewTemp += `<h${i}>${message}</h${i}>`;
}

/**
 * Write the view template in the document
 */
document.write(viewTemp);
