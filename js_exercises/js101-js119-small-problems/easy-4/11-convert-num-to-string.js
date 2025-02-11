/**
 * P
 * 
 * -write own words
 * - I/O
 * -Explicits/Implicits
 * -clarifying questions
 * - Diagramming
 * 
 * I: Non-negative integer value
 * O: String version of that integer
 * 
 * 1 --> '1'
 * 14 --> '14'
 * 0 --> '0'
 * 
 * Explicits:
 * 1. Input is a non-negative integer
 * 2. Standard conversion functions such as String(), toString, '' + number may not be used
 * 3. Analyze and manipulate the number to convert to string
 * 
 * Implicits:
 * 1. The input is a Number data type
 * 2. Input will need to be split by digit since each character gets processed individually
 * 
 * Ideas:
 * 1. Append to string
 * 2. Array index can be matched to String counterpart [0, 1, 2] (each # corresponds to index)
 * 3. Single digit Number + 48 === equivalent character code
 * 
 */

/** D/A
 * 
 * Number --> String
 * Number --> Map to array --> Return String
 * 
 * Algorithm
 * 1. Take Number input and split into individual integers
 * - intArray = integers split by digit
 * - 
 * - 
 * 2. Append into an Array in order
 * 3. For each integer, convert to string equivalent
 * 4. Append String equivalent to variable/array
 * 5. return variable or joined array
 * 
 * 
 * 1. splitInteger
 * I: integer
 * Output: array of integers split into individual components
 * 
 * Rules: String method conversions are not allowed
 * 
 * 12 --> [1, 2]
 * 345 --> [3, 4, 5]
 * 
 * numStr = []
 * divisions = 0
 * num = 10;
 * currentNum = num
 * currentNum >= 10 ? --> true
 * currentNum / 10 --> 1 --> divisions += 1 (currentNum === 1) 
 * currentNum >= 10 ? --> false -->
 * numStr push Math.floor(currentNum) --> numStr === [1], divisions === 1
 * 
 * currentNum = num
 * 
 * currentNum - (numStr[0] * 10**divisions) --> 0
 * 
 * 123
 * arr = []
 * 123 / 100 = 1.23
 * 123 - 100 = 23
 * 23 / 10 = 2.3
 * 23 - 20 = 3
 * 
 * arr = []
 * Number / 10**length - 1
 * arr.push Math.floor(result)
 * 
 * number = number - (arr[iteration - 1] * floor)
 * 
 * Input: Number
 * Output: first digit of Number && 'place'
 * 
 * 123 --> 1 && 100
 * 20 --> 2 && 10
 * 514124 --> 5 && 100000
 * 
 * Starting with place
 * 
 * Number input
 * 
 * Ims: How many multiples of 10 to get to first digit
 * 
 * 100 / 10 --> 10 / 10 --> 1
 * How many multiples of 10 before we are below 10
 * 
 * num = 100
 * 1. Take num
 * --count = 0
 * 2. Divide num by 10
 * 3. Add 1 to count
 * 3. Check if num is < 10
 * -IF so break loop
 * 4. Repeat above until < 10
 * 5.Return count
 * 
 * num = 100
 * 1. num / 10**count - 1
 */


function integerToString(int) {
  let numLength = countNumLength(int);
  let intArray = splitInteger(int, numLength);
  return intArray.map(num => convertToString(num)).join('');
  
}

function splitInteger(int, numLength) {
  let numArr = [];
  let iteration = 1;

  while (iteration <= numLength) {
  let zeroes = 10**(numLength - iteration);
  numArr.push(Math.floor(int / zeroes));
  int = int - (numArr[iteration - 1] * zeroes);
  iteration++
  }

  return numArr;

}



/**Num 1234
 * 1234 -countNumLength --> 4 -
 * 1234 -trim --> 1 -- buildPlaceVal --> 1000
 * 1234 - 1000 = 234
 * repeat
 * 
 * 1. Count length of number
 * 2. Trim first digit
 * 2. Add to array
 * 3. Rebuild into placevalue
 * 4. Subtract placevalue from num
 * 5. repeat until all end of digits
 * 
 */


function integerToStringTwo(int) {
  intArray = buildNumArray(int);
  return intArray.map(num => convertToString(num)).join('');
}


function buildNumArray(int) {
  let numArr = [];
  let numLength = countNumLength(int);
  let currentNum = int;

  do {
    let digit = trimFirstNum(currentNum, numLength)
    numArr.push(digit);
    currentNum -= buildPlaceValue(digit, numLength);
    numLength -= 1;
    
  } while (numLength > 0)

  return numArr;

}

function convertToString(int) {
  return String.fromCharCode(int + 48);
}

function trimFirstNum(num, numLength) {
  let firstDigit = Math.floor(num / 10**(numLength - 1));
  return firstDigit
}

function buildPlaceValue(firstDigit, placeValue) {
  return firstDigit * (10**(placeValue - 1));
}

function countNumLength(int) {
  let length = 1;
  while (int >= 10) {
    int = int / 10;
    length +=1;
  }

  return length;
}


const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToStringThree(num) {
  let result = '';

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    result = NUMS[remainder] + result;
  } while (num > 0);

  return result
  
}

//500
//While number > 0
//remainder = number % 10
//number = Math.floor(number / 10)
//result = NUMS[remainder] + result


// console.log(integerToString(4321));        // "4321"
// console.log(integerToString(0));           // "0"
// console.log(integerToString(5000));        // "5000"
// console.log(integerToString(1234567890));  // "1234567890"

// console.log(integerToStringTwo(4321));        // "4321"
// console.log(integerToStringTwo(0));           // "0"
// console.log(integerToStringTwo(5000));        // "5000"
// console.log(integerToStringTwo(1234567890));  // "1234567890"

// console.log(integerToStringThree(4321));        // "4321"
// console.log(integerToStringThree(0));           // "0"
// console.log(integerToStringThree(5000));        // "5000"
// console.log(integerToStringThree(1234567890));  // "1234567890"

/**
 * 
 */

module.exports = {integerToString}