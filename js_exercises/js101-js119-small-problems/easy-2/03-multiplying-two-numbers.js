/**Problems
 * 
 * Create a function that takes two arguments, multiplies them together, and returns the result.

console.log(multiply(5, 3) === 15); // logs true

 */

/** P
 * Input: Two numbers
 * Output: Product of those two numbers
 * 
 * Mental model:
 * Given two numbers passed through a function, multiply them together, and return the product.
 * 
 */

/**E
 * 
 * Input: -100, 0
 * Output: -0
 * 
 * Input: 5000, 2
 * Output: 10000
 * 
 * Input: 0, 0
 * Output: 0
 * 
 * Input: 1.1, 10
 * Output: 11
 * 
 */

/**DA
 * 
 * Data structures: Numbers as the input, and Number as the output
 * 
 * Algorithm:
 * 1. Create a function that has 2 parameters
 * 2. Multiply both parameters
 * 3. Return the result
 * 
 */

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(5000, 2));
console.log(multiply(0, 0));
console.log(multiply(1.1, 10));
console.log(multiply(-100, 0));