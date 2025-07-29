//1
{
function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}
}

//2
{
function foo() {
  return {
    bar: () => {
      console.log("bar");
    },
    qux: (arg1) => {
      console.log("qux");
      console.log(arg1);
    },
    baz: (arg1, arg2) => {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}
}

//3
{
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = foo(1, 2, 3);
let bar = obj.bar;
let baz = obj.baz;
let qux = obj.qux;
}

//4
{
function foo([ one, , three ]) {
  return [
    three,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array);
// let [ bar, qux, baz ] = result;
let bar = result[0];
let qux = result[1];
let baz = result[2];
}

//5
{
function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(array[0], array[1], array[2]);
}

//6
{
function product() {
  let numbers = Array.from(arguments);
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
}
//7

{

const {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

}

//8
{
const obj = {
  first: "I am the first",
  second: "I am the second",
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

const first = obj.first;
const second = obj.second;
const rest = Object.assign({}, {third: obj.third}, {rest: obj.rest});
// const { first, second, ...rest } = obj;

// console.log(rest);
}
//9
{
const arr = [1, 2, 3];
const obj = { a: 'a', b: 'b', c: 'c' };

let [num1, num2, num3] = arr;
let {a, b, c} = obj;


}

//10
{
const arr = [1, 2, 3];

const [first, ...arr2] = arr;

console.log(first);
console.log(arr2);
}


//11
{
  const arr = [1, 2, 3];
  const [,second] = arr;
  console.log(second);  
}

//12
{
  const obj = { a: 'a', b: 'b', c: 'c' };
  const {c: tail, ...obj2} = obj;

  console.log(tail, obj2);
}

//13
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

//14
console.log(sum(1, 2, 3));
console.log(sum(...[4, 5, 6]));

//15
const arr = [1, 2, 3];

function prod(num1, num2) {
  return num1 * num2;
}

prod(...arr);
//Using the spread operator on 'arr' invokes prod with
//the elements of 'arr' "spread" as individual arguments

//16
let obj = {
  foo: 'foo',
  qux: 'qux',
  bar: 'bar',
};

let obj2 = {...obj};
let { ...obj3 } = obj;

console.log(obj2);
console.log(obj3);

/**
 * Line 7 is initializing the declared variable 'obj2' with
 * an object literal. The '...obj' syntax "spreads" a shallow copy of
 * the keys and values of 'obj' into the object literal
 * 
 * Line 8 initializes a variable 'obj3' with the 'rest' operator
 * which since it is the only variable created, it will take all of
 * the properties in 'obj' and shallow copy them to a new object literal
 * to initialize 'obj3'
 */

//17
function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  // missing code
  return {type: animalType, age, colors};
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]

//18

function str(first, middle1, middle2, middle3, last) {
  return {first, last, middle: [middle1, middle2, middle3].sort()};
}

let arr2 = [1, 2, 3, 4, 5];

let {first, middle, last} = str(...arr2);
console.log(first, middle, last);