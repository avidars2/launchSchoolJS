// Character Index Map:
// Create a function that accepts a string and builds an object mapping each character to an array of its indices in the string. This helps track where each character occurs.
// Example:

console.log(charIndices("banana"));
//=> { "b": [0], "a": [1, 3, 5], "n": [2, 4] }

function charIndices(str) {
  //I: String
  //O: Object mapping each character to an array of indices
  return str.split('').reduce((acc, char, idx) => {
    (acc[char] = acc[char] || []).push(idx)
    // console.log(acc[char])
    // console.log(char, acc);
    // if (!acc[char]) {
    //   acc[char] = [idx];
    // } else acc[char].push(idx);
    return acc;
  }, {})


}