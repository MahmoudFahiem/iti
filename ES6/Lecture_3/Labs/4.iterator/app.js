import { lg } from "./helpers.js";

const obj = {
  name: "Mahmoud",
  age: 26,
  birthYear: 1996,
};

obj[Symbol.iterator] = function () {
  const entries = Object.entries(obj);
  let indx = 0;
  return {
    next: function () {
      return { value: entries[indx++], done: indx > entries.length };
    },
  };
};

for (let entry of obj) {
  lg(entry);
}
