/**
 * Write a function that returns true if its integer argument is palindromic, or false otherwise. 
 * A palindromic number reads the same forwards and backwards.
 * 
 * isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
 */

/**
 *Input: Number
 *Output: Boolean true or false

 Given a number, evaluate if the number is a palindrome, if so return true,
 otherwise return false. A palindrome number reads the same
 forward and back
 * 
 * Explicits:
 * 1. Write a function
 * 2. The argument will be an integer
 * 3. Return boolean
 * 4. Number data types are being evaluated
 * 5. Input is an integer, so decimals are irrelevant here
 * 
 * Implicits:
 * 1. Number will likely have to be converted to a string
 * 2. Single digit numbers are palindrome, as well as repeating double digits
 *
 * 
 * 1 --> true
 * 22 --> true
 * 322 --> false
 * 0 --> true
 * 
 * Data structures:
 * 1. Numbers in, boolean out
 * 
 * Algorithm:
 * 1. Take number argument
 * 2. Evaluate if a palindrome number
 * --Convert Number to string
 * --Reverse String
 * --Evaluate if reverse is equal to original
 * 3. Return boolean based on #2
 * 
 */

 function isPalindromicNumber(num) {
  console.log(num, `${num}` === `${num}`.split('').reverse().join(''));
  return (`${num}` === `${num}`.split('').reverse().join(''));
 }



isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(0o5);            // true
