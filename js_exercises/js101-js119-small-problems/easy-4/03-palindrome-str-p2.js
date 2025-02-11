/**
 * Write another function that returns true if the string passed as an argument
 *  is a palindrome, or false otherwise. This time, however, your 
 * function should be case-insensitive, and should ignore all non-alphanumeric characters. 
 * If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.
 * 
 * isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
 */

/**
 * Input: String
 * Out: Boolean
 * 
 * Given a string, evaluate if it is really a palindrome, return true if so, false otherwise.
 * Palindromes are strings that read the same forward and back.
 * For this, case does not matter, nor do spaces & punctuation. Only alphanumeric
 * 
 * Explicit requirements/observations/rules:
 * 1. Return a boolean
 * 2. Input is a String
 * 3. Palindromes are strings that read same forward and back
 *    - CASE does not matter
 *    - Punctuaction and spaces DO NOT matter
 *    - ONLY alphanumeric characters (Letters and Numbers) matter
 * 4. I am given a 'isPalindrome' function to use
 * 
 * Implicit requirements:
 * 1. Spaces do not seem to matter either
 * 2. The given string will need to be trimmed/have punctuation and spaces handled
 * 
 * madam --> true
 * Madam --> true
 * m6m --> true
 * m 6m --> true
 * m,,,m,m --> true
 * m,,lm,,m --> false
 * 
 * Data structures:
 * 1. String input
 * 2. Boolean output
 * 
 * madam --> function --> boolean
 * 
 * Algorithm:
 * 1. GET string input for function
 * 2. Evaluate if string is Palindrome
 * 3. Return Boolean
 * 
 * 
 * Step 2 expanded:
 * Evaluate if a string is a Palindrome
 * 1. A string that reads the same forward and back
 * 2. CASE does not matter, nor does punctuation
 * 3. Only alphanumerics matter
 * 4. Spaces do not matter
 * 
 * Madam --> true
 * madam --> true
 * m,,adam --> true
 * 
 * Implicits:
 * 1. Remove spaces and punctuation from string inputs
 * 2. Convert case to be the same across strings
 * 
 * trimString:
 * Given a string, remove non-alphanumeric characters, level case, and return new strings
 * 
 * Compare trimmed strings:
 * Given a string, copy it, reverse it, and compare if each character at each index is the same
 * 
 * Step 2 algorithm trimString
 * 1. Take string
 * 2. Remove spaces
 * 3. Remove punctuation
 * 4. Flatten case
 * 5. return
 * 
 * Step 2 algorithm compareString
 * 1. Take string
 * 2. Copy string
 * 3. Reverse copy
 * 4. Compare each index position of copy to original
 * 5. If any point does not match, return false, else return true
 */






function isRealPalindrome(str) {
  let newString = trimAndFlattenString(str);
  return isPalindrome(newString);

}

function trimAndFlattenString(str) {
  let newString = '';

  for (let idx = 0; idx < str.length; idx++) {
    if (!isAlphaNumeric(str[idx])) continue;
    newString += str[idx];
  }
  
  return newString.toLowerCase();

}

function isPalindrome(str) {
  let reverseString = str.split('').reverse().join('');
  console.log(str === reverseString);
  return str === reverseString;
}


function isAlphaNumeric(char) {
  if (char >= 'a' && char <= 'z') return true
  if (char >= 'A' && char <= 'Z') return true
  if (char >= '0' && char <= '9') return true
  return false;
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false