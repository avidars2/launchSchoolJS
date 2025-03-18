

/**
 * Write a function that, given a string of text (possibly with punctuation and line-breaks), 
 * returns an array of the top-3 most occurring words, 
 * in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
Examples:
"In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income."

--> ["a", "of", "on"]


"e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

--> ["e", "ddd", "aa"]


"  //wont won't won't"

--> ["won't", "wont"]
Bonus points (not really, but just for fun):
Avoid creating an array whose memory footprint is roughly as big as the input text.
Avoid sorting the entire array of unique words.
 */

/**
Input: String
Output: Array of top-3 most occurring words in descending order of # of occurrences

Explicits:
1. Word is string of letters, optionally containing one or more apostrophes
2. Apostrophes can appear at the start, middle or end of a word
3. Non-alphabetic & " ' " characters are not part of the word and should be treated as whitespace
4. Matches of words should be case-insensitive, final resulting array should be lowercased
5. Ties may be broken arbitrarily //??
6. If text contains fewer than 3 unique words, either top-2 or top-1 words should be returned
or empty array if text contains no words

Implicits:
1. Apostrophes must always be touching a word to be a part of the word
2. Words with apostrophes are considered different than the same word without
an apostrophe
3. Single letter characters are considered words

CQ:
1. What happens if words appear equal amount of times?
2. What does 'ties may be broken arbitrarily' mean?
3. Words are separated by spaces

'h h h i' --> ['h', 'i']
'hh hH aa aAa Bbb bbB bBb' --> ['bbb', 'hh', 'aa'] //Assume we'll use order of appearance

'hello' hello' --> ['hello'', 'hello']

*/

/**
 * Data structures:
 * I: String
 * O: Array
 * 
 * 
 * 1. Analyze string
 * 2. Identify words
 * --Words are a string of letters
 * --optionally containing one or more apostrophes
 * --matches are case insensitive so 'A' and 'a' are the same
 * 3. Count words by frequency

 * 4. Append top 3 words to a list
 * --If < 3 unique words, append top-2 or top-1
 * --If empty array, return empty array
 * 
 * 
 * 
 * 1. Split word string by space into array
 * 2. Transform list so that all letters are lowercase
 * 3. Transform list so that if string contains >= 1 alphabetical
 * character, non alphabetical & non apostrophes are removed from
 * the string
 * 4. Filter array for words
 * --Check for strings with at least one alphabetical character
 * 5. Create object containing list of words
 * --Iterate through array of words
 * --If word not in object, add to object with value 1
 * --If in object, add 1 to property
 * 6. Return new array with 3 most frequently occurring words
 * //Look at word object
 * //Sort by highest to lowest frequency
 * //Loop through and push words into new array until
 * //new array length is 3 or end of word object
 * 
 */

function topThreeWords(text) {
  let wordObj = {};
  let topThreeWords = [];
  text.split(' ').
  map(str => {
    return stringHasAlphabet(str) ? 
    removeNonWordElements(str).toLowerCase(): 
    str;
  }).
  filter(str => stringHasAlphabet(str)).
  forEach(word => {
    wordObj.hasOwnProperty(word) ? 
    wordObj[word] += 1 :
    wordObj[word] = 1;
  })

  let wordArr = Object.entries(wordObj).sort((a, b) => {
    return b[1] - a[1];
  });

  console.log(wordArr);
  for (let arr = 0; arr < wordArr.length; arr++) {
    topThreeWords.push(wordArr[arr][0]);
    if (topThreeWords.length === 3) break;
  }

  console.log(topThreeWords);
  return topThreeWords;
}

let ex1 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
let ex2 = "Wont WOn't wOn't";
let ex3 = "won't==='=="
let ex4 = "won't . hi 'Dd' won't==='=="
let ex5 = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.
`
topThreeWords(ex5)

function stringHasAlphabet(str) {
  return str.split('').some(char => isAlphabetic(char));
}

function removeNonWordElements(str) {
  let filteredWord = str.split('').filter((char, idx) => {
    if (isAlphabetic(char)) return true;
    if (char === "'" &&
      (isAlphabetic(str[idx - 1]) || isAlphabetic(str[idx + 1]))
    ) {
        return true;
    }

    return false;
  }).join('');

  // console.log(filteredWord);
  return filteredWord;
}

function isAlphabetic(char) {
  if (char === undefined) return false;
  return (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z');
}