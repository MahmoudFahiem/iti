/**
 * Returns persons array entered by the user
 *
 * @returns {Array} persons
 */
const getPersons = () => {
  const persons = [];
  while (true) {
    const personName = prompt(
      `Enter a valid person Name or exit (min number of persons is 2) (persons count ${persons.length} )`
    ).toLowerCase();
    const pattern = /^[a-z A-Z]+$/g;
    if (
      !pattern.test(personName) ||
      (persons.length < 2 && personName === "exit")
    )
      continue;
    if (personName === "exit") return persons;
    persons.push(personName);
  }
};

/**
 * Returns array of unique random elements based on array parameter
 *
 * @param {Array} array
 * @returns {Array} randElArray
 */
const randUniqueArray = (array) => {
  const randUniqElsArr = [];
  const temp = {};
  while (true) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randVal = array[randomIndex];
    if (!temp[randVal]) {
      temp[randVal] = 1;
      randUniqElsArr.push(randVal);
    }
    if (randUniqElsArr.length === 2) return randUniqElsArr;
  }
};

const persons = getPersons();
const randEl = randUniqueArray(persons);

document.write(`<h1>Random names is ${randEl.join(", ")}</h1>`);
