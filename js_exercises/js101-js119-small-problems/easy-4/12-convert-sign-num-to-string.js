// import { integerToString } from "./11-convert-num-to-string";

let {integerToString} = require('./11-convert-num-to-string');


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");

function signedIntegerToString(num) {
  let numSign = num < 0 ? '-' : '+'
  num = numSign === '-' ? num * -1 : num;

  if (num === 0) {
    numSign = (1 / num) < 0 ? '-' : '';
  }

  return (numSign + integerToString(num));

}

/**
 * I: Number with or without negative sign
 * O: True/false
 * 
 * -1 --> true
 * -212 --> true
 * -0 --> true
 * 0 --> false
 * 24 --> false
 * 
 * if < 0 --> true
 * 
 */