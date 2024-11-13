/**Problem
 * Build a program that logs when the user will retire and 
 * how many more years the user has to work until retirement.

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

*/

/**P
 * Input: User age, retirement age
 * Output: Current year, retirement year, years left to work
 * 
 * The input is a string from the user
 * The current year must be determined
 * 
 * Mental model:
 * Given a users age, as well as a retirement age, determine the current year, their retirement year, and the amount of years left
 * for them to work.
 * 
 */

/**E
 * 
 * Input: 0, 10
 * Output: It's 2024. You will retire in 2034. You have only 10 years of work to go!
 * 
 * 
 */

/**DA
 * Data structures: Strings
 * 
 * Algorithm:
 * 1. Get user age, and retirement age
 * 2. Use method to determine current year
 * 3. Subtract retirement age from current age
 * 4. Add remainder to current year
 * 5. Concatenate strings for outputs
 */

let year = new Date().getFullYear();

let rlSync = require('readline-sync');

let userAge = rlSync.question('What is your age? ');
let userRetireAge = rlSync.question('At what age would you like to retire? ');

let yearsRemaining = Number(userRetireAge) - Number(userAge);
let retirementYear = year + yearsRemaining;

console.log(`It's ${year}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsRemaining} years of work to go!`);
