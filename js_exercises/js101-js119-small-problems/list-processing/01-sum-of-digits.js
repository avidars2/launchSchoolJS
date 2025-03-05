/**
 * Write a function that takes one argument, a positive integer, 
 * and returns the sum of its digits. 
 * Do this without using for, while, or do...while loops - 
 * instead, use a series of method calls to perform the sum.
 */

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

/**
 * I: Positive integer
 * O: Sum of digits
 * Write a function that takes one argument, a positive integer, and returns the sum of the digits.
 * Don't use a for loop, while or do...while loop.
 * Use a series of method calls
 * 
 * 
 * Explicits:
 * 1. Function takes 1 argument
 * 2. Argument will always be a positive integer
 * 3. For, while, do..while loops are disallowed
 * 4. Method calls should be used
 * 
 * Implicits:
 * 1. The number will need to be coerced into a string in order to use iterative
 * methods
 * 
 * String(arg).split('').reduce((total, num) => Number(num) + total, 0)
 * 
 * 1. What does a series of method calls to perform the sum look like?
 * --Does it have to be all at once?
 * --Can variables be used?
 * 
 * 23 --> 2 + 3 --> 5
 * 105 --> 15
 * 
 */

/**
 * Data structures:
 * Number --> String --> array --> iterate over array to get each stringified number
 * Operate on stringified number
 * 
 * Alg:
 * 1. Convert single argument to string
 * 2. Split string into individual characters to an array
 * 3. Iterate over array,
 * --Coerce elements into Number and add to a 'total'
 * 4. return number total
 */

function sum(num) {
  return String(num).split('').reduce((total, num) => total + Number(num), 0);
}

