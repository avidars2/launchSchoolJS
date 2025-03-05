/**
 * Write a function that takes a string argument and returns a list of substrings of that string. 
 * Each substring should begin with the first letter of the word, 
 * and the list should be ordered from shortest to longest.
 */
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/**
 * W
 * I/O
 * Explicits/Implicits
 * CQ
 * Diagramming
 * 
 * I: String argument
 * O: List of substrings of that string
 * 
 * Explicits:
 * 1. Function takes a string argument
 * 2. The return value is a list of substrings in an array
 * 3. Each substring should begin with the first letter of the word
 * 4. List should be ordered from shortest to longest
 * 
 * Implicits:
 * 1. Substrings range from first letter of word to the entire word, so 'a' has substring 'a'
 * 2. The word can be iterated through, with each additional character added
 * 
 * 1. How are empty strings handled?
 * 2. What happens if the string has a space?
 * 
 * 'a' --> ['a']
 * 'bab' --> ['b', 'ba', 'bab'];
 */

/**
 * DA
 * String can be broken into an array of elements
 * Elements can be appended into an array
 * 
 * 1. Split string into array of characters //'a' //'bab'
 * 2. Iterate through array //['a'] //['b', 'a', 'b']
 * 3. For each character, append to new variable 'Str' //['a'] --> 'a' //['b'] --> 'b', ['a'] --> 'ba', ['b'] --> 'bab'
 * 4. On each iteration, push 'Str' to new Array //'a' --> ['a'] // ['b', 'ba'. 'bab']
 * 5. Return new array
 * 
 */

// function leadingSubstrings(str) {
//   let newStr = str.split('').reduce((newStr, char, index) => {
//     newStr.push((newStr[index - 1] === undefined ? '' : newStr[index - 1]) + char)
//     return newStr;
//   }, [])

//   console.log(newStr)
//   return newStr
// }

// console.log(leadingSubstrings('hi'))


function leadingSubstrings(str) {
  return str.split('').reduce((acc, char) => {
    let arrLength = acc.length
    acc.push((acc[arrLength - 1] ?? '') + char)
    console.log(acc)
    return acc
  }, [])
}

// console.log(leadingSubstrings('hi'))

function leadingSubstrings(str) {
  return str.split('').reduce((acc, char, idx) => {
    acc.push((acc[idx - 1] ?? '') + char)
    console.log(acc)
    return acc
  }, [])
}