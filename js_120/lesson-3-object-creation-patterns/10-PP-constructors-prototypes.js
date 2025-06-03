problem1();
problem2();

function problem1() {
/**1
 * What does the following code log to the console? Try to answer without running the code. 
 * Can you explain why the code produces the output it does?
 */

let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);

//Outputs NaN
/**
 * This is because the area method is invoked as a method of
 * RECTANGLE which leads the execution context to be the
 * RECTANGLE object, therefore 'this' is bound to RECTANGLE
 * which does not have a width/height property, and so
 * undefined * undefined is evaluated which evaluates to NaN
 */
}

function problem2 () {
/** 2
 * Fix: 2 solutions below:
 * Either call the method while passing the execution context
 * Or assign the function to the perimeter property and invoke it
 * as a method of the instance
 */

let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter;
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter());
}


function problem3() {;

/**
 * Write a constructor function called Circle that takes a 
 * radius as an argument. You should be able to call an area 
 * method on any objects created by the constructor to get the 
 * circle's area. Test your implementation with the following 
 * code:

 */

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2);
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area'));// => false
}

function problem4() {;
/**What will code log and why? */
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());

/**
 * This code will true
 * 
 * This is because when swingSword is invoked by the
 * 'nina' instance, JS will look for the method on the instance
 * and when not found, it will look up the prototype chain and
 * find the method on the constructors function prototype.
 * 
 * The function prototype of the constructor was automatically
 * set as the object prototype of the instance by javascript.
 * 
 * This object is referenced by the instance's [[prototype]]
 * and when it is later mutated, the instance is able to
 * access the added method.
 * 
 * The method is invoked with the execution context set to the
 * instance object as 'ninja' called the method, so the 'this'
 * in the swingSword method refers to the instance and will access
 * the 'swung' property of 'ninja'; it evaluates to true and is
 * returned which the log method of console then logs.
 * 
 * 
 */
}



function problem5() {

/**
 * What will the code output and why?
 */

function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());

/**
 * The code will output a TypeError complaining that
 * ninja.swingSword is not a function.
 * This is because swingSword is not being added to the same
 * object which the ninja instanace has it's object prototype
 * set to. This is because Ninja.prototype was re-assigned
 * rather than the object it points to mutated. As a result,
 * a new object was created with the swingSword method.
 * 
 * So ninja still has it's object prototype pointing to an
 * object without the new method, and so when it tries to
 * invoke swingSword, JavaScript can't find the method along
 * the prototype chain and throws an error
 * 
 */

}

function problem6() {

/**
 * Implement the method described in the comments below:
 */

function Ninja() {
  this.swung = false;
}

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`
}

function problem7() {
/**
 * In this problem, we'll ask you to create a new instance of an 
 * object, without having direct access to the constructor 
 * function:
 */

let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

let ninjaB = new ninjaA.constructor();

// create a `ninjaB` object here; don't change anything else

console.log(ninjaA.constructor === ninjaB.constructor) // => true
}

function problem8() {

function User(first, last) {
  if (!(this.constructor === User)) {
    return new User(first, last);
    }

    this.name = `${first} ${last}`;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe

}