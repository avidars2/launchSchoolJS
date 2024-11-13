/** Problem
 * Write a function that takes a non-empty string argument and returns the middle character(s) of the string. 
 * If the string has an odd length, you should return exactly one character. If the string has an even length, 
 * you should return exactly two characters.

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
 * 
 */

/** P
 * Input: Non-empty string
 * Output: Middle Character(s) of string
 * 
 * Odd length strings --> return one character
 * Even length string --> return two characters
 * 
 * Spaces are included as characters in this total
 * 
 * Mental model: Create a function which given a non-empty string, determine if it is even or odd length (including spaces),
 * and then return exactly 2 or 1 characters respectively.
 */

/** E
 * 
 * Input: 'a ra'
 * Output: ' r'
 * 
 * Input: 'b o b'
 * Output: 'o'
 * 
 * Input: 'b  b'
 * Output: 'b'
 * 
 * 
 */

/**DA
 * Datastructures: Input is a string
 * 
 * Algorithm:
 * 1. Create a function that takes 1 argument
 * 2. IF length of string % 2 === 0
 * 3. return string(string length / 2) - 1 AND string(string length / 2)
 * 4. IF length of string % 2 === 1
 * 5. return string(string length / 2 rounded down)
 * 
 */


function centerOf(string) {

  let middleCharacterIndex = (Math.floor(string.length / 2));

  if (string.length % 2 === 0) {
    return `${string[middleCharacterIndex - 1] + string[middleCharacterIndex]}`;
  } else {
    return string[middleCharacterIndex];
  }
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"