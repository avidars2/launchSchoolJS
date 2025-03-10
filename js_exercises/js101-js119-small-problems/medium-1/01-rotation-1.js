/**
 * Write a function that rotates an array 
 * by moving the first element to the end of 
 * the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an 
empty array.
Review the test cases below, then implement 
the solution accordingly.
 */

/**
 * Input: Array
 * Output:New array with first element moved to end
 * 
 * Explicits:
 * 1. Return a new array with first element moved to end
 * 2. If the input is not an array, return undefined
 * 3. If the input is an empty array, return an empty array
 * 
 * [1, 2, 3] --> [2, 3, 1]
 * 
 * CQ:
 * 1. In new array, are nested objects new as well or copies?
 */

/**
 * Data structures
 * Array is being manipulated, could be 1 or 2d from example cases but that has no affect
 * 
 * Algorithm:
 * 0. If array with length 0, return []
 * 1. If array, Spread a copy of array into new array
 * 2. Shift first element then push it to end of new array
 * 3. Return new array
 * 4. If not array, return undefined
 */

function rotateArray(arr) {
  if (Array.isArray(arr) && arr.length === 0) return [];

  if (Array.isArray(arr)) {
    let newArr = [...arr];
    newArr.push(newArr.shift());
    return newArr;
  }

  return undefined;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]