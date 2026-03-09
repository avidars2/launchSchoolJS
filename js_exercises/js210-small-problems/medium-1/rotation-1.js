/**
 * P:
 * 
 * I: Array input
 * O: New array with first element moved to end
 * 
 * E:
 * 1. Do not mutate original array
 * 2. Return undefined if input is not an array
 * 3. Return an empty array if input is an empty array
 * I:
 * 
 * T:
 * 
 * CQ:
 * 1. Should returned empty array be a new array or same empty array
 * 2. How do we handle objects as elements - deep copy or is shallow copy okay?
 * 
 * 
 * DS:
 * 1. Array
 * 
 * A:
 * 
 */


function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
}


// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []

// // return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined


// // the input array is not mutated
// const array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]


/**
 * I: Two numbers
 * O: Rotation 
 * 
 * Algorithm:
 * 1. Coerce number to string then to array
 * 2. Slice beginning to position
 * 3. slice position to end
 */


function rotateRightmostDigits(base, positiion) {
  let numStrArr = `${base}`.split('');

  let starting = numStrArr.slice(0, -positiion);
  let ending = numStrArr.slice(-positiion);

  let rotatedDigit = Number(starting.concat(rotateArray(ending)).join(''))
  // console.log(rotatedDigit);
  return rotatedDigit;


}
// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917


function maxRotation(num) {
  //735291
  //3 52917
  //32 9175
  //321 759
  //3215 97
  //32157 9

  let numLength = `${num}`.length;
  let baseNum = num;

  for (let rotations = numLength; rotations > 0; rotations--) {
    baseNum = rotateRightmostDigits(baseNum, rotations);
    // console.log(baseNum);
  }

  console.log(baseNum);
  return baseNum;

}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845