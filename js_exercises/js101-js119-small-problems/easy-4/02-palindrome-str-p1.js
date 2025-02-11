/**
 * Write a function that returns true if the string passed as an argument is a palindrome,
 *  or false otherwise. A palindrome reads the same forwards and backwards. 
 * For this problem, the case matters and all characters matter.
 * 
 * isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
 */

/**P
 * Input: String
 * Output: Boolean true or false
 * 
 * Given a string, if the string is determined to be a palindrome, return true, false otherwise.
 * Palindromes are strings that read the same forwards and backwards, both in case and all characters
 * 
 * Explicit requirements/Observations/Rules:
 * 1. The case of the characters matter
 * 2. Every character matters
 * 3. Return true if the string passed is a palindrome
 * 4. A string is what is taken as the input
 * 5. A palindrome reads the same, forward or backwards
 * 
 * Implicit requirements/observations/rules:
 * 1. Numbers are included in this as well
 * 2. Spaces are included in considering if a String is a palindrome
 * 
 * Questions:
 * 1. Are we finding multiple palindromes, or evaluating the entire string? --> the entire string
 * 2. What about symbols? --> IT seems likes symbols also count given that numbers count
 * 
 * Ideas:
 * 1. Strict equality between strings reversed
 * 
 * madam --> true
 * Madam --> false
 * madam i'm adam --> false //even though removing the spaces and punctuation would make this
 * //a palindrome, it does not count due to those symbols/spaces
 * 353 --> true
 * 
 * Data structures:
 * 1. String in put, boolean output
 * 
 * 'madam' --> function --> true
 * 'madam' gets evaluated, a conditional is used and could be returned
 * 
 * madam --> true
 * Madam --> false?
 * 
 * Algorithm:
 * 1. Take input string as argument for function
 * 2. Evaluate if string is a palindrome
 * 3. Return boolean based on #2
 * 
 * Step 2 further:
 * Evaluate if the given string is a palindrome
 * 1. All case matters
 * 2. All characters matter
 * 3. Symbols and numbers count for this
 * 
 * madaM is the same as Madam?
 * 
 * 1. First string = Take string
 * 2. Second string = Reverse string
 * 3. Compare if first string character, at each index, is equal to the second string character at each index
 * 
 * 
 * Coding:
 * 1. 
 */

function isPalindrome(str) {
  let reverseString = str.split('').reverse().join('');
  console.log(str === reverseString);
  return str === reverseString;
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true