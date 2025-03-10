/**
 * Write a function that rotates the last count 
 * digits of a number. To perform the rotation, 
 * move the first of the digits that you want to 
 * rotate to the end and shift the remaining digits 
 * to the left.
 */

/**
 * I: Number, count
 * O: Rotated number
 * 
 * 735291, 1 --> 735291
 * 735291, 2 --> 735219 //1 and 9 were swapped
 * 735291, 3 --> 735912 //291 912, last 3 digits were rotated
 * 735291, 4 --> 732915 //Last 4 digits were rotated
 * 735291, 5 --> 752913
 * 735291, 6 --> 352917
 * 
 * Explicits:
 * 1. Function rotates last 'count' digits of a number
 * 2. Move the first of the digits that you want to rotate
 * to the end and shift the remaining digits to the left
 * 
 * Implicits:
 * 1. 1 has no affect since it would just be rotating the last number
 * 2. The 'count' can be sliced, manipulated, and then re-appended
 * 
 */

/**
 * D
 * 
 * Number --> String --> array --> string --> Number
 * 
 * A
 * 0. Convert to string then to array
 * 1. Take off 'count' amount of digits from end
 * 3. Rotate
 * 4. Append back to end
 * 5. Convert back to Number
 * 6. Return number
 */

function rotateRightmostDigits(num, count) {
  let numArr = String(num).split('');
  let sliceStart = numArr.length - count;

  let rotatedSegment = rotateArray(numArr.slice(sliceStart));

  let newArr = numArr.slice(0, sliceStart).concat(rotatedSegment);

  console.log(Number.parseInt(newArr.join('')));
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

rotateRightmostDigitsMod(735291, 1);      // 735291
rotateRightmostDigitsMod(735291, 2);      // 735219
rotateRightmostDigitsMod(735291, 3);      // 735912
rotateRightmostDigitsMod(735291, 4);      // 732915
rotateRightmostDigitsMod(735291, 5);      // 752913
rotateRightmostDigitsMod(735291, 6);      // 352917
