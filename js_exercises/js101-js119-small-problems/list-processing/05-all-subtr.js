/**
 * Write a function that returns a list of all substrings of a string. Order the returned 
 * list by where in the string the substring begins. 
 * This means that all substrings that start at index position 0 should come first, 
 * then all substrings that start at index position 1, and so on. 
 * Since multiple substrings will occur at each position, 
 * return the substrings at a given index from shortest to longest.
 */


/**
 * I: string
 * O: List of all substrings of a string
 * 
 * Explicits:
 * 1. Function takes input as string
 * 2. Returns an array of substrings
 * 3. Returned array is ordered by where in string substring begins ('abc') --> ['a', 'ab', 'abc', 'b', 'bc', 'c']
 * 4. All substrings that start at index position 0 come first, then substrings that start at index position 1, and so on
 * 5. For the substrings starting at an index position, order from shortest to longest of the given starting index
 * 
 * Implicits:
 * 1. Processing a starting index and pushing to an array will automatically order the list
 * 2. The starting position of each loop will increase once the end of a loop is reached
 * 
 * 'ab' --> ['a', 'ab', 'b']
 * 
 * 
 */

/**
 * DA
 * 
 * String --> [] --> loop through starting point of array, and upon completion loop through next starting point of array
 * [x, y, z] --> Process x through z with leadingSubstr function, then process y through z, then z
 * 
 * Algorithm:
 * 1. Write function that takes string
 * 2. Pass string into leadingSub function
 * 3. Push elements of result into new Array
 * 4. Move up one index position
 * 5. Repeat 2-4 until last index position is processed
 * 6. Return new array
 */

function substrings(str) {
  let newStrArray = [];
  for (let startingChar = 0; startingChar < str.length; startingChar++) {
    leadingSubstrings(str.slice(startingChar)).forEach(leadSubStr => newStrArray.push(leadSubStr));
  }
  console.log(newStrArray);
  return newStrArray
}

function substrings(str) {
  let newStrArray = [];
  for (let startingChar = 0; startingChar < str.length; startingChar++) {
    newStrArray = newStrArray.concat(leadingSubstrings(str.slice(startingChar)));
  }
  console.log(newStrArray);
  return newStrArray
}

function substrings3(str) {
  return str.split('').map((_, idx) => {return leadingSubstrings(str.slice(idx))}).reduce((finalArr, subarr) => {return finalArr.concat(subarr)}, []);
}

function substrings4(str) {
  return str.split('').reduce((acc, _, idx) => acc.concat(leadingSubstrings(str.slice(idx))), []);
}


// substrings('abcde');
console.log(substrings3('abcde'));
console.log(substrings4('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]


function leadingSubstrings(str) {
  return str.split('').reduce((acc, char, idx) => {
    acc.push((acc[idx - 1] ?? '') + char);
    return acc
  }, [])
}

module.exports = { substrings4 }