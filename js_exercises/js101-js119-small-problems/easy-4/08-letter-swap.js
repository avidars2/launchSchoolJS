/**P
 * 1. Write problem in own words
 * 2. Input output
 * 3. Exlicits
 * 4. Implicits
 * 5. Clarifying questions
 * 6. Diagramming
 * 
 * Input: String of words, separated by spaces
 * Output: New string with first and last letters swapped for each word
 * 
 * Explicits:
 * 1. Every word contains at least one letter
 * 2. String will always contain at least one word
 * 3. Each string contains only words and paces
 * 4. No leading or trailing spaces or repeated spaces
 * 
 * Implicits:
 * 1. No empty strings
 * 2. One letter words are unaffected
 * 3. Function returns new string
 * 
 * CQ:
 * 1. Will there be numbers? Is a1 a word?
 * 
 * 'a' --> 'a'
 * 'ab' --> 'ba'
 * 'ab ba' --> 'ba ab'
 * 
 * 
 */

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

/**
 * DA
 * 1. String --> Array of characters --> String
 * 1. String --> New string
 * 
 * Algorithm:
 * 1. Take string
 * 2. Break up into words
 * 2. For each word, Register first letter and last letter of word
 * 3. Swap positions of first letter and last letter
 * 4. Return new word to string
 * 
 * 2. String.split(' ')
 * 
 * 2. Get first character and last character of word
 * 
 * 3. -char1 = firstChar
 * -char2 = lastChar
 * word[0] = char2
 * word[length - 1] = char1
 * 
 */

function swap(str) {
  let words = str.split(' ');
  let newStr = words.map(word => swapFirstAndLastLetters(word));

  console.log(newStr);
  return newStr

}

function swapFirstAndLastLetters(word) {
  let first = word[0];
  let last = word[word.length - 1];
  let newWord = word.split('');
  newWord[0] = last;
  newWord[word.length - 1] = first;
  return newWord.join('');
}
