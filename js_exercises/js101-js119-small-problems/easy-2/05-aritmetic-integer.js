/**Problem
 * 
 * Write a program that prompts the user for two positive integers, 
 * and then prints the results of the following operations on those two numbers: 
 * addition, subtraction, product, quotient, remainder, and power. 
 * Do not worry about validating the input.
 * 
 ==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
 */

/**
 * Input: 2 positive integers
 * Output: Addition, subtraction, product, quotient, remainder, and power of both integers
 * 
 * Implicits: First integer entered will be the left operand, second integer will be the right operand
 * Input does not need to be validated
 * Output is on separate lines
 * 
 * Mental model:
 * Given 2 integers, calculate a series of operations between the first entered and second entered integer,
 * and output the series of calculations with results on separate lines
 */

/** E
 * Input: 23, 17
 * Output: 23 + 17 = 40, etc.
 * 
 * Input: 0, 1
 * Output: 0 + 1 = 1, etc.
 * 
 * 
 * 
 */

/**DA
 * 
 * Data structures: Strings entered, converted to Number data types
 * 
 * Algorithm:
 * 1. GET first number, then second number from user
 * 2. Perform calculation with first number as first operand, and second number as second operand
 * 3. Append results to dictionary
 * 4. Log operation performed and results, concatenated into a string
 */

let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter the first number:\n'));
let number2 = Number(rlSync.question('Enter the second number:\n'));

let operationResults = {addition: '', subtraction: '', product: '', quotient: '',
  remainder: '',
  power: '',
};

operationResults.addition = `${number1} + ${number2} = ${number1 + number2}`;
operationResults.subtraction = `${number1} - ${number2} = ${number1 - number2}`;
operationResults.product = `${number1} * ${number2} = ${number1 * number2}`;
operationResults.quotient = `${number1} / ${number2} = ${number1 / number2}`;
operationResults.remainder = `${number1} % ${number2} = ${number1 % number2}`;
operationResults.power = `${number1} ** ${number2} = ${number1 ** number2}`;

for (let operations in operationResults) {
  console.log(operationResults[operations]);
}