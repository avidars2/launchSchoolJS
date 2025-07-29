//1
//1, 2, 3, 4. Variable being enclosed is in global scope
//All closures of variables here envelope the global variable

//2
//1, 1, 1, 1
//Declaring 'counter' within the body of the inner function
//and initializing it to 0 will keep creating a new variable
//and incrementing it by 1

//3
//1, 2, 1, 2
//2 counter variables are created and enclosed per
//invocation of makeCounter
//There are 2 separate closures which involve this variable
//Which independently get incremented.

//4 (same answer as 3 essentially)
//1, 2, 1, 2
//2 counter variables are created and enclosed per
//invocation of makeCounter
//There are 2 separate closures which involve this variable
//Which independently get incremented.

//5

function makeMultipleLister(num) {
  return function lister() {
    for (let integer = num; integer < 100; integer += num) {
      console.log(integer);
    }
  }
}

let lister = makeMultipleLister(17);
// lister();

//6

function makeTotal() {
  let total = 0;
  let add = (num) => {total += num; console.log(total)};
  let sub = (num) => {total -= num; console.log(total)};
  return [add, sub];
}

let [add, subtract] = makeTotal();
// add(1);       // 1
// add(42);      // 43
// subtract(39); // 4
// add(6);       // 10

//7
//150 is logged
//Each invocation of bar increments 'prod' by the product of 'prod * factor), with factor being the
//argument passed to the returned function
//This return value is used to increment 'result'

//8

function later(func, arg) {
  return function invokeLater() {
    return func(arg);
  };
}
const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

//9

function later2(func, arg) {
  return function invokeLater(time) {
    return func(arg, time);
  }
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!


//10

function bind(obj, func) {
"use strict";
/**
 * Given an object and a function
 * 
 * Bind the execution context of the function using closures
 * return a new function which is permanently invoked with the
 * object as the execution context
 */
  
  return function(...arg) {
    func.apply(obj, arg);
  }

}


let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }