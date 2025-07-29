{//1 What side effects are present in foo?
const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); //Side effect, mutating external array
  console.log(`popped ${value} from the array`); //SE: Logging to console
  return value + bar + baz; //Accessing global variable for return value
  //makes this impure as the return value depends on external state
}

foo(qux);
}

{//Which are pure functions?
function sum(a, b) {
  console.log(a + b);
  return a + b;
}

function sum(a, b) { //Pure
  a + b;
}

function sum(a, b) { //Pure function
  return a + b;
}

function sum(a, b) {
  return a + b + Math.random();
}

function sum(a, b) { //Pure
  return 3.1415;
}
}