import { lg } from "./helpers.js";

class Shape {
  constructor(l1 = 0, unit = "cm") {
    if (this.constructor === Shape)
      throw TypeError("Instance of Abstract class cannot be instantiated");
    this.l1 = l1;
    this.unit = unit;
  }
  calcPerimeter() {}
  calcArea() {}

  toString() {
    lg(
      `Perimeter = ${this.calcPerimeter().toFixed(2)} ${
        this.unit
      }, Area = ${this.calcArea().toFixed(2)} ${this.unit}`
    );
  }
}

export class Circle extends Shape {
  constructor(l1, unit) {
    super(l1);
  }

  calcPerimeter() {
    return 2 * Math.PI * this.l1;
  }

  calcArea() {
    return Math.PI * this.l1 ** 2;
  }
}

export class Rectangle extends Shape {
  constructor(l1 = 0, l2 = 0, unit) {
    super(l1, unit);
    this.l2 = l2;
  }

  calcPerimeter() {
    return 2 * (this.l1 + this.l2);
  }

  calcArea() {
    return this.l1 * this.l2;
  }
}

export class Square extends Shape {
  constructor(l1, unit) {
    super(l1, unit);
  }

  calcPerimeter() {
    return 4 * this.l1;
  }

  calcArea() {
    return this.l1 ** 2;
  }
}
