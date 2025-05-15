
function repeatThreeTimes(func) {
  // console.log(this);
  func(); // can't use func.call(john); john is out of scope
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  let bill = {
    firstName: 'hi',
    x: repeatThreeTimes(john.greetings), //This is not being called as a method here. It is calling the function and the return value 'undefined' is x
  }

  repeatThreeTimes(john.greetings); // Strips context
}

foo();


let x = [1, 2, 3];
let y = {
  a: [4, 5, 6]
};

let z = function (num, idx) {
  console.log(num + this.a[idx]);
}
x.forEach(z, y);