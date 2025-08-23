/**
Write a program to determine whether a triangle is equilateral, isosceles, 
or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has exactly two sides of the same length.

A scalene triangle has all sides of different lengths.

E: Determine whether a triangle is equilaterla, isosceles, o scalene

I:
1. Sides of triangle get passed as 3 arguments to Triangle instance
2. Exported 'Triangle' must be a class/constructor
3. Should have a 'kind' method which returns the type of triangle
4. Throws an error if:
---A side is less than or equal to 0
---Sum of any two sides is less than or equal to the last side
5. The error is thrown during instantiation
6. Sides can be non-integers as well


 */
class Triangle {
  static invalidSide = (number) => {
    if (number <= 0) return true;
    if (typeof number !== 'number') return true;
  }
  static invalidSides = (sidesArr) => {
    if (sidesArr[0] + sidesArr[1] <= sidesArr[2]) return true;
    if (sidesArr[1] + sidesArr[2] <= sidesArr[0]) return true;
    if (sidesArr[2] + sidesArr[0] <= sidesArr[1]) return true;
    return false;
    
  }
  constructor(side1, side2, side3) {
    if (Triangle.invalidSide(side1) || Triangle.invalidSide(side2) ||
    Triangle.invalidSide(side3)) throw new Error('No side may be 0 or lower');
    if (Triangle.invalidSides([side1, side2, side3])) throw new Error('Triangle inequality');

    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    //Verify sides are valid
    //If invalid, throw an error

  }

  kind() {
    //return the type of triangle this is
    if (this.side1 === this.side2 && this.side2 === this.side3) return 'equilateral';
    if ((this.side1 === this.side2 && this.side2 !== this.side3) ||
        (this.side2 === this.side3 && this.side3 !== this.side1) ||
        (this.side3 === this.side1 && this.side1 !== this.side2)
    ) return 'isosceles';

    return 'scalene';

  }

}

// let triangle = new Triangle(10,10,10);

// console.log(triangle.kind());
module.exports = { Triangle }