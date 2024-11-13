/**Problem
 * Create a simple tip calculator. 
 * The program should prompt for a bill amount and a tip rate. 
 * The program must compute the tip, and then log both the tip and the 
 * total amount of the bill to the console. 
 * You can ignore input validation and assume that the user will enter numbers.
 * 
 * Example:
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
 */

/** P
 * 
 * Input: Bill amount, tip percentage
 * Output: Tip, Total
 * 
 * 500
 * 10
 * 
 * $50.00
 * $550.00
 * 
 * - Output will be rounded to 2 zeroes (toFixed(2))
 * - A dollar sign will be part of the output
 * - The input will only be numbers
 * - Allow room for decimal numbers
 * 
 * What if negatives or zeroes are entered? That is okay, 
 * calculate like a normal calculator
 * 
 * 
 * Mental model:
 * Get input from the user on the bill amount and tip percentage.
 * With these values, calculate the tip amount and new total amount owed.
 * Finally, print these values in dollar format.
 * 
 * 
 */

/** E
 * 
 * Inputs:
 * Bill: 10.50
 * Tip: 5.5
 * 
 * Output:
 * Tip is $0.58
 * Total is: $11.08
 * 
 * Inputs:
 * Bill: 0
 * Tip: 10
 * 
 * Output:
 * Tip is $0.00
 * Total is: $0.00
 * 
 * 
 * Inputs:
 * Bill: 10
 * Tip: -10
 * 
 * Output:
 * Tip is: -$1.00
 * Total is: $9.00
 */

/**DA
 * Data structures
 * String input converted to numbers for input
 * 
 * Algorithm
 * 
 * 1. Get the bill and tip % from user
 * 2. Convert amount to Numbers
 * 3. SET tip_percentage to Divide tip % value by 100
 * 4. SET tip_amount to bill multiplied by tip_percentage
 * 5. SET total to bill plus tip_amount
 * 6. Convert values to 2 decimal places
 * 7. Print values to console with dollar signs appended
 * 
 */

let rlSync = require('readline-sync');

let billTotal = Number(rlSync.question('What is the bill? '));
let tipPercentage = Number(rlSync.question('What is the tip percentage? '));

let tipDecimal = tipPercentage / 100;

let tipAmount = billTotal * tipDecimal;
let newBillTotal = tipAmount + billTotal;
tipAmount = tipAmount.toFixed(2);
newBillTotal = newBillTotal.toFixed(2);

console.log(`The tip is $${tipAmount}`);
console.log(`The total is $${newBillTotal}`);