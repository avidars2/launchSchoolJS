/**
 * I: Array, delimiter, last word conjunction
 * O: String displaying options
 * 
 * [1, 2,3] --> '1, 2, or 3'
 * [1, 2, 3], '; ' --> '1; 2; or 3'
 * [1, 2, 3], '; ', 'and' --> '1; 2; and 3'
 * [] --> ''
 * [1] --> '1'
 * 
 * Explicits:
 * 1. Write a function that takes 3 arguments
 * 2. Array, delimiter, conjunction
 * Implicits:
 * 1. If only an array is passed, ',' and 'or' are default
 * 2. The conjunction only appears when there are 2 or more elements in array
 * 3. Delimiter only apears when there are 3 or more elements
 * 4. Delimiter when it does appear, is only on every element except the last
 * 5. Conjunction only appears before the last element
 * 6. Delimiter requires a space after it
 */
/**
 * Algorithm:
 * 1. IF array length 1 or less, return string on it's own
 * 2. IF array length is 2, return string with just conjunction
 * 3. IF array length is 3 or more, incorporate delimiter and conjunction
 * 
 * 3 - expanded; start by just adding delimiter
 * 1. Iterate through array
 * 2. Concat element to string
 * 3. Concat delimiter to string
 * 4. Repeat til last element of array
 * 
 * 4-cont
 * 4. If last element of array, concat conjunction and space before element
 */

function joinOr(arr, delimiter=', ', conjunction='or') {

 if (arr.length <= 1) return String(arr);
 if (arr.length === 2) return `${arr[0]} ${conjunction} ${arr[1]}`;

 let newStr = '';
 let lastIndex = String(arr.length - 1);
 for (let choices in arr) {
  if (choices === lastIndex) {
    newStr += `${conjunction} ${arr[choices]}`;
    break;
  }
  newStr += `${arr[choices]}${delimiter}`;
 }
 return newStr;
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"
