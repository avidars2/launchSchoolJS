/** Problem
 * Write a function that takes one argument, a positive integer, 
 * and returns a string of alternating '1's and '0's, always starting with a '1'.
 * The length of the string should match the given integer.
 * 
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
 */

/** P
 * Input: Positive integer
 * Output: 1, 0 repeating, with a length of the integer
 * 
 * 1 is always first
 * Length of this repetition matches the length of the integer given
 * 
 * So if 4 is given, 1010
 * 6 101010
 * 5 10101
 * 
 * Even ends on 0, odd ends on 1
 * 
 * Mental model: Given a positive integer, create a function that prints out
 * 1, 0, repeating until it matches the length of the positive integer provided
 * 
 */

/** E
 * Input: 0
 * Output: ''
 * 
 * Input: 1
 * Output: 1
 * 
 * Input: 4
 * Output: 1010
 * 
 */

/** DA
 * Data structures: Number input, String output
 * 
 * Algorithm:
 * 1. Create a function that takes 1 argument, Num
 * 2. IF Num % 2 === 0 print '10'
 * - Num /2 amount of times
 * 3. IF Num % 2 === 1 %% Num !== 1 print '10'
 * - Num /2 rounded down amount of times and concat 1 at end

3 / 2 rounded down === 1

5 / 2 rounded down === 2

15 / 2 rounded down === 7

Test:
0 % 2 === 0
0 / 2 === 0
print '10' 0 times

3 % 2 === 1
3 / 2 rd === 1
print '10' 1 time, concat 1 at end === 101
*/

function stringy(num) {
  let copies = num / 2;
  if (num % 2 === 0) {
    return '10'.repeat(copies);
  } else if (num % 2 === 1) {
    return `${'10'.repeat(Math.floor(copies))}1`;
  }
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
console.log(stringy(0));
console.log(stringy(1));