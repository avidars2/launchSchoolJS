/** Problem
 * Write a function that takes a number as an argument. 
 * If the argument is a positive number, return the negative of that number. 
 * If the argument is a negative number, return it as-is.

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
 */

/** P
 * 
 * Input: Negative or positive Number
 * Output: Negative Number
 * 
 * Function, Number as argument.
 * 0 must be output as negative 0 (-0)
 * 
 * Mental model:
 * Create a function which given a Number argument, returns the negative
 * version of the number, including 0.
 * 
 */

/** E
 * 
 * Input: 0
 * Output: -0
 * 
 * Input: 5
 * Output: -5
 * 
 * Input: -5
 * Output: -5
 * 
 * 
 */

/**DA
 * 
 * Data structure: Number input, Number output
 * 
 * Algorithm:
 * 1. Create a function with 1 parameter
 * 2. AbsoluteNumber = Absolute value of parameter
 * 3. Multiply AbsoluteNumber by -1
 * 4. Return value
 */

function negative(num) {
  return num < 0 ? num : (Math.abs(num) * -1);
}

console.log(negative(5))     // -5
console.log(negative(-3));    // -3
console.log(negative(0))     // -0

{
  let zero = -0
  if (1 / zero < 0) {
    console.log('0 is negative');
  }


}