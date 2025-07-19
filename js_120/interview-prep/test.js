"use strict";

let john = {
 firstName: "John",
 lastName: "Doe",
 greetings: function () {
  console.log("hello, " + this.firstName + " " + this.lastName);
 }.bind(this),
};
john.greetings();

//I believe the return value of bind is what 'greetings' gets set to
//this would refer to the global execution context
//so this would output 'hello undefined undefined;


class A {
  #password = 123;
  #unchangeablePassword = 9;
  static meep = 1;
  static hi() {
    return 'hey';
  }
  constructor(n) {
    this.n = n;
  }

  hello() {
    console.log(this);
    return 'hola';
  }

  printPass() {
    console.log(this.#password);
  }

  get pass() {
    return this.#unchangeablePassword;
  }

  set pass(secret) {
    this.#password = secret;
  }
}

class B extends A {
  constructor(n) {
    super(n);

    console.log(super.hello());
  }


}

let letter = new B('B');


letter.pass = 5;
letter.printPass();
console.log(letter.pass);

function testStatic(b) {
  this.a = 1;
  this.b = b;
  testStatic.arr.push(this);
}

testStatic.arr = [];
testStatic.print = function() {
  console.log(this.arr);
}.bind(testStatic);

let ab = new testStatic(5);
testStatic.print();

