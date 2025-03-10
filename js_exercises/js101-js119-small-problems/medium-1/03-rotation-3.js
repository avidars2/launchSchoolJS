/**
 * Take the number 735291 and rotate it by one digit to the left, getting 352917. 
 * Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. 
 * Keep the first two digits fixed in place and rotate again to get 321759. 
 * Keep the first three digits fixed in place and rotate again to get 321597. 
 * Finally, keep the first four digits fixed in place and rotate the final two 
 * digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the 
maximum rotation of that integer. You can (and probably should) use the 
rotateRightmostDigits function from the previous exercise.
 */


/**
 * I: Number
 * O: Maximally rotated Number
 * 
 * Explicits:
 * 1. Rotate to get maximum rotation of original number
 * 2. Integer is taken as argument
 * 3. Maximum rotation Number is returned
 * 
 * Implicits:
 * 1. Each digit is iterated over
 * and for each iteration, a rotation occurs
 * After rotation, the iterated digit is fixed
 * and locked from further rotation
 * 2. Rotate the entire Number, slice everything but the first digit
 * Rotate again, repeat until end
 * 3. Some type of loop will be needed
 * 
 * CQ: Will a Number always be passed?
 */

/** Data structures
 * Number --> String
 * 
 * Algorithm
 * 1. Take a Number
 * 2. Rotate the Number, save index 0
 * 3. Take every digit besides the first and slice
 * 4. Rotate that Number, save index 0
 * 5. Repeat until end
 * 
 * Step 1 and 2 can be done via rotate function, and the first number can be saved and sliced
 * 
 * 123 --> 231 --> shift 2 and push into new array --> pass 31
 * 
 * 123 --> ['1', '2', '3'] --> ['2', '3', '1'] --> shift, newArr = ['2'] oldArr = ['3', '1']
 * --> ['1', 3'] --> shift, newArr = ['2', '1'] oldArr = ['3'] -->
 * ['3'] --> shift, newArr = ['2', '1', '3'] oldArr = []
 * 
 * Use modified rotate function
 * 
 * Pass Number to rotate function
 * Get returned array
 * Shift value and push into new array
 * 
 * 
 */

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

/**I have a rotation function that takes the count
 * 
 * Algorithm:
 * 1. Get length of number
 * 3. Call rotateRight(number, length - iteration)
 * 3. Save new number
 * 4. Repeat 2-3 on new number
 * 
 * 
 * 
 */

function maxRotation(num) {
  let newNumber = num;
  let numLength = String(num).length;

  for (let digit = 0; digit < numLength; digit++) {
    newNumber = rotateRightmostDigits(newNumber, numLength - digit);
  }

  console.log(newNumber);
  return newNumber;

}

{//Trimmed solution
  function maxRotation(num) {
    let numLength = String(num).length;
    for (let digit = 0; digit < numLength; digit++) {
      num = rotateRightmostDigits(newNumber, numLength - digit);
    }
    return num;
  }
}

function rotateRightmostDigits(num, count) {
  let numArr = String(num).split('');
  let sliceStart = numArr.length - count;

  let rotatedSegment = rotateArray(numArr.slice(sliceStart));

  let newArr = numArr.slice(0, sliceStart).concat(rotatedSegment);

  return Number.parseInt(newArr.join(''));
}

function rotateArray(arr) {
  if (Array.isArray(arr) && arr.length === 0) return [];

  if (Array.isArray(arr)) {
    let newArr = [...arr];
    newArr.push(newArr.shift());
    return newArr;
  }

  return undefined;
}

{ //Alternate solution
  function maxRotation(num) {
    let numLength = String(num).length;
    let rotatedNumArr = [];
    let currentNum = num;

    for (let digit = 0; digit < numLength; digit++) {
      let rotatedNumberArray = rotateRightmostDigitsMod(currentNum); //123 --> ['2', '3', '1'];
      // console.log(rotatedNumberArray)
      rotatedNumArr.push(rotatedNumberArray.shift())
      currentNum = rotatedNumberArray.join('');
    }
    console.log(Number(rotatedNumArr.join('')));
    return Number(rotatedNumArr.join(''));
  }

  function rotateRightmostDigitsMod(num, count) {
    let numArr = String(num).split('');
    let sliceStart = numArr.length - count;

    let rotatedSegment = rotateArray(numArr.slice(sliceStart));

    let newArr = numArr.slice(0, sliceStart).concat(rotatedSegment);

    return newArr;

  }
}
