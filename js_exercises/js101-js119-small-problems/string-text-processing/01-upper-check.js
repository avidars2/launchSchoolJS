/**
 * Write a function that takes a string argument and 
 * returns true if all of the alphabetic characters 
 * inside the string are uppercase; false otherwise. 
 * Ignore characters that are not alphabetic.
 */

/**
 * I: String argument
 * O: Boolean; true if all alphabetic characters are upper case, false otherwise
 * 
 * Explicits:
 * 1. Ignore non-alphabetic characters
 * 2. Check if all characters in string are uppercase
 * 3. Return true if so, false otherwise
 * 
 * Implicits:
 * 1. Empty strings return true, we're searching for lowercase characters to return false
 * 2. Spaces are ignored
 * 
 * CQ:
 * 1. Will input only be string?
 * 2. 
 * 
 * t --> false
 * T --> true
 * Tt --> false
 * 'T ' --> true
 * 'T T' --> true
 */
/**
 * Data structures:
 * String and keep as string for now
 * 
 * Algorithm:
 * 1. Evaluate each character if they are alphabetic
 * -For loop through String
 * 2. If alphabetic, evaluate if uppercase
 * --Per character, evaluate if alphabetic.
 * --Per alphabetic character, evaluate if uppercase (>= A && <= Z)
 * 3. If not upper, break loop, return false
 * 4. Return true
 */

function isUppercase(str) {
  for (let char of str) {
    if (isAlphabetic(char)) {
      if (isUpperChar(char)) continue;
      console.log('Non upper char:', char)
      console.log(`${str} is not upper`);
      return false;
    }

    //If alphabeitc, check if uppercase
    //If not upper case, return false
  }
  console.log(`${str} is upper`);
  return true;
}

function isAlphabetic(char) {
  return (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')
}

function isUpperChar(char) {
  return (char >= 'A' && char <= 'Z')
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

