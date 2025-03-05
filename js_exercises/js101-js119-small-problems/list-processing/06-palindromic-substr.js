// let subStr = require('./05-all-subtr');

/**
 * Write a function that returns a list of all palindromic substrings of a string. 
 * That is, each substring must consist of a sequence of characters that reads the same forward and backward. 
 * The substrings in the returned list should be sorted by their order of appearance in the input string. 
 * Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case;
 that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. 
 In addition, assume that single characters are not palindromes.
 */

 /**
  * Input: String
  * Output: All palindromic substrings of a string
  * 
  * Explicits:
  * 1. Write a function that returns a list of all palindromic substrings of a string
  * 2. Each substring in the returned array must read the same forward and back
  * 3. The sub strings in the returned list should be sorted by their order of appearance in the input string
  * 4. Duplicates should be included
  * 5. Use the substring function made earlier
  * 6. Consider all characters, case matters for palindromes (Aba is not a palindrome but AbA is)
  * 7. Single characters are not palindromes (a is not a palindrome)
  * Implicits:
  * 1. The list of subtstrings will need to be filtered for palindromes found within the substrings
  * 2. It looks like only the palindromic substrings are returned in the final list
  * 3. So if madam is a palindrom, and adam is a substring, 'adam' does not get included, however the substring 'ada' does
  * 
  * 'hih' --> [h, hi, hih, i, ih, h] --> ['hih'] //Fits criteria because above length of 1 and reads same forward and back
  * 'h' --> ['h'] --> [] //Empty array is acceptable
  */

 /**
  * 'hih' string to array of substrings back to array containing filtered list
  * 
  * Ideas/Useful methods:
  * 1. filter to check for palindromes
  * 2. Palindrome checking function
  *  
  * Algorithm:
  * 1. Get substring array of string
  * 2. Filter substring array for palindromes
  * 3. Return new filtered array
  * 
  * 2 expanded:
  * - If length > 1
  * - If the string reversed is equal to itself
  * 
  * -Case matters, characters matter
  * - Reads same forward and back (AbA, not Aba) {AAA, not AAB However AA would be a palindrome}
  */

function palindromes(str) {
  let palindromeArray = substrings4(str).filter(substr => isPalindrome(substr));
  console.log(palindromeArray)
  return palindromeArray;
}

function isPalindrome(substr) {
  // if (substr.length <= 1) return false;
  return substr.length <= 1 ? false : substr === (substr.split('').reverse().join(''));

}

function substrings4(str) {
  return str.split('').reduce((acc, _, idx) => acc.concat(leadingSubstrings(str.slice(idx))), []);
}

function leadingSubstrings(str) {
  return str.split('').reduce((acc, char, idx) => {
    acc.push((acc[idx - 1] ?? '') + char);
    return acc
  }, [])
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]