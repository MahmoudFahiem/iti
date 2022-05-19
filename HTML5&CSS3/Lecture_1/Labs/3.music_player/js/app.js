import Data from "./data.js";
import Model from "./model.js";
import Controller from "./controller.js";
import View from "./view.js";
localStorage.setItem(
  "tracks",
  JSON.stringify({
    currentTrackId: 0,
    tracksData: [
      {
        id: 0,
        title: "01",
        path: "audio/01.mp3",
      },
      {
        id: 1,
        title: "02",
        path: "audio/02.mp3",
      },
      {
        id: 2,
        title: "03",
        path: "audio/03.mp3",
      },
    ],
  })
);

const data = new Data();
const model = new Model(data, "play");
const view = new View();
const controller = new Controller(model, view);
view.controller = controller;
view.init();
