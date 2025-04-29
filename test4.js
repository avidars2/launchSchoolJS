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
