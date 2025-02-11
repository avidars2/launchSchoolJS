/**P
 * 1. Write in own words
 * 2. I/O
 * 3. Explicits Implicits
 * 4. Diagram/Visual
 * 5. Clarifying questions
 * 
 * Input: String of Numbers
 * Output: Same arranagement of Numbers as a  Number data type
 * 
 * '4321' --> 4321
 * '0' --> 0
 * 
 * Explicits:
 * 1. parseInt and Number may not be used
 * 2. String of digits will be provided always
 * 3. All characters will be numeric
 * 4. No leading signs will be used
 * 5. No invalid characters will be used
 * 
 * Implicits:
 * 1. The order of the Number in string form will be the same order in Number form
 * 2. A Number will need to be returned
 * 3. A number will need to be created/added. Potentially from the ones, tens, hundredths, etc.
 * 4. The string length will be important in determining the position and 0's each Number needs
 * 
 * '4321' --> 4321
 * 
 * '4' --> 4000 --> 4000
 * '3' --> 300 --> 4000 + 300
 * '2' --> 20 --> 4300 + 20
 * '1' --> 1 --> 4320 + 1
 * 
 * Amount of zeroes = string from position length - 1
 * Current value is stored somewhere
 * Iterate through each character
 * 
 * 
 * Ideas:
 * 1. loose equality
 */

/** D/A
 * String --> Number
 * 
 * '4' --> 4
 * 
 * Alg
 * 1. Take string
 * -Get string length

 * 3. For each character of string, starting from left
 * -Evaluate the Number equivalent of that character
 * -Append Number with trailing zeroes 
 * - add new number to variable 'num'
 * -Repeat for each character
 * 4. Return num
 * 
 * 3 expanded:
 * trailing Zeros --> 
 * 432
 * 
 * 4 --> 0
 * 3 --> 1
 * 2 --> 2
 * 
 * strLen = 3
 * 
 * strLen - (1 + index)
 * 4 --> 3 - (1 + 0) --> 2 trailing zeroes
 * 3 --> 3 - (1 + 1) --> 1 trailing zero
 * 
 * 
 * 3 expanded, determine # number equivalent
 * 1. Input, a num in string form, output: num in Number form
 * '1' --> 1?
 * repeat for 0-9
 * 
 * if charCode 57 --> return 9
 * 
 * charCode is Number + 48
 * 
 * 2. return charCode - 48
 * 
 * 
 * 
 * '1' == 1 ? --> true
 */

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

function stringToInteger(str) {
  let numberEquivalent = 0;
  str.split('').forEach((num, index) => {
    let charNum = numEquivalent(num);
    numberEquivalent += addZeroes(charNum, str.length, index);
    console.log(numberEquivalent);
  });

  return numberEquivalent;
}

function numEquivalent(char) {
  const ACTUAL_NUMBER_VALUE_FROM_CHAR_CODE = 48
  return char.charCodeAt(0) - ACTUAL_NUMBER_VALUE_FROM_CHAR_CODE;
}

function addZeroes(num, strLength, index) {
  let tenPower = strLength - (1 + index); //How many times to multiply by 10
  return num * Math.pow(10, tenPower);
}

//For the string length
//Multiple by 10 string length amount of times
//4000 --> 4 --> 4 - (1 + 0) --> 3
//Multiple by 10, 3 times
/** 
 * 1. Get Number
 * 2. Get strLength and index the number was at
 * 3. multiplyBy10Times = Use 0 amount formula
 * 4. num = 1
 * 5. multiply num by 10, repeat until
 * num was multiplied a total of multiplyBy10Times
 */

