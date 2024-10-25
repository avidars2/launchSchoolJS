/**
 * #### PEDAC
| Objective | Step | Description|
| :--- | :---  | :-----      |
| Process the Problem | Understand the Problem | <ul><li>Identify expected input and output</li><li>Make the requirements explicit</li><li>Identify rules</li><li>Mental model of the problem (optional)</li></ul> |
| | Examples/Test Case | Validate understanding of the problem |
| | Data Structure | How we represent data that we will work with when converting the input to output. |
| | Algorithm | Steps for converting input to output |
| Code with Intent | Code | Implementation of Algorithm |
 */

//Problem

/**
 * Write a function that takes one integer argument, which may be positive, negative, or zero. 
 * This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.
 */

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/** P
 * Inputs/Outputs
 * 
 * Input: Positive, negative, or zero integer
 * Output: True/False
 * 
 * 
 * 2 => false
 * 5 => true
 * -17 => true
 * -8 => false
 * 
 * Only one integer is being passed as the input
 * Absolute value meaning the value of the number, negative removed
 * 
 * What happens if a decimal number is passed? => We're assuming no decimal numbers, only integers
 * 
 * Mental Model:
 * Given an integer, determine whether it's absolute value is odd. Return true if it is, otherwise return false.
 * 
 * 
 * 
 */

/** E
 * Input: -1000
 * 
 * Output: True
 * 
 * 
 * Input: 0
 * Output: False 
 */

/** D
 * 
 * Input: Number
 * 
 * Output: Boolean
 * 
 */

/** A
 * 
 *  * Mental Model:
 * Given an integer, determine whether it's absolute value is odd. Return true if it is, otherwise return false.
 * 
 * Algorithm:
 * 1. Declare a function with one parameter
 * 2. Check if the argument passed is negative
 * 3. If it is negative, convert it to positive (multiply it by '-1')
 * 4. Check if the number is odd
 * 5. If it is odd, return true, Else return false
 * 
 *
 * Test cases:
 * 
 * Input: -1000
 * Output: false
 * 
 * Check if argument passed is negative => Yes
 * If negative, convert to positive => -1000 becomes 1000
 * Check if number is odd => 1000 is not odd
 * If odd return true, else false => return false
 * 
 * Input: 0
 * Output: false
 * 
 * Check if negative => No
 * Check if odd => 0 is not odd
 * If odd return true, else false => return false
 * 
 * 
 * Input: -5
 * Output: true
 * 
 * Check if argument is negative => Yes
 * If negative, convert to positive => -5 becomes 5
 * Check if number is odd => 5 is odd
 * If odd return true, else fales => return true
*/

function isOdd(integer) {
  if (integer < 0) {
    integer *= -1;
  }

  if (integer % 2 === 1) {
    return true;
  } else return false;
}