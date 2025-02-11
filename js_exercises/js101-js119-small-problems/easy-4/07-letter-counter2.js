

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
  let wordLength = getWordLength(word);
  obj[wordLength] = obj[wordLength] || 0;
  obj[wordLength] += 1;
}

function getWordLength(word) {
  let newWord = word.split('')
  .filter(char => { 
    return (
      (char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z')
    )
  })
  .join('');

  // console.log(newWord.length);
  return newWord.length;

}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}

/**
 * Modify above to exclude non-letters when determining
 * word size.
 * 
 * it's --> 3 length not 4
 * 
 * I: str
 * O: Object
 * 
 * Goal is to modify the code so that length is only
 * counted with letters
 * 
 * 1ww --> 2
 * wWw --> 3
 * w.'a'f --> 3
 */

/**
 * Algorithm:
 * 1. Check word for non-letter characters
 * 2. Remove non-letter characters
 * 3. Measure length of new string
 * 4. return new length
 * 
 * 1,2 --
 * Convert to array
 * Iterate through each letter
 * Filter out non-word characters
 * Return new array and join
 */