/**Problem
 * 
 * Write a program that will ask for user's name. 
 * The program will then greet the user. If the user writes "name!" 
 * then the computer yells back to the user.
 * 
 What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
 * 
 */

/**P
 * 
 * Inputs: A string name, with or without an exclamation point at the end
 * Outputs: A string, potentially capitalized
 * 
 * If an exclamation point is added to the end, then the return string is completely capitalized
 * Additionally, a sentence is added.
 * And if there is no exclamation, a greeting is given.
 * 
 * It looks like the exclamation point is at the end; meaning the 
 * code would have to check for exclamation points at the end, and only at the end
 * 
 * Mental Model:
 * 
 * Given an input, based on the last character being an exclamation point, print a greeting, or print an
 * exclaimed, uppercase greeting with an additional question on the same line.
 */

/**E
 * 
 * Input: !
 * Output: HELLO. WHY ARE WE SCREAMING?
 * 
 * Input: Bob
 * Output: Hello Bob.
 * 
 * Input: !Bob
 * Output: Hello !Bob.
 * 
 * Input: Bob!
 * Output: HELLO BOB. WHY ARE WE SCREAMING?
 * 
 */

/**DA
 * 
 * Data structure: Input will be a string, the output will be a string logged to the console
 * 
 * Algorithm:
 * 1. GET input from user requesting their name
 * 2. Check if input has an exclamation point as the last character
 * 3. If it does, return 'HELLO {capitalized name without '!'}. WHY ARE WE SCREAMING?'
 * 4. ELSE return 'Hello name.
 */

let rlSync = require('readline-sync');

let userName = rlSync.question('What is your name? ');

if (userName.charAt((userName.length - 1)) === '!') {
  console.log(`HELLO ${userName.split('!')[0]}. WHY ARE WE SCREAMING?`);
} else console.log(`Hello ${userName}.`);

{//Better solution (more accurate)
  if ((userName[userName.length -1] === "!")) {
    userName = userName.slice(0, -1);
    console.log(`HELLO ${userName}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${userName}`);
  }

}