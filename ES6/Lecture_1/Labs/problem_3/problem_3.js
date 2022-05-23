const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// Prblem A
const isString = fruits.every((fruit) => typeof fruit === "string");

// Problem B
const testAChar = fruits.some((fruit) => fruit.startsWith("a"));

// Problem C
const updatedFruits = fruits.filter(
  (fruit) => fruit.startsWith("b") || fruit.startsWith("s")
);

// Problem D
const fruitsWithMesg = fruits.map((fruit) => `I like ${fruit}`);

// Problem E
fruitsWithMesg.forEach((fruitWithMesg) => {
  console.log(fruitWithMesg);
});
