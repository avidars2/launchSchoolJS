//Potential Array.from implementation:

let arrayFrom = obj => {
  let len = obj.length;
  let returnArr = [];

  for (let idx = 0; idx < len; idx += 1) {
    returnArr.push(obj[idx]);
  }

  return returnArr;
};

arrayFrom({0: 'a', 1: 'b', 2: 'c', length: 3});
// => [ 'a', 'b', 'c' ]

let arrayObj = {0: 'a', 1: 'b', 2: 'c', length: 2}
let arrayObjs = {0: 'a', 1: 'b', 2: 'c'}

let newArr = Array.from(arrayObj);
console.log(newArr);

let newArrs = Array.from(arrayObjs);
console.log(newArrs);


let now = new Date();
console.log(now);
console.log(now.toString());

console.log(Object.getPrototypeOf('hi') === String.prototype);

let strStr = 'hi';
let strObj = new String('hi');

console.log(strStr.toUpperCase());
console.log(strObj.toUpperCase());
console.log(strStr);
console.log(strObj);

console.log(new String('hi').valueOf());

String(new String('hi'));

Number.prototype.increment = function() {
  return this.valueOf() + 1;
};

console.log(1['increment']());


let str = 'hello there';
let forEach = Array.prototype.forEach;
String.prototype.forEach = forEach;

str.forEach((char) => console.log(char));

// Array.prototype.forEach.call(str, (char) => console.log(char));
