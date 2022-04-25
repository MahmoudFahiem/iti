/**
 * Define constant PI
 */
const PI = Math.PI;

/**
 * Get an angle from user
 *
 * @returns {number} number
 */
const getAngle = () => {
  while (true) {
    const userIn = prompt(
      "What is the angle you want to calculate its cosine value?"
    );
    const angle = parseInt(userIn);
    if (!isNaN(angle)) return angle;
  }
};

/**
 * Get an angle from user after validation and calculate its cosine
 */
const angle = getAngle();
const cosine = Math.cos((angle * PI) / 180).toFixed(2);

document.write(`<h1>cos(${angle}) is ${cosine}</h1>`);
