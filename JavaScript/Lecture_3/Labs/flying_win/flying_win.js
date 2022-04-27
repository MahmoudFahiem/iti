const newWindow = window.open(
  "",
  "",
  `width=500, height=300, screenY=${screenY}, screenX=${screenX}`
);
const maxX = screenX + (window.outerWidth - newWindow.outerWidth);
const maxY = screenY + (window.outerHeight - newWindow.outerHeight);
newWindow.focus();
const STEP = 100;
let stepX = screenX;
let stepY = screenY;
let dir = 1;
const clearRef = setInterval(() => {
  stepX = stepX + STEP * dir;
  stepY = stepY + STEP * dir;
  if (stepX >= maxX) {
    stepX = maxX;
    dir = -1;
  } else if (stepX <= screenX) {
    stepX = screenX;
    dir = 1;
  }
  if (stepY >= maxX) {
    stepY = maxY;
    dir = -1;
  } else if (stepY <= screenY) {
    stepY = screenY;
    dir = 1;
  }
  newWindow.moveTo(stepX, stepY);
}, 1000);

const stop = () => clearInterval(clearRef);
