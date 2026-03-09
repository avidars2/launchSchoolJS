/**
 * Problem/Definitions:
 * 1. Checksum formula to validate id numbers
 * 2. Formula verifies a number against its included check digit, which is usually appended to a partial number
 * to generate the full number.
 * 
 * I: String format number
 * O: ?Valid? (Assume true/false)
 * 
 * Explicits:
 * 1. String input
 * 2. Ignore all non-numeric characters in the input string
 * 3. Check if number in string format is valid as per Luhn formula
 * 4. Return boolean true if valid, false if invalid
 * 5. Invalid data types get a false return 
 * 
 * 
 * Implicits:
 * 
 * 
 * 
 * Testing:
 * What does it mean for a number to be valid as per Luhn formula?
 * E:
 * 1. Counting from rightmost digit and moving left, double the value of every second digit
 * ---For any digit that becomes 10 or more, subtract 9 from the result
 * 1111 --> 2121
 * 8763 --> 7733
 * 
 * Reverse this string, for every other digit (every digit with an odd index), double it.
 * ---If result >= 10, subtract that by 9
 * 
 * 2. Add all the new digits together
 * 
 * 1111 --> 2121 summed --> 2 + 1 +2 + 1 === 6
 * 7733 --> 20
 * 
 * If last digit is 0, then number is valid, if not 0, invalid
 * 
 * Given a number, count the number, from the right most digit, and for every other digit starting at the second one,
 * double it. If that doubled number >= 10, subtract 9.
 * 
 * Then with the new set of resulting digits, sum each individual digit up.
 * If the last digit === 0, return "valid", else "invalid"
 * 
 * "2323 2005 7766 3554"
 * 
 * 2323200577663554
 * 
 * 4343400557366514  === 60 and is therefore valid because it ends with 0
 * 
 * 
 * 
 * 
 * Clarifying Questions
 * 1. What does a valid response look like? Boolean true/false?
 * 2. How should invalid data types be handled?
 * 3. What to do if string is empty?
 * 4. What is a second digit?
 * ---Second digit seems to be, starting from right side, every other digit, starting after the first
 * 5. For a number with 4 groups of digits, delineated by a space, that should be treated as a single number?
 * 6. What if the input is a number and not a string?
 * Assumptions:
 * 1. empty string === invalid and gets returned false
 * 2. Second digit refers to digit after first starting from right side
 * 3. Multiple numbers in a string are treated as part of the same single number
 * 
 * Edge Cases:
 * 
 * 
 * DS:
 * 1. Strings, we can convert this to an array for iteration
 * "2323" --> [2, 3, 2, 3]
 * 2. Returning a boolean
 * 
 * A:
 * 1. Check if input is string, if not, return false
 * 2. Convert string into filtered and mapped array of just the numbers | 87b63a --> 8763
 * ----Split it into individual characters ['8', '7', '6', 'b']
 * ------Filter it for only the numeric characters
 * -------Convert everything to a Number. Then match for [0-9] via regex
 * ------With filtered array, map everything to a Number type
 * 3. With the array of numbers, reverse the order | 3678
 * 4. For every other number (number with odd index), double it | 6 and 8 get doubled
 * 5. Check doubled number, if that number >= 10, subtract 9 from it and return | 12 - 9 === 3, 16 - 9 === 7 | 3377
 * 6. With new set of numbers, sum all of them into a single number | 3 + 3 + 7 + 7 === 20
 * 7. If last digit of number === 0, return true, else return false | last digit === 0, so valid
 * 
 */


function checkNumberString(numStr) {
  if (typeof numStr !== "string") return false;
  let filteredNumberArr = numStr.split("").filter(char => char.match(/[0-9]/));
  let numberCoercedStrArr = filteredNumberArr.map(char => Number(char));
  if (numberCoercedStrArr.length === 0 ) return false;
  // console.log(numberCoercedStrArr);

  let result = checkValidLuhne(numberCoercedStrArr);
  return result;

}

function checkValidLuhne(numArr) {
  numArr.reverse();
  let stepOneLuhne = numArr.map((num, idx) => {
    let numToReturn = num;
    if (idx % 2 !== 0) {
      numToReturn = num * 2;
      if (numToReturn >= 10) {
        numToReturn = numToReturn - 9;
      }
    }

    return numToReturn;
  })

  let stepTwoLuhne = stepOneLuhne.reduce((acc, el) => acc + el, 0)

  console.log(stepTwoLuhne);

  return stepTwoLuhne % 10 === 0

}

let validCase1 = "2323 2005 7766 3554";
let validCase2 = "8763";
let validCase4 = "87b63a";

let invalidCase1 = "1111";
let invalidCase2 = ""
let invalidCase3 = "abcxvsdf1asjknaj"
let validCase3 = "2a3-2z3dfbwo== 2 we 0-0 )5 (7 %766 --3554  --";

console.log(
  checkNumberString(validCase1) === true,
  checkNumberString(validCase2) === true,
  checkNumberString(invalidCase1) === false,
  checkNumberString(invalidCase2) === false,
  checkNumberString(invalidCase3) === false,
  checkNumberString(validCase3) === true,
  checkNumberString(validCase4) === true,
)