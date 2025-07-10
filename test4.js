const object1 = {};

Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
});

object1.property1 = 77;
// Throws an error in strict mode

console.log(object1.property1);
// Expected output: 42
console.log(Object.getOwnPropertyNames(object1));

let arr = [1, 2]
arr[8] = 9;
console.log(arr);

console.log(Object.getOwnPropertyNames(arr));

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let bar = () => {
//       console.log(this.a);
//     let star = () => console.log(this.b);
//     star();
//     };
//     bar();

//   },
//   mar: function() {
//     let bob = {
//       bill: { jacob: {
//         a: () => console.log(this.a),
//     }
//   }
//   }
//     bob.bill.jacob.a();
//   }
// };

// obj.mar();
// obj.foo();        // => undefined undefined


Array.prototype.a = 5;

let obj = {
  a: 'hello',
  b: 'world',
  foo: function(arr) {
    arr.forEach((number) =>
      console.log(String(number) + ' ' + this.a + ' ' + this.b))
  },
};

let arr2 = [1, 2, 3];
obj.foo(arr2);

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined

// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     repeatThreeTimes(() => console.log('hello, ' + this.firstName + ' ' + this.lastName))
//   },
// };

// john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined

class hi {
  //Public class field
  hey = 5;
  constructor() {
    this.a = 1;
  }
  ho() {

  }

  get hay() {
    return 4;
  }
}

let greeting = new hi();
console.log(greeting.hey);
console.log(greeting.ho);
greeting.hay = 5;
console.log(greeting.hay);

let test = {
  apple: 'sauce',
  hi() {
    let a = () => {console.log(this.apple)};
    a();

    (() => {console.log(`Apple ${this.apple}`)})();
  },
}

test.hi();