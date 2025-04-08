function attempt1() {

/**
 * Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.
 */

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
/**
 * Input: String of at least one character
 * Output: An object containing the distribution of uppercase, lowercase, and neither characters
 * 
 * Explicits:
 * 1. The input will be a string of at least one character
 * 2. The return value will be an object
 * 3. The return value will show the percentage of lowercase, uppercase, and neither characters
 * Implicits:
 * 1. The percentage is to 2 decimal points
 * 2. The program will need to distinguish between alphabetic and non alphabetic characters
 * 3.Non alphabetic characters make up the neither portion
 * 4. Spaces count as a character
 * 
 * 
 * 'a b' --> lower: 66.67% neither: 33.33% upper: 0.00%
 * 
 * ' ' --> neither: 100.00% 
 * 
 */

/**
 * Data structures:
 * Strings
 * Object containing the 3 types, and numbers associated
 * 
 * Algorithm:
 * 0. Iterate through string 
 * 1. Identify which characters are alphabetic and non alphabetic
 * 2. Alphabetic characters, determine if lowercase or uppercase
 * 3. If uppercase, add point to uppercase property, same for lowercase
 * 4. Add 'neither' characters, a point to 'neither' property
 * 5.Calculate percentages
 * ---Add upper + lower + neither totals
 * ---Divide upper / totals
 * --Repeat for other 2
 * --Convert return values to 2 decimal points
 */

function letterPercentages(str) {
  let caseObj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }

  for (let char = 0; char < str.length; char++) {
    if (isAlphabetic(str[char])) {
      if (isUpper(str[char])) {
        caseObj.uppercase++;
      } else caseObj.lowercase++;

    } else caseObj.neither += 1;
  }
  convertToPercentages(caseObj);
  console.log(caseObj);

  return caseObj;

}

function isAlphabetic(char) {
  // console.log(char);
  char = char.toLowerCase();
  if (char >= 'a' && char <= 'z') return true;
  return false;
}

function isUpper(char) {
  if (char >= 'A' && char <= 'Z') return true;
  return false;
}

function convertToPercentages(obj) {
  let total = Object.values(obj).reduce((acc, el) => acc + el, 0);

  Object.keys(obj).forEach(key => {
    obj[key] = ((obj[key] / total) * 100).toFixed(2);
  })
}

}

function attempt2() {
  /**
 * I: String
 * O: Object containing 3 properties
 * 
 * Explicits:
 * Return an object containing the following 3 properties:
 * 1. Percentage of characters in the string that are lowercase letters
 * 2. Percentage of characteres that are uppercase letters
 * 3. Percentage of characters that are neither
 * --Assume that the string will always contain at least one character
 * 
 * Implicits:
 * 1. All characters count towards this including spaces
 * 2. Percentage values are to 2 decimal places
 * 
 * abCdef 123 -->
 * abdef : lowercase
 * C : uppercase
 *  123: neither
 * 
 * abdef length is 5
 * divide by length of string 10 to get percentage 0.5
 * 
 * Multiply by 100 to get 50, convert to string to get '50'
 * If no decimal, add '.00'
 * 
 * Otherwise, split by decimal, and make sure the last element of array is 2 length, otherwise add a 0
 * or truncate
 * 
 * Given a string, figure out the % of characters that are
 * upper, lower, and neither. Put these values in an object as properties
 * within a string
 * and return
 */

/**
 * Data structures:
 * 1. String, array, object
 * 
 * Algorithm:
 * 1. Get the length of the string
 * 2. Calculate amount of lowercase letters
 * 3. Calculate amount of uppercase letters
 * 4. Using above, we'll get the 'neither' characters
 * 5. Using these amounts, append it to an object in percentage format
 * ---Convert decimals to appropriate string format
 * --Idea: toFixed is good for this
 */


function letterPercentages(str) {
  const DIVISOR = str.length;

  let letterPercentagesObject = {
      lowercase: ((getLower(str) / DIVISOR) * 100).toFixed(2),
      uppercase: ((getUpper(str) / DIVISOR) * 100).toFixed(2),
      neither: (((DIVISOR - getLower(str) - getUpper(str)) / DIVISOR) * 100).toFixed(2)
  }
  console.log(letterPercentagesObject);
  return letterPercentagesObject;
}

function getLower(str) {
  let lower = 0
  str.split('').forEach(char => {
      if (char >= 'a' && char <= 'z') {
          lower++
      }
  })
  return lower;
}

function getUpper(str) {
  let upper = 0
  str.split('').forEach(char => {
      if (char >= 'A' && char <= 'Z') {
          upper++
      }
  })
  return upper;
}

function properFormat(number) {

}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
}
