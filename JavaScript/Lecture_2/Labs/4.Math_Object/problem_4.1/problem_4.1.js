/**
 * Define constant PI
 */
const PI = Math.PI;
/**
 * Get radius of a circle from user
 *
 * @returns {number} circleRad
 */
const getCircleRad = () => {
  while (true) {
    const userIn = prompt("Enter the value of a circle radius");
    const circleRad = parseInt(userIn);
    if (!isNaN(circleRad)) return circleRad;
  }
};

/**
 * Get radius after validation and calculate area of the circle
 */
const circleRad = getCircleRad();
const circleArea = PI * circleRad ** 2;

document.write(
  `<h1>Total area of the circle is ${circleArea.toFixed(2)} m^2</h1>`
);
