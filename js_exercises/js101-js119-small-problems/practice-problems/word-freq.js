// Word Frequency Counter:
// Write a function that takes a sentence as input and returns an object where each key is a word (ignoring punctuation and case) and the value is the count of how many times that word appears.
// Example:

wordCount("Hello world, hello!");
//=> { "hello": 2, "world": 1 }

//I: String, O: Object
//Return object where each word (ignoring case) of string is a key, and the value is the count of how many times the word appears
function wordCount(str) {
let wordObj = {};
str.split(' ').map(word => {
  return word.split('').filter(char => (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')).join('');
}).forEach(word => wordObj[word.toLowerCase()] = (wordObj[word.toLowerCase()] || 0) + 1);

console.log(wordObj);

return wordObj;
}