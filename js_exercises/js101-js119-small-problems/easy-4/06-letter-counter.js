/**
 * Problem
 * -Write problem in own words
 * -Inputs/Outputs
 * -Explicits/Implicits
 * -Clarifying Questions
 * -Diagramming/visualizing
 * 
 * 
 */

/**
 * Write a function that takes a string consisting of zero or more 
 * space separated words and returns an object that shows the 
 * number of words of different sizes.

Words consist of any sequence of non-space characters.

Input: String
Output: Object showing number of words of different sizes

Explicits:
1. Words are any sequence of non-space characters
2. Input is a string with zero or more space separated words
3. An object is returned with number of words of different sizes

Implicits:
1. A new object will have to be returned
2. Words will need to be split at spaces and counted for length
3. An object will need to have Number lenghts as properties, counts as values

 */

/**
 * Examples
 */
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

/** D/A
 * D: String going in
 * String --> Array of words --> word length as Object Key and count as value
 * 
 * Algorithm:
 * Get words
 * 1. String input
 * 2. Break string into words array by splitting it by spaces
 * 
 * Count length of words
 * 1. For each word in array, count length
 * 
 * Check if word length key exists in Object
 * 1. If so, up count by 1
 * 2. If not, add key and add count
 * 
 * 
 */

function wordSizes(str) {
  let wordLengthObject = {};

  !str || str.split(' ').
    forEach(word => {
      addWordLengthToObject(word, wordLengthObject);
    })

  console.log(wordLengthObject);
  return wordLengthObject;

}

function addWordLengthToObject(word, obj) {
  obj[word.length] = obj[word.length] || 0;
  obj[word.length] += 1;
}