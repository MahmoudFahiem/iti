function Rectangle(_width, _height) {
  this._width = _width || 5;
  this._height = _height || 4;
  Rectangle.count++;
}

Rectangle.count = 0;

Rectangle.getInstancesCount = function () {
  return Rectangle.count;
};

Rectangle.prototype.calcArea = function () {
  return this._height * this._width;
};

Rectangle.prototype.calcPerimeter = function () {
  return (this._height + this._width) * 2;
};

Rectangle.prototype.calcPerimeter = function () {
  return (this._height + this._width) * 2;
};

Rectangle.prototype.toString = function () {
  document.write(
    `<h1>The rectange whose width is ${this._width} and height is ${
      this._height
    } has area of ${this.calcArea()} and perimeter of ${this.calcPerimeter()}</h1>`
  );
};

/**
 * Get rectangle width from user
 *
 * @returns {width} rectangle width
 */
const getRectWidth = () => {
  while (true) {
    const userIn = prompt("Enter a valid width for a rectangle");
    const width = parseInt(userIn);
    if (!isNaN(width)) return width;
  }
};

/**
 * Get rectangle length from user
 *
 * @returns {Length} rectangle length
 */
const getRectLength = () => {
  while (true) {
    const userIn = prompt("Enter a valid length for a rectangle");
    const length = parseInt(userIn);
    if (!isNaN(length)) return length;
  }
};

const rectWidth = getRectWidth();
const rectHeight = getRectLength();

const rect = new Rectangle(rectWidth, rectHeight);
const rect2 = new Rectangle();
Rectangle.getInstancesCount();
rect.toString();
rect2.toString();

document.write(
  `<h1>Number of rectangles is ${Rectangle.getInstancesCount()}</h1>`
);
