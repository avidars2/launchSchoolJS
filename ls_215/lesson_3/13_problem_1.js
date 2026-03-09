/**
 * P/C:
 * 
 * Given a phone number, clean it up so it may be sent as an SMS message
 * 
 * I: Digits/Number/String
 * O: String
 * 
 * Explicits:
 * 1. For "bad" numbers, return a string of 10 "0s" --> "0000000000"
 * 1. Number < 10 digits assume it is a bad number
 * 2. Numbers may contain special characters such as spaces, dashes, dots, and parantheses that should be ignored
 * 3. If number === 10 digits, it is good
 * 4. If number is 11 digits, with first number 1, trim the 1 and use the last 10 digits
 * 5. If number is 11 digits, and first number is not 1, it is a bad number
 * 6. If number is more than 11 digits, assume it is a bad number
 * 
 * Implicits:
 * 1. Number must be either 10 or 11 digits (assuming starting digit is 1)
 * 2. 
 * 
 * Testing:
 * 
 * Assumptions:
 * 1. Special characters are all non-alphabetic or numeric characters
 * 2. Digits are considered group if they are sequential without an alphabetic character between them
 * 3. Invalid types get a null returned
 * 4. Return first valid number if multiple are given
 * 
 * Given a string or Number representing a phone number, evaluate whether it is a good or bad number
 * 
 * If it is good, return the cleaned up number.
 * 
 * If it is bad, return 10 0s
 * 
 * 01234567890 --> Bad because 11 digits and starts with 0
 * 12345678900 --> Good because 11 digits and starts with 1
 * 
 * 1-234435676 --> Good because 10 digits, and special character "-" gets ignored
 * 
 * ---1--2--3==4==5=67890 --> Good because 10 digits, and all special characters get ignored
 * 
 * 
 * 
 * 
 * Clarifying Questions:
 * 1. What type of input will the phone number be sent in? Will it be Number only or will Strings be sent?
 * 2. Can they be input as other data types as well?
 * 3. Do digits have to be sequential, what happens if there is a letter between them such as "2a3"?
 * 4. Am I returning a phone number as a string, or number, or some other data type?
 * 5. 1-2..., 12?
 * 6. Will the input be an entire string and a phone number should be found within it?
 * 7. What if there are multiple valid numbers in a string?
 * 
 * Given an input, evaluate if it is a good or bad number. If it's an invalid type return null
 * If it is a bad number, return 10 0's.
 * If it is a good number, return the cleaned up number
 * Cleaned up number:
 * -- Just the number, with leading 1's (if 11 digits) removed
 * --Special characters removed (Non-numeric)
 * 
 * --A valid number of 10 digits is a number where it is 10 sequential digits with no alphabetic character in between
 * --A valid number of 11 digits is the same as 10, except with an extra 1 in the beginning that should be trimmed
 * 
 * 
 * 
 * Edge cases:
 * 
 * 
 * DS:
 * 1. We may have a number/string input
 * 2. Invalid types will have null returned
 * 
 * 1. Use strings/transform input into Strings
 * 2. Work on it as an array
 * 
 * "1234567" --> [1, 2, 3, 4, 5, 6, 7] -- Length, splice additional characters
 * --Filter, string regex matching
 * 
 * 
 * A:
 * 1. Given a string or number, convert input to String
 * 2. Split string into individual characters into an array
 * 3. Filter special characters from array
 * 4. Re-join into string
 * 5. Split string by any alphabetic character
 * 6. Evaluate strings for valid number
 * 
 * 
 * //Here we are just getting digits
 * Valid number check:
 * 7. If length === 11 digits, and first char === 1, splice out 1, and return number
 * 8. If length === 10 digits, return number
 * 9 if length > 11 or < 10, return 10 0's
 * 
 * 
 * Given a string that contains a valid string, and in valid string
 */

const badNumber = "0000000000"

function cleanNumber(numString) {
  if (typeof numString !== "number" && typeof numString !== "string") return null;

  let strinNum = String(numString);

  let stringArr = strinNum.split('').filter(char => char.match(/[0-9a-z]/i)).join('');
  // console.log(stringArr, numString);


  let alphaSplit = stringArr.split(/[a-z]/);
  // console.log(alphaSplit, numString)

  let lastNumReturned = badNumber;
  for (let numChars in alphaSplit) {
    if (validNumber(alphaSplit[numChars]) !== badNumber) return validNumber(alphaSplit[numChars]);
    lastNumReturned = validNumber(alphaSplit[numChars]);
  }

  return lastNumReturned;


}

function validNumber(numString) {
  if (numString.length === 11 && numString[0] === '1') {
    console.log(numString);
    return numString.slice(1);
  } else if (numString.length === 10) {
 console.log(numString)
    return numString;
  } else return badNumber;
}




let firstInvalidSecondValid = "123456789a12345678900"

let badLeadingZero = "01234567890";

let goodLeadingOne = "12345678900";

let goodTenSpecial = "1-234435676";

let goodTenExtraSpecial = "---1--2--3==4==5=67890--";

let goodEleven = "11234567890";
let goodElevenSpace = "1 1  2345678 9 0";

let badTenLetter = "123456a7890";

let badInput = {};
let badInputArr = [1, 2, 3];

console.log(

  cleanNumber(badLeadingZero) === badNumber,
  cleanNumber(badTenLetter) === badNumber,
  cleanNumber(badInput) === null,
  cleanNumber(badInputArr) === null,
  cleanNumber(goodLeadingOne) === "2345678900",
  cleanNumber(goodTenSpecial) === "1234435676",
  cleanNumber(goodTenExtraSpecial) === "1234567890",
  cleanNumber(goodEleven) === "1234567890", //Leading 1 trimmed
  cleanNumber(goodElevenSpace) === "1234567890", //Leading 1 trimmed and space removed
)