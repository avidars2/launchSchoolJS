// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// };

// Rectangle.prototype.toString = function() {
//   return `[Rectangle ${this.length} x ${this.width}]`;
// };

// function Square(size) {
//   Rectangle.call(this, size, size);
// }

// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;

// Square.prototype.toString = function() {
//   return `[Square ${this.length} x ${this.width}]`;
// };


class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `[Rectangle ${this.length} x ${this.width}]`;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  toString() {
    return `[Square ${this.length} x ${this.width}]`;
  }
}

let sq = new Square(5);

console.log(sq.getArea());
console.log(sq.toString());

console.log(Object.getPrototypeOf(Rectangle) === Function.prototype);
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);