class Cat {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  speak() {
    console.log(
      `Meow. I am ${this.name}. ` +
      `I am a ${this.age}-year-old ${this.color} cat.`
    );
  }

}

let cocoa = new Cat("Cocoa", "black", 5);
let leo = new Cat("Leo", "orange", 3);

cocoa.speak();
// Meow. I am Cocoa. I am a 5-year-old black cat.

leo.speak();
// Meow. I am Leo. I am a 3-year-old orange cat.

console.log(cocoa);
// Cat { name: 'Cocoa', color: 'black', age: 5 }

console.log(cocoa instanceof Cat);
// true


class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
  beep(hi, hey) {
    console.log(hi, hey);
  }
}

const myRectangle = new Rectangle(10, 5);
console.log(myRectangle.area());        // 50

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    // this.side = side;
  }
}

const mySquare = new Square(6);
console.log(mySquare.area());           // 36
// console.log(mySquare.side);             // 6
console.log(Object.keys(mySquare));             // 6


class Parent {
  constructor(name='parent') {
    this.name = name;
  }
  whatMethod() {
    console.log(`In the ${this.name} method`, this);
  }
  whichMethod() {
    console.log('Which method?')
  }
}

class Child extends Parent {
  constructor(name) {
    super(name);
    this.name = 'meep';
  }
  whatMethod() {
    console.log('In the child method');
    super.whatMethod(); // <-- calling `whatMethod` in `Parent` class.
    super.whichMethod();
    console.log('Back in the child method');
  }
}

let parent = new Parent();
parent.whatMethod();
let child = new Child('child');
child.whatMethod();
// In the child method
// In the parent method
// Back in the child method