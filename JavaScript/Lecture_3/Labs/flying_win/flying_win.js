const newWindow = window.open(
  "",
  "",
  `width=500, height=300, screenY=${screenY}, screenX=${screenX}`
);
const TOLERANCE = 0.1;
const maxX = screenX + (window.outerWidth - newWindow.outerWidth);
const maxY = screenY + (window.outerHeight - newWindow.outerHeight);
const STEP = 100;
let stepX = screenX;
let stepY = screenY;
let dir = 1;
const clearRef = setInterval(() => {
  stepX = stepX + STEP * dir;
  stepY = stepY + STEP * dir;
  if (stepX >= maxX - maxX * TOLERANCE) {
    dir = -1;
  } else if (stepX <= screenX + screenX * TOLERANCE) {
    dir = 1;
  }
  if (stepY >= maxY - maxY * TOLERANCE) {
    dir = -1;
  } else if (stepY <= screenY + screenY * TOLERANCE) {
    dir = 1;
  }
  newWindow.moveTo(stepX, stepY);
}, 500);

const stop = () => {
  clearInterval(clearRef);
  newWindow.focus();
};
