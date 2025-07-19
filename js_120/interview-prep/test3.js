
//SNIPPET 4 (concept: execution context & `this`)

function calculateTip(bill) {
  return this.num * bill;
}

let tipRate = {
  num: 0.2,
};

let newTipRate = {
  num: 0.25,
};

console.log(calculateTip.call(tipRate, 200)); //? 40

let tip = calculateTip.bind(tipRate);
console.log(tip(100)); //? 20

console.log(tip.call(newTipRate, 100)); //? 20

// SNIPPET 2 (pseudo-classical pattern)
/*
What will the following code output and why? Try to answer without running the 
code.
*/
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function () {
    return this.swung;
  },
};

Object.getPrototypeOf(ninja).swingSword = function() {
  return this.swung;
}

console.log(ninja.swingSword());

/*IF there is a problem with the code, fix the issue*/

//Write a "scope-safe" constructor:
/*
Because constructors are functions, it's possible to invoke them without the `new` keyword. And, if there is no explicit return statement in your function, 
JS will just return `undefined` rather than throw an error. 

To avoid this confusion, it's possible to write "scope-safe" constructors such that even if the `new` keyword is omitted when it is called, 
a new object will be returned.

Write three examples of scope-safe constructors: one using `instanceof`, and one using `Object.create` OR `Object.setPrototypeOf`.
*/


function Dog(name) {
  //USING instanceof
  // if (this instanceof Dog) {
  //   this.name = name;
  // } else {
  //   return {
  //     name,
  //   }
  // }

  //USING Object.create
  // let obj = Object.create(Dog.prototype);
  // obj.name = name;
  // return obj;

  let obj = {};
  Object.setPrototypeOf(obj, Dog.prototype);
  obj.name = name;
  return obj;
}

let marlo = new Dog('Marlo');
let mylo = Dog('Mylo');

console.log(marlo, mylo);