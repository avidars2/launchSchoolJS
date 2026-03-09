/**
 * P:
 * "nubmer words"
 * 
 * I: String input representing sentence
 * 
 * O: String input with "number words" converted to digits
 * 
 * E:
 * 1. String argument input
 * 
 * I:
 * 1. "Five" --> 5
 * 2. Preserve spaces around nubmer words and punctuation
 * 3. Empty strings or strings with no number words return same string
 * 4. Punctuation should be ignored
 * 
 * CQ:
 * 1. Are "number words" what they sound like? Are they
 * words that correspond to there base 10 digit counterpart?
 * 2. Are number words case sensitive? 
 * 3. Do we have to account for words like "sixty-seven" or just 0-9?
 * 4. What if words are mushed together such as "fivefour"?
 * 5. What about something like "five1" --> a misspelling or should that be converted?
 * 
 * T:
 * "call me at five four" --> "call me at 5 4"
 * 
 * "five" --> 5
 * 
 * ""
 * 
 * AS:
 * 1. Number words === numeric representation of alphabetic word
 * 2. Just 0-9, number words are not case sensitive
 * 3. Words meaning space delimited words so misspellings don't count
 * 
 * EC:
 * 
 * DS:
 * 1. Array --> split of words
 * 2. Strings can have word numbers identified
 * 3. Array of number words
 * 
 * Summary:
 * Given a string that may have number words,
 * where number words are english alphabetical spelling of 0-9,
 * convert number words to numeric counterpart
 * If number word has punctuation, it should still be converted
 * However if next to numbers or extra characters, don't convert
 * 
 * A:
 * 1. If string length === 0, return empty string
 * 2. Split sentence into array of words
 * 3. For each word
 * --Check if numberWords includes it
 * --If it includes it, return index of word that includes it
 * ---Inclusion means, the word, without punctuation, === a word in numberWords
 * ---Just replace the numberword, preserve punctuation
 * 4. After conversion, join array into a new string and return
 * 
 */

const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
function wordToDigit(numStr) {
  let strArr = numStr.split(' ');

  let replacedStrArr = strArr.map(word => {
    let unpunctuated = word.split('').filter(char => char.match(/[a-z]/)).join('');
    if (!numberWords.includes(unpunctuated.toLowerCase())) {
      return word;
    }

    return word.replace(unpunctuated, numberWords.findIndex(numWord => numWord === unpunctuated.toLowerCase()))

  })

  console.log(replacedStrArr.join(' '))
  return replacedStrArr.join(' ');

}

wordToDigit("five") //--> "5"
wordToDigit("") //--> ""
wordToDigit("fivefour") //--> "fivefour"
wordToDigit("~five~") //--> "fivefour"
//~five~ -->  five
//Split word into [~, f, i, v, e, ~]
//five
//Check if numberWords includes this string
//If it does, replace that part of the string with numeric version
wordToDigit("~five1") //--> "~five1"

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."