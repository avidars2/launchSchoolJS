/**
 * Write a function that takes a sentence string 
 * as an argument and returns that string with 
 * every occurrence of a 
 * "number word" — 'zero', 'one', 'two', 'three', 
 * 'four', 'five', 'six', 'seven', 'eight', 'nine' 
 * — converted to its corresponding digit character.
 */

/**
 * I: String
 * O: String with number words converted to digit form
 * 
 * Explicits:
 * 1. Takes a sentence string argument
 * 2. Returns string with every number word converted to digit counterpart
 * 
 * Implicits:
 * 1. Remainder of string including punctuation stays the same
 * 2. Program needs to be able to find word within punctuation
 * 
 * Ideas:
 * 1. Could remove punctuation
 * 
 * three. --> three --> 3
 * 
 * CQ: 
 */

/**
 * Data structures
 * String --> Number
 * three. --> three filtered --> Number
 * 
 * 'Hello five. four Hi'
 * 'Hello 5. 4 Hi'
 * 
 * Map --> Hello', ' ', 'five.' --> 5.,
 * 
 * I could slice the word:
 * str.slice(five.length) === 'five'
 * 
 * Algorithm:
 * 1. Split string into individual spaces
 * 2. Iterate through words
 * 3. For each word, check if a 'number word length' slice of the word
 * is equal to the number word
 * 4. If so, return digit form
 * else return base word
 */

wordToDigit('Please call me at five five five one two three four. Thanks.');
//"Please call me at 5 5 5 1 2 3 4. Thanks."

wordToDigit('five one')
function wordToDigit(str) {
  let numberWordLenghts = {
    one: [3, 1],
    two: [3, 2],
    three: [5, 3],
    four: [4, 4],
    five: [5, 5],
    six: [3, 6],
    seven: [5, 7],
    eight: [5, 8],
    nine: [4, 9],
  }

  let numWordArr = Object.entries(numberWordLenghts); //['one', 3], ['two', 3]
  let newStr = str.split(' ').map(word => {
    numWordArr
    .some(number => {
      //Iterate through object
      //Slice word(number[1])
      //Check if that word === number[0]
      //If so re-assign word
      //return true

      let slicedWord = word.slice(0, number[1][0]).toLowerCase();
      if (slicedWord === number[0]) {
        word = `${number[1][1]}${word.slice(slicedWord.length)}`;
        return true;
      }
      return false;
    })
  //If word.slice(numLength) === numberWord return conversion
  //
    return word;
  })

  console.log(newStr.join(' '));


}