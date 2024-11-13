/**
 * Problem:
 * 
 * 
 * Write a function that takes two strings as arguments, 
 * determines the length of the two strings, 
 * and then returns the result of concatenating the shorter string, 
 * the longer string, and the shorter string once again. 
 * You may assume that the strings are of different lengths.
 * 
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz" 

 */

/**P
 * 
 * Inputs: 2 strings
 * Outputs: Concantenated string involving shorter string, longer string, then shorter string
 * 
 * Implicit understanding & Clarifying questions:
 * The inputs will be 2 strings that we can assume are different lenghts
 * If one of the strings entered is empty (no spaces), the other string is printed as is
 * 
 * Nothing is said about empty strings with spaces, so we can concatenate that too
 * 
 * 
 * Mental model:
 * 
 * Given 2 strings, concatenate the shorter string with the longer string, and then
 * concatenate the shorter string to the return value of that, and then return
 * the final value and print to the console
 * 
 * 
 */

/**E
 * 
 * Input: 'a', '24aqdwb'
 * Output: 'a24aqdwba'
 * 
 * Input: '', 'a'
 * Output: 'a'
 * 
 * Input: ' ', '  '
 * Output: '    ' (4 spaces)
 * 
 * 
 * 
 */

/**DA
 * 
 * Datastructures: 2 strings as inputs
 * 
 * Algorithm:
 * 
 * 1. Create a function that takes 2 arguments
 * 2. Check the length of each string
 * 3. Assign a var with the conatenation of the shorter str and longer str
 * 4. Assign a var with the return value of the previous var concat with shorter str
 * 5. Log output
 */

function shortLongShort(str1, str2) {
  let shortString = str1.length > str2.length ? str2 : str1;
  let longString = shortString === str1 ? str2 : str1;

  let shortLongShortString = shortString + longString + shortString;
  console.log(shortLongShortString);
  return shortLongShortString;
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

//Smarter solution
{
  function shortLongShort(string1, string2) {
    if (string2.length > string1.length) {
      return string1 + string2 + string1;
    } else {
      return string2 + string1 + string2;
    }
  }
}