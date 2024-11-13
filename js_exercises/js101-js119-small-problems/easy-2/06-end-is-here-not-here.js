/** Problem
 * Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.
 * 

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
 */

/** P
 * Input: 'String with at least two words'; in this context a word is any sequence of non-blank character
 * Output: Second to last word
 * 
 * A blank character delineates a word
 * a b --> words would be 'a' and 'b'
 * a  b --> words would still be 'a' and 'b'
 * 
 * Input will always conta in at least two words
 * The next to last word in the string passed as an argument is what gets returned
 * 
 * Mental model:
 * Create a function, that given a string of at least two words, with a word being any sequence of non-blank characters, return
 * the second to last word
 */

/**E
 * 
 * Input: 'a b'
 * Output: 'a'
 * 
 * Input: 'a b c'
 * Output: 'b'
 * 
 * Input: '0 hg  1  2'
 * Output: 1
 * 
 */

/**DA
 * Input data structure: Strings
 * 
 * Algorithm:
 * 1. Create a function that takes 1 argument
 * 2. Array = Separate string into individual strings by blank spaces and assign
 * 3. Return second to last element of array
 * 
 */

function penultimate(sentence) {
  words = sentence.split(' ').filter(word => word );
  return words[words.length - 2];
}

console.log(penultimate('a b'));
console.log(penultimate('a b c'));
console.log(penultimate('0 hg  1  2'));

/**Further exploration
 * Function that retrievers middle word of a phrase/sentence.
 * What edge cases need to be considered?
 * How to handle without ignoring them?
 * 
 * Write a function that retrurns the middle word of a phrase or sentence
 * It should handle all edge cases
 * 
 */

/**P
 * Input: 'String'
 * Output: 'Middle word of string'
 * 
 * The WORD must be returned, not letters from two words that align in the middle but whatever is determined
 * to be the middle word
 * 
 * So even sentences 'This is four words' would need to return either 'is' or 'four'. It could also return 'Even sentence, two middles: is, four'
 * A sentence with one word, would have it's middle word be that one. So 'Hi. would return 'Hi'
 * A blank sentence would return nothing or return a message saying 'No middle word'
 */


/**E
 * 
 * Input: ''
 * Output: 'No middle word'
 * 
 * Input: 'This is four words'
 * Output: 'Even number of words, middle words are: is & four'
 * 
 * Input: 'One'
 * Output: 'One'
 * 
 */

/**DA
 * 
 * Data structure: String
 * 
 * Algorithm:
 * 1. Create a function taking one argument
 * 2. Array = Separate string into individual strings by blank spaces and assign
 * 3. Array = Filter array for any blank spaces and assign
 * 4. If array length === 0, return 'Blank. No middle word'
 * 5. Position number = Divide and round down array length by 2 (So 5 --> 2, 6 --> 3, 7 --> 3)
 * 6. If array length === even number, return string in array[position number - 1] & array[position number] 
 * 7. If array length === odd number, return string array[position number]
 * 
 * 
 * 'hi i am sally may' 5/2 rd = 2, str[2] === 'am'
 * 'hi i am sally may jr.' 6/2 rd = 3, str[3 - 1] === am, str[3] === sally
 * 'one two three four five six sev eight', 8/2 rd = 4, str[4 - 1] === 'four', str[4] === five 
 * 'hi i' 2/2 = 1, str[1 - 1] === 'hi', str[1] === 'i' 
 * 
 */

function middleWord(sentence) {
  let wordsArray = sentence.split(' ').filter(word => word);

  if (wordsArray.length === 0) return 'Blank sentence. No middle word.';

  let middlePosition = Math.floor((wordsArray.length / 2));

  if (wordsArray.length % 2 === 0) {
    return `Even length sentence. The two middle words are '${
      wordsArray[middlePosition - 1]}' and '${wordsArray[middlePosition]}'`;
    } else {
      return `Middle word: '${wordsArray[middlePosition]}'`;
    }
}

console.log(middleWord(''));
console.log(middleWord('Solo'));
console.log(middleWord('Just two'));
console.log(middleWord('We have three'));
console.log(middleWord('This is four words'));
console.log(middleWord('This sentence is five words'));
console.log(middleWord('This new sentence is six words'));
console.log(middleWord('gi  ju po 1   w')); //Middle word is 'po'