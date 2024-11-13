/**
 * Problem
 * 
 * Write a program that asks the user to enter an integer greater than 0,
 *  then asks whether the user wants to determine the sum or the product 
 * of all numbers between 1 and the entered integer, inclusive.
 * Example 1 : 
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

* Example 2:
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

/**P
 * Inputs:
 * Integer from user
 * Sum or Product
 * 
 * Output: Sum or product of integers between 1 and entered integer
 * 
 * 
 * -Inputs need to be validated as a number & above 0 & is an integer
 * -Inputs need to be validated as either 's' or 'p'
 * -Output is adding 1 + etc.. + integer entered
 * -Output for product is multipling 1 * etc.. * integer entered
 * -Calculation will be from 1 to the entered number, and will need to include 1
 * 
 * Clarifying questions:
 * - What if 1 is entered? Then output should be 1. This means 1 can't be added twice
 * - So I want to be able to enter an integer, validate the output, enter s or p,
 * and then perform the relevant operation on the integers between 1 and int inclusive
 * 
 * 
 * Mental model:
 * Take and validate input from the user for an integer as well as 's' or 'p'.
 * Using the input, perform the relevant mathematical operation on all integers
 * inclusive and between 1 and the entered integer. Then print the operation,
 * range, and result to the console.
 * 
 * 
*/

/**E
 * 
 * Input: 6, s
 * Output: 21
 * 
 * Input: 6, p
 * Output: 720
 * 
 * Input: 1, s
 * Output: 1
 * 
 * Input: 1, p
 * Output: 1
 */

/**DA
 * Data structures: Strings/Numbers for input
 * 
 * Algorithm:
 * 
 * 1. GET input from user requesting an integer
 * 2. Validate input is an integer above 0
 * 3. GET input from user requesting 's' or 'p'
 * 4. Validate input is either letter
 * 5. Based on input, either multiply or add the following step
 * 6. Starting with 1, For the next number between 1 and the entered integer
 * 7. Add/multiply the number to 1
 * 8. Save the result to a variable
 * 9. For each number between the result and the entered integer..
 * Add/multiply, then save to the result until operation perfored on entered integer
 * 10. Print result and operation performed to console
 */

let rlSync = require('readline-sync');

let integer = Number(rlSync.question('Please enter an integer greater than 0: '));

while ((integer < 1) && ((integer % 1) != 0)) {
  integer = Number(rlSync.question('Error. Please enter a numeric integer greater than 0: '));
}

let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

while ((operation != 's') && (operation != 'p')) {
  operation = rlSync.question('Error. Enter either "s"  or "p" . ');
}

let currentValue = (operation === 's' ? 0 : 1);

for (let currentInteger = 1; integer >= currentInteger; currentInteger++) {
  if (operation === 's') {
    currentValue += currentInteger
  } else {
    currentValue *= currentInteger;
  }  
}

console.log(`The ${operation === 's' ? 'sum' : 'product'
} of the integers between 1 and ${integer} is ${currentValue}.`);