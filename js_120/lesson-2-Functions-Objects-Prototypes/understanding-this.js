let empowerContainer = {
  name: "avi",
  that: console.log(this),
  those: () => console.log(this), //function called, containers activated, arrow expression container doesn't activate, this hits global wall
  them: function () { //function called, containers activated, function expression container activated, this hits function wall and is redirected to object wall
    console.log(this);
  }

}


let secondContainer = {
  container: {
    f: () => console.log(this),
  }
}

secondContainer.container.f();


function fly() {
  this.hi = 'hello';
  console.log(this);
}

fly();

let x = new fly();
// console.log(x);

// console.log(this);

// empowerContainer.those();
// empowerContainer.them();

// let empoweredFly = fly.bind(empowerContainer);
// empoweredFly();

/**
 * 'this' when called in a function declaration
 */

/**
 * Two rules: 
 * --Methods have 'this' bind to the object it is in when the function is being executed
 * --Functions have 'this' bind to the global object when the function is being executed
 * 'This' refers to the execution context/object calling the function
 * Arrow functions don't attach to an object for it's execution context so 'this' 
 * 
 * 'This' in an arrow function doesn't attach to an object
 * 
 * 'This' in a function expression attaches to the object the function is called in
 * 
 * Constructor calls create a new object {}, and the function is called within that new object
 * As a result, 'this' binds to that new object when setting properties
 * 
 */