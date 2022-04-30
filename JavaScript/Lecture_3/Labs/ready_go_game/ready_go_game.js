const TRAFFIX_DELAY = 2000;
const lightsUI = document.querySelectorAll(".light");
let lightTrack = 0;

setInterval(() => {
  const selectedLight = lightsUI[lightTrack];
  const color = selectedLight.getAttribute("data-color");
  switchOffLamps();
  switchOnLamp(selectedLight);
  updateTrafficStat(color);
  lightTrack === 2 ? (lightTrack = 0) : lightTrack++;
}, TRAFFIX_DELAY);

const switchOffLamps = () => {
  const lightsUI = document.querySelectorAll(".light");
  lightsUI.forEach((light) => {
    const color = light.getAttribute("data-color");
    light.classList.remove(color);
  });
};

const switchOnLamp = (light) => {
  const color = light.getAttribute("data-color");
  light.classList.add(color);
};

const updateTrafficStat = (color) => {
  const trafficStatUI = document.querySelector(".traffic-stat");
  trafficStatUI.style.color = color;
  switch (color) {
    case "red":
      trafficStatUI.textContent = "ready";
      break;
    case "yellow":
      trafficStatUI.textContent = "steady";
      break;
    case "green":
      trafficStatUI.textContent = "go";
      break;
    default:
      trafficStatUI.textContent = "-";
      break;
  }
};
