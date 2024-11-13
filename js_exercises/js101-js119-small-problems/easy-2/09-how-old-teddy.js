/**Problem
 * Build a program that randomly generates Teddy's age, 
 * and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).
 * 
Teddy is 69 years old!
 */

/** P
 * Input: None
 * Output: Teddy is x years old!
 * 
 * 
 * The console will log a sentence pre-formed, with a random age between and including 20-120
 * 
 * Mental model:
 * Randomly generate a Number between 20 and 120, and use that number as an age to log
 * in a pre-constructed sentence as Teddy's age.
 */

/**E
 * 
 * Output: Teddy is 20 years old!
 * 
 * Output: Teddy is 120 years old!
 * 
 * Output: Teddy is 50 years old!
 * 
 */

/** DA
 * 
 * Algorithm:
 * 1. Generate a number between 0 and 100
 * 2. Add 20 to the number
 * 3. Output number concatenated into Teddy's age string
 * 
 */

let age = Math.round((Math.random() * 100)) + 20;

console.log(`Teddy is ${age} years old!`);


function randomBetween(age1, age2) {
  let minAge = age1 > age2 ? age2 : age1
  let maxAge = minAge === age1 ? age2 : age1;

  return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
}

console.log(`Teddy is ${randomBetween(120, 20)} years old!`);