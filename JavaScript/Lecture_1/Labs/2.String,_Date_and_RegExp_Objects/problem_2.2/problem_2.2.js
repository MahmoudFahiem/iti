const userIn = prompt("Enter a word to check if it palindrome or not");
const isCaseSen = confirm("Do want to consider case sensitive?");
const word = isCaseSen ? userIn : userIn.toLowerCase();
const reversedWord = word.split("").reverse().join("");
const isPalindrome = word == reversedWord;

document.write(
  `<h1>The word ${userIn} is${isPalindrome ? " " : " not "}palindrome</h1>`
);
