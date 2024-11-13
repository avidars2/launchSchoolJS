/**Problem
 * Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. 
 * The UTF-16 string value is the sum of the UTF-16 values of every character in the string. 
 * (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)
 * 
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
 */

/** P
 * 
 * Inputs: 'String'
 * Outputs: Numeric value of string
 * 
 * The function must take a string, calculate the value of each character in the string, and output the value
 * 
 * An empty string should evaluate to 0
 * What would 1 space evaluate to? I'd have to look up the UTF16 value (32)
 * 
 * Mental Model:
 * 
 * Given a string, evaluate each character to get the total UTF16 value of that string
 * and output it to the console
 * 
 * It appears that "".charCodeAt() evaluates to 'NaN', so NaN for empty spaces would be evaluated to 0
 */

/** E
 * 
 * Input: 'a'
 * Output: 97
 * 
 * Input: ' '
 * Output: 32
 * 
 * Input: ''
 * Output: 0
 * 
 * 
 * Input: '' + ''
 * Output: 0
 */

/**DA
 * Datastructure: String input
 * 
 * Algorithm:
 * 1. Create a function that takes 1 argument
 * 2. Split the string into individual characters
 * 3. If Array length > 0, loop through array
 * 4. For each element, add UTF16 value to variable
 * 5. Return value
 * 
 */

function utf16Value(string) {
  let characterArray = string.split('');
  let utf16Total = 0;

  if (characterArray.length > 0) {
    characterArray.forEach((char) => utf16Total += char.charCodeAt())
  }

  console.log(utf16Total);
  return utf16Total;
}

{//Alt solution

function utf16Values(string) {
  return string.split('').reduce((prev, char) => prev + char.charCodeAt(), 0);
}
console.log(utf16Values('Four score'));         // 984
utf16Values('Launch School');      // 1251
utf16Values('a');                  // 97
utf16Values('');                   // 0
utf16Values('' + '');              // 0
}


utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0
utf16Value('' + '');              // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811