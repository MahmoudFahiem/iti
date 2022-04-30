const IMG_CONTAINER = ".img-container";
const SLIDE_DELAY = 3000;
const imgContainerUI = document.querySelector(IMG_CONTAINER);
const playBtn = document.querySelector("#play");
const stopBtn = document.querySelector("#stop");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const imgs = ["01", "02", "03"];

const loadImages = (imgs) => {
  imgs.forEach((img) => fetch(`imgs/${img}.jpeg`));
  return Promise.resolve();
};

const renderImg = (img, containerSelector) => {
  const imgContainer = document.querySelector(containerSelector);
  imgContainer.innerHTML = `
    <img class="slide-img" src="imgs/${img}.jpeg" alt="${img}" />
  `;
};

const slideAnimStart = () => {
  intervalRef = setInterval(() => {
    currentImgIndx =
      currentImgIndx !== imgs.length - 1 ? currentImgIndx + 1 : 0;
    renderImg(imgs[currentImgIndx], IMG_CONTAINER);
  }, SLIDE_DELAY);
};

const slideAnimStop = () => {
  clearInterval(intervalRef);
};

const slideNext = () => {
  currentImgIndx = currentImgIndx !== imgs.length - 1 ? ++currentImgIndx : 0;
  renderImg(imgs[currentImgIndx], IMG_CONTAINER);
};

const slidePrev = () => {
  currentImgIndx = currentImgIndx !== 0 ? currentImgIndx - 1 : imgs.length - 1;
  renderImg(imgs[currentImgIndx], IMG_CONTAINER);
};

let currentImgIndx = 0;
let intervalRef = null;

const main = (async () => {
  await loadImages(imgs);
  renderImg(imgs[currentImgIndx], IMG_CONTAINER);
  playBtn.addEventListener("click", slideAnimStart);
  stopBtn.addEventListener("click", slideAnimStop);
  nextBtn.addEventListener("click", slideNext);
  prevBtn.addEventListener("click", slidePrev);
})();
