const minMax = (...numbers) => ({
  min: Math.min(...numbers),
  max: Math.max(...numbers),
});

console.log(minMax(10, 5, 20, 1000));
