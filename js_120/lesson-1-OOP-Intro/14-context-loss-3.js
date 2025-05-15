function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    repeatThreeTimes(() => {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    });
  },
};

john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined

//Arrow function used instead causes it to work properly since
//surrounding context of function 'greetings' references is used

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this); //Added 'this' to set the execution context of the callback
  },
};

obj.foo();

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined

let obj2 = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach((number) => {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }); //Changed the function to an arrow function to use the surrounding context
  },
};

obj2.foo();