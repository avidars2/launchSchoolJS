/**
 * Takes array of strings
 * Returns array of the same string values
 * but with all vowels a, e, i, o u, removed
 */

/**
 * I: Array of strings
 * O: Transformed array of strings with vowels from strings removed
 * 
 * ['abc'] --> ['bc']
 * ['aeiou'] --> ['']
 * 
 * Explicits:
 * 1. Return array of same string values, but vowels removed
 * 2. Input is array of strings
 * 
 * Implicits:
 * 1. Case does not matter for vowels
 * 2. Empty string should be returned if all values are vowels
 * 
 * CQ:
 * 1. Are all inputs alphabetical? Or strings in the array?
 * 
 * DS:
 * Array of strings in, array of strings out
 * 
 * Iterate over strings in array, convert strings to arrays and filter
 * 
 * Algorithm:
 * 1.Iterate over outer array
 * 2. Iterate over string in array
 * 3. Select non-vowel elements
 * 4. Return to new array
 * 5. Return new array
 * 
 */
{
function removeVowels(arr) {
  let result = arr.map(str => {
    return str.split('').
    filter(noVowels).
    join('');
  });
  console.log(result);
  return result;
}

function noVowels(char) {
  let vowels = 'aeiou'.split('');
  return !(vowels.includes(char.toLowerCase()));
}
}

function removeVowels(arr) {
  return arr.map(str => str.split('').filter(el => !'AEIOUaeiou'.includes(el)).join(''));
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]