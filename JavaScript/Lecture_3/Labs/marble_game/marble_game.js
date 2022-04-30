const ANIMATION_SPEED = 300;
const DEFAULT_MARBLE = "marble";
const DEFAULT_MARBLE_NUMBER = 6;
const ACTIVE_MARBLE = "active_marble";
const HOVERED_MARBLE = "hovered_marble";
const MARBLE_CONTAINER = ".marbles-container";
const marbleContainerUI = document.querySelector(MARBLE_CONTAINER);
const IMGS_PATHS = [
  `imgs/${DEFAULT_MARBLE}.jpeg`,
  `imgs/${ACTIVE_MARBLE}.jpeg`,
  `imgs/${HOVERED_MARBLE}.jpeg`,
];

/**
 *  load images from server
 *
 * @param {Array.<string>} imgsPaths
 * @returns {Promise} resolved after fetching all images
 */
const loadImages = (imgsPaths) => {
  imgsPaths.forEach((path) => fetch(path));
  return Promise.resolve();
};

/**
 *  Create array of marbles of selected number
 *
 * @param {Number} length length of created marbles array
 * @param {String} path
 * @returns
 */
const createMarblesOf = (length, marble) => {
  return Array(length).fill(marble);
};

/**
 * Render selected marbles into the page
 *
 * @param {Array.<String>} marbles
 * @param {String} containerSelector
 */
const renderMarbles = (marbles, containerSelector) => {
  const marblesContainer = document.querySelector(containerSelector);
  marblesContainer.innerHTML = marbles
    .map(
      (marble) => `
    <img src="imgs/${marble}.jpeg" alt="marble" />
  `
    )
    .join("");
};

/**
 * Start marbles animation
 *
 * @returns {Number} Refrence to the created interval
 */
const marbleAnimStart = () => {
  intervalCleared = false;
  return setInterval(() => {
    updatedMarbles = marbles.map((_, marbleIndx) =>
      marbleIndx === currentMarbleIndx ? "active_marble" : DEFAULT_MARBLE
    );
    renderMarbles(updatedMarbles, MARBLE_CONTAINER);
    currentMarbleIndx =
      currentMarbleIndx !== marbles.length - 1 ? ++currentMarbleIndx : 0;
  }, ANIMATION_SPEED);
};

const marbles = createMarblesOf(DEFAULT_MARBLE_NUMBER, DEFAULT_MARBLE);
let updatedMarbles = [...marbles];
let currentMarbleIndx = 0;
let intervalCleared = false;
let intervalRef = marbleAnimStart();

const main = (async () => {
  /**
   * Cache images
   */
  await loadImages(IMGS_PATHS);

  /**
   * Listen to mouseenter on marbles container to stop the animation
   */
  marbleContainerUI.addEventListener("mouseenter", () => {
    if (intervalCleared) return;
    clearInterval(intervalRef);
    intervalCleared = true;
    const marblesOnHover = updatedMarbles.map((marble) =>
      marble === ACTIVE_MARBLE ? HOVERED_MARBLE : marble
    );
    renderMarbles(marblesOnHover, MARBLE_CONTAINER);
  });

  /**
   * Listen to mouseleave on marbles container to resume the animation
   */
  marbleContainerUI.addEventListener("mouseleave", () => {
    intervalRef = marbleAnimStart();
  });

  /**
   * Render marbles into the page
   */
  renderMarbles(marbles, MARBLE_CONTAINER);
})();
