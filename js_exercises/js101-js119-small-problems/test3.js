// Write a function, negate, that converts all “yes” words to "no" and "no" words to "yes" in a sentence. 
//The comparison for "yes" and "no" should be case insensitive."yes" and "no" should be negated even if ending with ., ?, ,, or !. -- Avi

/**
 * Negate function
 * 
 * I: String of words
 * O: String with yes --> no's and no's --> yes's
 * 
 * Explicits:
 * 1. Comparison is case insensitive so Yes === yes
 * 2. Even if there is punctuation, word should be discovered
 * 
 * Implicits:
 * 1. Punctuation tends to be on end of word not beginning
 * 2. Nooo is not mentioned as no
 * 
 * 
 * 'yes no yes no' --> no yes no yes
 * yes! no! no, yes. --> no! yes! yes, no.
*/


/**
 * DS:
 * Strings --> arrays
 * 
 * Algorithm:
 * 1. Break up string into words by spaces
 * 2. Iterate through array
 * 3. For each string, check for punctuation and remove temporarily
 * --,yes --> , yes
 * ---check for non alphabetic characters in string up to word, append in 'beginning variable'
 * --check for characters until hit non alphabetic character 'append to word variable'
 * --check for non alphabetic characters in string until end of string append to end variable
 * --Check if word is yes or no
 * 
 * 5. If so, replace with opposite
 * 6. Append with punctuation
 * 7. return back to array
 * 8. return combined string
 * 
 */

function negate(str) {
  let strArr = str.split(' ').
  map(str => {
    return separatePunctuation(str);
  }).join(' ');

  // console.log(strArr);

  return strArr
}

function separatePunctuation(word) {
  let beginning = findNonAlphabeticChars(word);
  // console.log(beginning.length);
  let midWord = findAlphabeticChars(word.slice(beginning.length));
  let end = findNonAlphabeticChars(word.slice(beginning.length + midWord.length));

  if (midWord === 'yes') {
    midWord = 'no';
  } else if (midWord === 'no') {
    midWord = 'yes';
  } else if (midWord === 'Yes') {
    midWord = 'No'
  } else if (midWord === 'No') {
    midWord = 'Yes'
  }

  return beginning + midWord + end;

}

function checkIfAlphabetical(char) {
  return (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z');
}

function findNonAlphabeticChars(str) {
  let nonAlphabet = '';
  for (let idx = 0; idx < str.length; idx++) {
    if (!checkIfAlphabetical(str[idx])) {
      nonAlphabet += str[idx];
    } else break;    
  }
  return nonAlphabet;
}

function findAlphabeticChars(str) {
  // console.log(str);
  let alphabet = '';
  for (let idx = 0; idx < str.length; idx++) {
    if (checkIfAlphabetical(str[idx])) {
      alphabet += str[idx];
    } else break;    
  }
  // console.log(alphabet)
  return alphabet;
}

// separatePunctuation("Yes,")
// Test cases
// console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
// console.log(negate("no way, yes way!")); // "yes way, no way!"
// console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
// console.log(negate("No, I do not know!")); // "Yes, I do not know!"

let str = 'hellolllolllolllolllollo'

//How many l's and o's are there?
let letters = {};
str.split('').forEach(char => letters[char] = (letters[char] || 0) + 1);
console.log(letters);