//Problem

/**
Log all odd numbers from 1 to 99, inclusive, to the console, 
with each number on a separate line.

 */

/**P
 * 
 * Inputs/Outputs
 * 
 * Inputs: None
 * Outputs: All odd numbers from 1 to 99, on a separate line
 * 
 * Log all odd numbers inclusive, from 1 to 99
 * 
 * So 1, 3, 5, etc., 99
 * 
 * Or more like:
 * 
 * 1
 * 3
 * 5
 * etc.
 * 99
 * 
 * Mental model:
 * 
 * Output to the console the odd numbers from and including 1 to (and including) 99
 * with each output on a new line.
 * 
 */

/**E
 * 
 * Output:
 * 1
 * 3
 * 5
 * 7
 * 9
 * etc.
 * 99
 * 
 */

/**D
 * 
 * Output will be in the form of a Number
 * 
 */

/**A
 * 
 * 1. Have a loop:
 * 2. Log each number of the loop, starting at 1 and increment by 2
 * 3. Break loop once 99 is logged
 * 
 * 
 * Test:
 * 
 * 1 (output starts)
 * 3 (+2)
 * 5 (+2)
 * 7 (+2)
 * etc.
 * 99 (output stops)
 * 
 */


//Code:
{
// for (let num = 1; num <= 99; num += 2) {
//   console.log(num);
// }
}

//Further explortaion:

/**PEDA
 * 
 * Create the same loop, with the ability to specifiy the odd numbers
 * 
 * Inputs: Starting number, Ending number
 * Output: Starting Number, odd numbers in between, ending number
 * 
 * What if the starting number is even? => Add one
 * What if the ending number is even? => Don't log it. The user is specifying the limits of the odd numbers
 * 
 * Given a start and end number, log all odd numbers including and between the 
 * values. Ignore logging even start and end
 * 
 * 
 * 
 * Input: -5, 0
 * Output: -5, -3, -1
 * 
 * Input: 2, 4
 * Output: 3
 * 
 * Input: 1, 7
 * Output: 1, 3, 5, 7
 * 
 * Input: -3, 3
 * Output: -3, -1, 1, 3
 * 
 * Input: 3, 3
 * Output: 3
 * 
 * Input: 4, 4
 * Output: no output
 * 
 * Data Structure
 * 
 * Input: Array
 * Output: Number
 * 
 * Algorithm:
 * 
 * 1. Function that has 1 parameter
 * 2. If start number is even, add 1 (Odd check: Math.abs(num) % 2 === 1)
 * 3. If new number is above end number, stop
 * 4. While number is equal or below end number, log number
 * 5. Then increment by 2
 * 6. Once number is end number, break loop
 */

function logEvenRange(range) {
  let startNum = range[0];
  let endNum = range[1];

  if (Math.abs(startNum) % 2 === 0) {
    startNum += 1;
  }

  for (startNum; startNum <= endNum; startNum += 2) {
    console.log(startNum);
  }

  return;
}

console.log('Test');
logEvenRange([-5, 0]);
console.log('Test');
logEvenRange([2, 4]);
console.log('Test');
logEvenRange([1, 7]);
console.log('Test');
logEvenRange([-3, 3]);
console.log('Test');
logEvenRange([3, 3]);
console.log('Test');
logEvenRange([4, 4]);