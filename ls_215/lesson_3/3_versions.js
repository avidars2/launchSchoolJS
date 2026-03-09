/**
 * Context: Version numbers are a conveninent notation for
 * a more complicated number system
 * 
 Legal versions:
1
1.0
1.2
3.2.3
3.0.0
4.2.3.0
 * 
 * P
 * I: two version numbers in this format
 * O: 1, -1, 0, or null
 * 
 * Explicits
 * 1. First argument (version 1) > second argument (version2) - return 1
 * 2. Vice versa, return -1
 * 3. If same, return 0
 * 4. If invalid input, return null
 * 
 * Implicits:
 * 1. 1 and 1.0 is the same, meaning trailing 0's do not affect greatness of number
 * 2. 
 * 
 * 1.2 > 1.1
 * 1.18 > 1.2
 * 
 * The digits before each decimal, are weighted less
 * than digits after that decimal
 * 
 * 1.0 === 1.0
 * 1.1 > 1.0
 * 1.18 > 1.1,
 * 1.18 > 1.2
 * 
 * Digits between later decimal places are 
 * 
 * 13.37 > 1.18.2
 * 
 * 13.01 > 1.18.56
 * 1.18.15 > 1.2
 * 
 * Each set of digits, trumps the next set
 * 
 * 2.0 > 1.0
 * 2.0 > 1.9
 * 
 * However, within each set, when compared directly, 
 * a set's base 10 value is comparitive to a set in the same
 * positions base 10 value
 * 
 * 1.2 > 1.1
 * 1.18 > 1.2 because 18 > 2
 * 
 * Let's say it's 2 strings
 * 
 * 
 * 
 * Testing:
 * 
 * "1.2", "1.1.0"
 * 
 * Validate the inputs
 * Split the inputs into an array of numbers [1, 2], [1, 1, 0]
 * Compare the strings as numbers at each index positiion
 * ---Is the number at the current position, greater than, equal to, or less than the other number at same position
 * ---If greater than, return 1
 * ---If less than, return -1
 * ---If equal, keep iterating
 * ----repeat logic
 * 
 * ---If equal for entire array,
 * -----Check if array lenghts ===
 * ------If not, look at remaining digits of longer string to see if any value > 0
 * ------If so, return 1 or -1, depending on which is the longer array (version1 vs version2)
 * 
 * 
 * Clarifying Q's
 * - This format === what is shown as examples?
 * - Are arguments in order, aka version1 === arg1, version2 === arg2?
 * - Digits, does that include Bigint, hex digits, or only base 10 digits?
 * - What does the input look like, is it an array, is it 2 strings?
 * - Is it 2 numbers? 
 * - What happens if the input is an empty string?
 * - 
 * 
 * Edge cases
 * 
 * Data structures
 * 1. Input: 2 strings
 * 2. Output, Number
 * 3. Split the strings by decimal into an array of numbers
 * 1.18.2 --> [1, 18, 2]
 * 13.37 --> [13, 37]
 * 
 * version2[0] > version1[0] ?
 * 
 * 
 * Algorithmm
 * High level:
 * 1. Validate inputs
   2. Split the inputs into an array of numbers [1, 2], [1, 1, 0]
 * 3. Compare the strings as numbers at each index positiion
 * ---Is the number at the current position, greater than, equal to, or less than the other number at same position
 * ---If greater than, return 1
 * ---If less than, return -1
 * ---If equal, keep iterating
 * ----repeat logic
 * 
 * ---If equal for entire array,
 * -----Check if array lenghts ===
 * ------If not, look at remaining digits of longer string to see if any value > 0
 * ------If so, return 1 or -1, depending on which is the longer array (version1 vs version2)
 * * 
 * 
 * Detailed:
 * 1. Validation
 * Is type of input === string ? if not return null
 * Split string into individual characters
 * Check if each character === 0 through 9, or a "."
 * ---str.match(/[0-9.]/)
 * 
 * 2. version1Arr = split
 * --version2Arr = split
 * let status = 0
 * --Iterate through array, compare each position
 * ---If greater than or less than, break loop and return 1/-1 respectively
 * -----status = 1/-1 respesctively, break loop, return status
 * ---If equal, keep itearting
 * 
 * 
 * If status === 0, and length of arrays !==
 * 
 * Find longer array
 * Label longer array as version 1 or 2
 * 
 * Iterate over longer array, finding if any value after length of shorter array is > 0
 * 
 * 
 * 
 * 3. Equal arrays
 * 
 */


"0.1", "1.0"

function compareSegments(seg1, seg2) {
  if (seg1 > seg2) return 1;
  if (seg2 > seg1) return -1;
  return 0;

}


function compareVersions(version1, version2) {
  if (!validateInputs(version1) || !validateInputs(version2)) return null;
  // console.log(`valid`, version1, version2)
  let version1Arr = version1.split(".");
  let version2Arr = version2.split(".");

  for (let idx in version1Arr) {
    let val1 = Number(version1Arr[idx]);
    let val2 = Number(version2Arr[idx]);
    if (val2 === undefined) break;

    let result = compareSegments(val1, val2);
    if (result === 1 || result === -1) {
      return result;
    }
  }

  let version1Longer;
  let version2Longer;
  if (version1Arr.length !== version2Arr.length) {
    if (version1Arr.length > version2Arr.length) {
      version1Longer = version1Arr.slice(version2Arr.length);
    } else version2Longer = version2Arr.slice(version1Arr.length);
  }

  if (version1Longer) {
    let newResult = version1Longer.some(el => Number(el) > 0);
    console.log(version1Longer);
    if (newResult) return 1;
    return 0;

  } else {
    let newResult = version2Longer.some(el => Number(el) > 0);
    if (newResult) return -1;
    return 0;
  }



}

function validateInputs(version) {
  if (typeof version !== "string") return null;
  
  if (version.length === 0) return null;
  return version.split("").every(char => char.match(/[0-9.]/g));

}

console.log(
  compareVersions("1.2", "1.18.2") === -1,
  compareVersions("1.0.0.0.0", "1") === 0,
  compareVersions("0.0.1.0.0", "0.0.1.0.0.0.0.0.0.0.0.0") === 0,
  compareVersions("2.2", "2.18.2") === -1,
  compareVersions("2.2", "2.2.2") === -1,
  compareVersions("2.2.0", "2.2.0.0.0.0.1") === -1,
  compareVersions("1.2x", []) === null,
  compareVersions("x.x", "1.18.2") === null,
  compareVersions([], "1.18.2") === null,
  compareVersions("0.0.1", "0.0.0") === 1,
  compareVersions("", "1.18.2") === null,
)