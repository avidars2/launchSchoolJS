/**
 * P: 
 * Given a list of numbers in a "short-hand" range
 * 
 * Only significant part of the next number is written
 * because we know the numbers are always increasing
 * 
 * 1, 3, 7, 2, 4, 1 --> 1, 3, 7, 12, 14, 21
 * 
 * 
 * "1-3, 1-2" --> [1, 2, 3, 11, 12]
 * 
 * curerntly = 1
 * 1 - 3
 * 
 * 1, 2, 3
 * 
 * 1-3 --> 1, 2, 3
 * 1-2 --> 11, 12
 * 
 * 
 * 
 * I: List of numbers in a "short-hand" range in string
 * O: List of complete numbers as new string
 * 
 * E:
 * 1. Possible separators are ["-", ":", ".."]
 * 2. The separators represent a range
 * I:
 * 1. Write a function that takes a string and returns a new string
 * 2. Ranges cause the output string to include each integer between that range
 * ---so 1-3 would be 1, 2, 3
 * ---1 -5 would be 1, 2, 3, 4, 5
 * 3. Ranges can be chained, and the same rules apply where next numbers is shorthand for a higher number
 * ---1-5:2 --> 1 to 5 to 12 --> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
 * 4. Split the string by separators and identify numbers
 * 5. Numbers that are not separated by a comma are part of the same number
 * 6. First number does not have to be 1, and the first number is the start
 * ---so all subsequent numbers should be higher
 * --- 104-2 --> 104, 105, 106, 107...112
 * 7. If no range, just list numbers as is and fill in shorthands
 * 8. For a subsequent number that is lower than a previous number,
 * it is not representing just any digit, but the last digit
 * --1, 3, 1 --> 1, 3, 11 NOT 1, 3, 10
 * ----more precisely, it represents the suffix
 * 
 * 
 * T:
 * 
 * 1, 3, 7, 2 --> 1, 3, 7, 12
 * 
 * "1-3, 1-2" --> 1, 2, 3, 11, 12
 * 
 * Starting with the first number (extract first number)
 * See if there is a range
 * From that range, count from starting number, to end of range, incrementing
 * by 1
 * 
 * 1-3 --> starting number is 1, increment 1, 2, 3
 * 
 * after a comma, check new number (1-2)
 * --Check last number --> 3
 * --Check new number
 * ----Extract number from range if range "1"
 * 
 * If new number > last number
 * ----take last number, replace suffix with new number
 * 
 * 34, 5 --> take 34 and replace 4 with 5 --> 35
 * 
 * 114, 26 --> take 114 and replace 14 with 26 --> 126
 * 
 * "1-3, 1-2" 
 * 1. Extracting first number //545, 64:11
 * ----Everything that exists before a comma
 * ----Everything from that, that exists before a separator 
 * --If range, increment number up to end of range by 1
 * 2. If comma:
 * ---Repeat step 1 to extract first number
 * ----If that new number > previous number:
 * ------Replace suffix of previous number with new number to get next in list
 *  
 * ---If less than previous number
 * ------Check if new number suffixed to previous number > previous number
 * -------if so, that becomes next in sequence
 * 
 * ----If suffixed number is still lower, then increment left digit by 1
 * -------That becomes next in sequence
 * 
 * ---If this new number was part of a range, iterate from there by 1 to end of range
 * ------Also check end of range
 * 
 * 3. end of range check
 * ----Repeating step 2, comparing end of range to start of range first
 * 
 * "1,2,3, 11"
 * 
 * 
 * 
 * '104-02' --> 104, 105...202
 * '104-2' --> 104, 105...112
 * 
 * 
 * 
 * 
 * CQ:
 * 1. Does 1-3, 1-2 represent [1, 2, 3, 11, 12] ?
 * 2. Does "" in the example represent a grouping that === that array
 * 3. What datatype is the input? Will it always be an array?
 * 4. Will each array element always be a string?
 * 5. Will there always be an input? How should incorrect datatypes or no input be handled?
 * 6. What if the input contains letters or invalid characters in the array?
 * 7. If a number has a space between itself and another number, is it still the same number?
 * 8. Are commas the main delineation between numbers?
 * 
 * Assumptions:
 * 1. Always assume input is a string
 * 2. Always assume each string element is a valid number or separator
 * 
 * EC:
 * 
 * DS:
 * 1. Array of strings is best here, splitting string by comma delimiter
 * 2. String that will be a running concatenation
 * 
 * A:
 * 
 */

const separators = ["-", ":", ".."];

function shortHand(string) {
  let strArr = string.split(",");

  let numStr = "";
  //"545, 64:11"
  //"1-3, 1-2"
  for (let numCharIdx in strArr) {
    let currentNumbers = str[numCharIdx]; //545 or "1-3"
    let firstNum = parseInt(currentNumbers);

    if (numCharIdx === 0) {
      numStr += firstNum;
      if (!currentNumbers.split("").some(el => separators.includes(el))) continue;
      let endOfRange = rangeCheck(firstNum, getEndOfRange(currentNumbers));
      /**
       * Look at number "1-3"
       * "3-1"
       */

    }

  }


}

function rangeCheck(previousNumber, newNumber) {

}

function getEndOfRange(numStr) {
  let separatorIndex = numStr.split("").findIndex((val) => separators.includes(val));

  return numStr.slice(separatorIndex + 1);


}

(shortHand("1, 3, 7, 2, 4, 1") === "1, 3, 7, 12, 14, 21")
(shortHand("1 2, 3") === "12, 13")