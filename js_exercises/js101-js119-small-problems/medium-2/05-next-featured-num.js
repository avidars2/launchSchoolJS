/**
 * Featured Number:
 * 1. Odd # that is a multiple of 7
 * 2. All of it's digits occur exactly once each
 * 
 * 49 is featured (Each digit occurs once, and it is a multiple of 7)
 */

/**
 * Input: Number
 * Output: Next featured number higher than input
 * 
 * 12 --> 21
 * 12 --> 7 + 7 = 14 but that is even, 7 + 7 + 7 = 21 
 * (Odd, multiple of 7, each digit appears once)
 * 
 * Explicits:
 * 1. Identify featured numbers
 * 2. Return featured number higher than input value
 * 
 * Implicits:
 * 1. Number will have to be checked for duplicates
 * 2. Featured number must be higher than input value
 * 3. A way to determine if number is featured will be needed
 * 4. A way to determine number above starting is needed
 *
 * 5. If largest, return string message
 * 6. If Number passed as argument is featured, go to next
 * 
 * 12 --> 21
 * 20 --> 21
 * 21 --> 35 
 * 
 */

/**
 * Data structures:
 * Numbers --> Use Numbers to get multiples of seven until above
 * Input value
 * Convert to string or array --> Check for repeat characters
 * 
 * Algorithm:
 * 1. Take input number
 * ---Current multipler = Math.floor(num / 7)
 * 2. Get a multiple of 7 higher than input number
 * --while (Multiplier * 7 < num) {
 * return mo7
 * }
 * 3. Check multiple of 7 if it is odd
 * --Is it odd?
 * --If no, get new multiple
 * 4. Check multiple of 7 if it has any repeat characters
 * --Break up multiple into a string and then array
 * --Check for repeats in array
 * --If repeats, get new number
 * 5. If so, repeat 2-4
 * 6. Return number
 */

{

function featured1(num) {
  let multiplier = [Math.floor(num/ 7)];
  if (num === 9876543201) {
    console.log('There is no possible number that fulfills those requirements.');
    return 'There is no possible number that fulfills those requirements.'
  }

  // let currentNum = 11;
  // while (!noRepeats(currentNum)) {
  //   currentNum = getNewOddMultipleOfSeven(multiplier, num);
  //   // multiplier[0]++;

  // }

  let currentNum = getNewOddMultipleOfSeven(multiplier, num);

  console.log(currentNum);
  return multiplier[0] * 7;



}

function getNewOddMultipleOfSeven(multiplier, startingNum) {
  if (startingNum === 9876543201) return startingNum;
  let currentNum = multiplier[0] * 7;
  while (true) {
    multiplier[0] += 1;
    currentNum = multiplier[0] * 7;
    if (noRepeats(currentNum) && (currentNum % 2 === 1) && currentNum > startingNum) {
      break;
    }
    // console.log(multiplier);
  }

  return multiplier[0] * 7;

}

function noRepeats(num) {
  let numArr = [...`${num}`];
  // console.log(numArr)
  //Iterate through num array
  //Check if num array includes next iteration
  //If so, return false
  //Else return true
  let foundNumbers = [];

  for (let idx in numArr) {
    // console.log(foundNumbers);
    if (!foundNumbers.includes(numArr[idx])) {
      foundNumbers.push(numArr[idx]);
    } else {
      // console.log(`${num} is false`)
      return false;
    }
  }
  
  return true;
}

}

/**
 * Featured number:
 * 1. Odd number that is a multiple of 7
 * and all digits occur exactly once each
 */

/**
 * I: Integer as argument
 * O: Next featured number greater than integer
 * (or error if none available)
 * 
 * Explicits:
 * 1. Featured number is a multiple of 7
 * --is odd
 * --each digit occurs only once
 * 2. Function takes integer argument
 * 3. Output should be higher than input
 * 4. Should give message if no featured # remaining
 * 
 * Implicits:
 * 1. Decimals are not included in test cases
 * 2. 
 * 
 * Rules:
 * 1. A multiple of 7
 * 2. Odd
 * 3. Each digit is unique
 * 4. Integer
 * 5. Doesn't equal input value
 * 
 * 12 --> 14 --> 21
 * 
 * CQ:
 * 1. Can negative featured numbers exist?
 * 2. Can decimals be a part of featured numbers?
 */

/**
 * Data structures:
 * Numbers --> Numbers
 * Number --> Array
 * 
 * Algorithm:
 * 1. Take an input integer
 * 2. Divide by 7, rounded down to get multiple to start
 * 3. Multiply 7 by multiplier + 1
 * 4. Check if number meets conditions of being odd
 * && has unique digits
 * 5. Repeat 3 & 4 until 4 is true
 * 6. Return number
 * Find next featured number
 * 
 * --4 expanded; unique digits
 * --Convert number to string, then to array
 * --Iterate over array
 * --Create empty array digits = []
 * --Check if element is in digits array
 * --If not, add to digits array
 * -- If so, return false
 */

function featured(num) {
  let baseMultiplier = Math.floor(num / 7);
  let currentFeatured;
  if (num === 9876543201) {
    console.log('There is no possible number that fulfills those requirements.');
    return 'There is no possible number that fulfills those requirements.';
  }

  do {
    baseMultiplier++;
    currentFeatured = baseMultiplier * 7;

  } while (!checkIfFeatured(currentFeatured))
  
  console.log(currentFeatured);
  return currentFeatured;

}

function checkIfFeatured(num) {
  return (num % 2 === 1) && hasUniqueDigits(num);

}

function hasUniqueDigits(num) {
  let isFeatured = true;
  let digits = [];
  String(num).split('').forEach(char => {
    if (digits.includes(char)) {
      isFeatured = false;
    } else {
      digits.push(char);
    }
  })
  return isFeatured;
}


{

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

}

