/**
 * Write a function that takes an array of integers between 0 and 19 
 * and returns an array of those integers sorted based on the English
 *  word for each number:

zero, one, two, three, four, five, six, seven, 
eight, nine, ten, eleven, twelve, thirteen, fourteen, 
fifteen, sixteen, seventeen, eighteen, nineteen

Example:
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
 */


/** P
 * I: Array of integers between 0-19 inclusive
 * O: Array of those integers sorted based on english word for each number
 * 
 * [0, 1, 2] --> [1, 2, 0] //one, two, zero
 * 
 * Explicits:
 * 1. Function takes an array of integers as argument
 * 2. array is integers between 0-19 inclusive
 * 3. Return value is a sorted array, based on english word for each number
 * 
 * Implicits:
 * 1. Array appears to be sorted in order from 0-19
 * 2. Number values will need to be matched with english word counterparts
 * 3. Array is sorted ascending
 * 
 * CQ:
 * 1. Should a new array be returned?
 * 2. Will the integer array always be ordered?
 * 3. Can the array be shorted than 0-19?
 * 
 * 
 * 
 */

/**D
 * Array input
 * An object can be used to map english names to numeric symbols
 * The object can be iterated through to find a matching Number for sort
 * {1: one}
 * Perhaps a new array can be created with the value?
 * Perhaps during the sorting, the same array is sorted but comparison occurs through 
 * a function which references the english word
 * 
 * Ideas:
 * 1. Use a loop to create object keys
 * 
 * 
 * Algorithm:
 * 1. Take array input
 * 2. Iterate through array
 * 3. For each element, get 'english word' value
 * --Function to get english word
 * 4. Sort by comparing 'english word' values
 */

function alphabeticNumberSort(arr) {
  return arr.slice().sort((a, b) => {
    let engA = englishVersionOfNum(a);
    let engB = englishVersionOfNum(b);
    if (engA === engB) return 0;    
    return engA > engB ? 1 : -1;  
  });

}

function englishVersionOfNum2(num) {
  let englishNumsArr = `zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen`.split(', ');
  let englishNumsObj = {}

  englishNumsArr.forEach((engNum, index) => {
    englishNumsObj[index] = engNum;
  })

  // return englishNumsObj[String(num)]

}

function englishVersionOfNum(num) {
  let englishNumsArr = `zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen`.split(', ');

  return englishNumsArr[num];

}

console.log(englishVersionOfNum(5))
console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));