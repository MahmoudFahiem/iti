/**
 * Returns a sentence entered from the user
 *
 * @returns {String} sentence
 */
const getSentence = () => {
  while (true) {
    const sentence = prompt(`Enter a sentence`);
    const pattern = /^[a-z A-Z]+$/g;
    if (pattern.test(sentence)) return sentence;
  }
};

/**
 * Returns a letter entered from the user
 *
 * @returns {String} letter
 */
const getLetter = () => {
  while (true) {
    const letter = prompt(`Enter a letter`);
    const pattern = /^[a-z A-Z]$/g;
    if (pattern.test(letter)) return letter;
  }
};

const sentence = getSentence();
const letter = getLetter();
const letterPlaces = [];
sentence.split("").forEach((char, index) => {
  if (letter === char) letterPlaces.push(index);
});

document.write(`<h1>Letter place(s) is/are at ${letterPlaces.join(", ")}</h1>`);
