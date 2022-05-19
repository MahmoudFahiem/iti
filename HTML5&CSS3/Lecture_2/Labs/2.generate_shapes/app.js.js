const drawingSheet = document.querySelector("#drawing-sheet");
const drawBtns = document.querySelectorAll("[data-shape-type");

const drawCricle = () => {};

const draw = {
  line: () => {
    console.log("drawing line");
    const x1 = 20;
    const y1 = 20;
    const x2 = 100;
    const y2 = 100;
    const lineTemp = `
      <svg>
        <line
          x1="${x1}"
          y1="${y1}"
          x2="${x2}"
          y2="${y2}"
          style="stroke: rgb(255, 89, 0); stroke-width: 10"
        />
      </svg>
  `;

    drawingSheet.insertAdjacentHTML("beforeend", lineTemp);
  },
  rectangle: () => {
    const width = 200;
    const height = 100;
    const rectTemp = `
      <svg>
        <rect cx="10px" cy="20px" width="${width}" height="${height}" />
      </svg>
  `;

    drawingSheet.insertAdjacentHTML("beforeend", rectTemp);
  },
  circle: () => {
    const cx = "50%";
    const cy = "50%";
    const r = "40%";
    const circleTemp = `
    <svg>
      <circle cx="${cx}" cy="${cy}" r="${r}"></circle>
    </svg>
  `;

    drawingSheet.insertAdjacentHTML("beforeend", circleTemp);
  },
};

drawBtns.forEach((drawBtn) =>
  drawBtn.addEventListener("click", (e) => {
    console.log(e.currentTarget.getAttribute("data-shape-type"));
    draw[e.currentTarget.getAttribute("data-shape-type")]();
  })
);
