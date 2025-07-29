//Question 1
// var foo = function() {
//   console.log("Bye");
// };

// function foo() {
//   console.log("Hello");
// }

// foo();

/**
 * The above will log 'Hello' to the console.
 * 
 * This is because although the variable 'foo' is declared at the top
 * 
 * When 'foo' is invoked, the function declaration 'foo' is right
 * before it and so 'foo' now refers to the function declaration.
 * 
 * 
 * But what actually happened was 'Bye' was logged.
 * 
 * And I think this is because the 'foo' declaration 
 * was hoisted to the top of the code, and the 'var foo' re-assignment
 * occurs "After"
 */

//Question 2

// for (var index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     var foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo);
// console.log(index);

/**
 * 
 * undefined
 * hello
 * Bye
 * 2
 * 
 * Because 'foo' is declared with 'var', it is function-scoped
 * and hoisted to the top of the function-scope, which would be
 * the global level or wrapper function since we are using nodejs.
 * 
 * So when 'foo' is first used as an argument for the log method,
 * it evaluates to undefined because 'foo' is hoisted to the top of the 
 * function-scope and set to undefined.
 * 
 * During the first iteration of the for loop, the index variable starts
 * at 0, so the conditional 'index === 0' evaluates to true which assignes
 * 'foo' to 'Hello'.
 * 
 * On the next iteration, index is incremented by 1 to 1, 
 * and 'foo' is logged again, with 'Hello' being output to the console.
 * The conditional evaluates to false so the code in the else 'clause' is
 * executed which re-assigns 'foo' to "Bye".
 * 
 * However when index is incremented by 1, index === 2 but is no longer
 * lower than 2 so the loop breaks.
 * 
 * 2 additional 'console.log' statements are written.
 * 
 * Because 'foo' is function scoped and the loop is at the top level,
 * it is accessible globally.
 * 
 * So 'foo' evaluates to "Bye" and is logged
 * 
 * Lastly since index is declared with 'var', it is also function scoped
 * and available globally. It was incremented to 2 before the loop breaks so
 * it evaluates to 2 and that is what s logged to the console.
 * 
 * 
 * 
 */

//Question 3

// bar();

// function bar() {
//   console.log("foo!");
// };

//Question 4

// var bar = 82;
// function foo() {
//   var bar = bar - 42;
//   console.log(bar);
// }

// foo();

/**
 * on line 1, var bar is initialized to 82
 * 
 * Function declaration 'foo' is defined on line 2 and is also 
 * hoisted
 * 
 * 'bar' within 'foo' is function scoped due to the 'var' declaration
 * and is initialized to 'bar - 42'. Because 'bar' is set to 82 from the 
 * global scoped 'bar', the evaluation of 82-42 is assigned to the inner
 * scoped 'bar'
 * 
 * So 40 is output
 * 
 * But that was wrong? So I guess the 'bar' in 'bar - 42' evaluated to
 * undefined.
 * 
 * The variable declaration of 'bar' defined 'bar' and hoisted it while setting
 * it to 'undefined'. Then the initializaiton of 'bar - 42' evaluated the expression
 * as 'undefined - 42' which evaluates to NaN
 */

//Question 5

// function foo(condition) {
//   let bar;
//   console.log(bar);

//   let qux = 0.5772;

//   if (condition) {
//     qux = 3.1415;
//     console.log(qux);
//   } else {
//     bar = 24;

//     let xyzzy = function() {
//       let qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);

//Question 6

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

let Image;
var catImage;
var pudding;


Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

console.log(Image)


Image = class {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);