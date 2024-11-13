/** Problem
 * Write a function that takes a string argument and returns 
 * a new string that contains the value of the original string 
 * with all consecutive duplicate characters collapsed into a single character.
 * 
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
 */

/** P
 * Input: String (potentially with consecutively repeated characters)
 * Output: String with consecutive duplicates removed
 * 
 * dddaba --> daba
 * ddoo --> do
 * yaya --> yaya
 * 
 * Mental model:
 * Given a string, search for consecutive letters that are the same
 * and return a string with the consecutive duplicates removed.
 */

/**E
 * Input: ddaa
 * Output: da
 * 
 * Input: tritrii
 * Output: tritri
 * 
 * Input: a
 * Output: a
 * 
 * 
 */

/**DA
 * Data structures: Input and output are Strings
 * 
 * Algorithm:
 * 1. Create a function taking one argument
 * 2. array = [string split into individual characters]
 * 3. newString = ""
 * 3. For each element of the array...
 *  Assign first element to CurrentCharacter and append to newString
 * 4. IF the next element === currentCharacter, then ignore and go to next element
 * 5. IF the next element !== currentCharacter, assign it to currentCharacter and append to newString
 * 6. Combine elements to form a new string and return
 * 
 * ddaa --> ['d', 'd', 'a', 'a']
 * currentChar = 'd'
 * newString = 'd'
 * nextChar === 'd'
 * nextChar === currentChar so ignore
 * 
 * currentChar = 'd'
 * newString === 'd'
 * nextChar === 'a'
 * nextChar != currentChar so append to newString and assign to currentChar
 * 
 * currentChar === 'a'
 * newString === 'da'
 * nextChar === 'a'
 * nextChar === currentChar so ignore
 * 
 * newString = 'da'
 * 
 *  * Algorithm:
 * 1. Create a function taking one argument
 * 2. array = [string split into individual characters]
 * 3. newString = ""
 * 3. For each element of the array...
 *  Assign first element to CurrentCharacter and append to newString
 * 4. IF the next element === currentCharacter, then ignore and go to next element
 * 5. IF the next element !== currentCharacter, assign it to currentCharacter and append to newString
 * 6. Combine elements to form a new string and return
*/


function crunch(string) {
  let stringArray = string.split('');
  let newString = "";
  let currentCharacter = '';

  stringArray.forEach((letter) => {
    if (currentCharacter !== letter) {
      newString += letter;
      currentCharacter = letter;
    }
  })

  console.log(newString);
  return newString;

}

{
  function crunchy(string) {
    let newString = string.match(/[a-z]{1, 2}/);
  
    console.log(newString);
    return newString;
  }

  crunchy('ddaa')
}


crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""