{
let a = {foo: 1, bar: 2};
let b = Object.create(a); //b will gain an internal prototype 'a'

console.log(a); //Defined object will appear
console.log(b); //Empty object will appear

console.log(a.foo);
console.log(b.foo);
console.log(Object.getOwnPropertyNames(b));
let c = Object.getPrototypeOf(b);
a.hi = 'bye'; //a now has 'hi' property
console.log(c); //c reflects this change as it points to a's reference


let newPrototype = {hi: 10, bye: 20};
Object.setPrototypeOf(b, newPrototype); //Changing 'b' prototype to newPrototype
console.log(b); //{}
console.log(b.hi); //10
console.log(b.foo); //Prototype has changed so this will evaluate to undefined
}
/**
 * 
 */
{
function Foo() {
  this.bar = "qux"
}

Foo.prototype.baz = function() {};
let foo = new Foo();
console.log(foo.propertyIsEnumerable('bar'));                        // true
console.log(Object.getPrototypeOf(foo).propertyIsEnumerable('baz')); // true
console.log(Foo.prototype);

let arr = [];

arr.forEach.hi = 5;

Array.prototype.forEach.hello = 7;

console.log(arr.forEach);
}

{
  let a = {
    foo: 1,
  };
  
  let b = {
    bar: 2,
  };
  
  Object.setPrototypeOf(b, a);
  
  let c = Object.create(b);
  console.log(c.foo); // => 1
  c.foo = 42;
  console.log(c.foo); // => 42
  console.log(a.foo); // => 1
}

{
let x = {a: 1};
let y = {b: 2};
let z = {c: 3};
Object.setPrototypeOf(y, x);

console.log(Object.getPrototypeOf(y)); //Evaluates to {a: 1}
console.log(x.isPrototypeOf(y)); //True because x is the prototype of 'y'
console.log(Object.prototype.isPrototypeOf(y)); //Returns true regardless of x y or z since it's the default

console.log(y.a); //evaluates to 1 since property is delegated by x
console.log(y.hasOwnProperty('a')); //false since y inherits 'a' from x

console.log(Object.keys(y));
}

{
let a = {g: 1}
console.log(a.hasOwnProperty('g'));
Object.setPrototypeOf(a, null);
console.log(Object.getPrototypeOf(a)); //null
// console.log(a.hasOwnProperty('g')); //Will throw an error since the prototype was set to null

}