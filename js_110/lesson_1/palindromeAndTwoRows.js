// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes and 2 or more characters long.
// Consider palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

/**
 * input: a string
 * output: an array of substrings
 * ---Output includes only substrings which are palindromes and 2 or more characters long
 * 
 * Clarifying questions?
 * 1. Can inputs be spaces? Would these spaces be considered palindromes? Can the string input be sentences?
 * 2. If so, can characters from 2 distinct words makeup a palindrome?
 * 3. Would 'iiiii' be considered a palindrome?
 * 4. Will input always be a string?
 * 
 * Rules:
 * --Explicit requirements:
 * 1. 
 * 2. Palindromes must be 2 or more characters long
 * 3. Palindrome words are case sensitive (so adA it not a palindrome)
 * 
 * --Implicit:
 * 1. Multiple palindromes can be extracted from within the same palindrome (lillil --> illi --> ll)
 * 2. An array is always returned, even if empty
 * 
 * Given a string, exctract all of the substrings from the string which are 2 characters long or more, per substring evaluate if they are a
 * palindrome. Return all of the Palindromes in an Array.
 */

/**
 * Ideas/helpful methods:
 * 1. Reverse array method
 * 2. Split and join
 * 
 * Algorithm high-level:
 * 1. Take a string
 * 2. Extract all of the substrings greater than 2 characters and append to an array
 * 3. SET palindromeArray =[]
 * 4. For each substring, evaluate if they are a palindrome
 * 5. If they are, push to palindromeArray
 * 6. Return palindromeArray
 */

//ili
//abcddcbA

function palindromeSubstrings(string) {
  let substringArray = extractSubStrings(string); //returns an array containing substrings
  let palindromeArray = [];

  substringArray.forEach(substr => {
    if (checkIfPalindrome(substr)) {
      palindromeArray.push(substr);
    }    
  });

  return palindromeArray;
}



/** Extract the substrings
 * input: string
 * output: Array of substrings
 * 
 * -2 char or more per substring
 * 
 * 'test'
 * 
 * te, tes, test
 * es, est
 * st
 * 
 * Given a string, if >= 2 characters long
 * Starting at position 0, get first 2 characters
 * Then, get incremental amounts until end of string
 * 
 * Repeat, but for next position (position 1) if >= 2 characters long
 * 
 * 
 * Given a string, if >= 2 char long:
 * Slice position start: 0 to 2 of string, and push to array, increment end until end of string
 * 
 * Increment position start by 1, check if 1 to end >= 2,
 * IF so, slice and increment end until end of string
 * 
 * Repeat until incremented start to end < 2
 * 
 *
 *  
 * 
 */

function extractSubStrings(string) {
  let substringArray = [];
  if (string.length < 2) return substringArray;
  for (let start = 0; (string.length - start) >= 2; start++) {
    for (let endPosition = (start + 2); endPosition <= string.length; endPosition++) {
      substringArray.push(string.slice(start, endPosition));
    }
}
  return substringArray;
}

/**Check if Palindrome
 * Input: string
 * Output: boolean
 * 
 * Rules:
 * 1. Palindromes are case sensitive
 * 2. Must be spelled same forward and back
 * 
 * mom
 * hil
 * 
 * Given a string, see if it is equal even when reversed. If so, return true, else return false
 * 
 * mom
 * hil
 * For each letter, starting at end, append to new empty string
 * 
 * newString = String[string.length - 1]
 * Repeat above until index === 0
 *
 * if newString === str, return true else fasle 
 */


function checkIfPalindrome(substr) {
  let newString = '';
  for (let strPos = (substr.length - 1); strPos >= 0; strPos--) {
    newString += substr[strPos];
  }

  return (newString === substr);
  
}


/** Take last row #
 * currentInt = last row #
 * repeats = last row # - 1
 * row = [last row #]
 * 
 * 
 * Repeat repeats times
 *  row.unshift(currentInt - 2)
 * 
 */

function sequenceOfTwos(row) {
  let rowArray = getRowNumbers(findLastRowNum(row), row);
  
  let total = 0;
  rowArray.forEach(num => total += num);
  
  // return total;
  return rowArray.reduce((acc, int) => acc + int, 0);

}

function findLastRowNum(row) {
  let lastDigit = 0;
  for (let x = 1; x <= row; x++) {
    lastDigit += x * 2;
  }

  return lastDigit
}

function getRowNumbers(lastRowNum, row) {
  let currentInt = lastRowNum;
  let repeats = row - 1;
  let rowArray = [lastRowNum];

  while (repeats > 0) {
    currentInt = currentInt - 2
    rowArray.unshift(currentInt);
    repeats--;
  }

  return rowArray;
}

console.log(sequenceOfTwos(4))