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