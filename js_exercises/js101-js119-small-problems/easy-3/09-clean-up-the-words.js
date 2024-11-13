/** Problems
 * Given a string that consists of some words and an assortment of non-alphabetic characters, 
 * write a function that returns that string with all of the non-alphabetic characters replaced by spaces. 
 * If one or more non-alphabetic characters occur in a row, you should only have one space in the result 
 * (i.e., the result string should never have consecutive spaces).
 * 
cleanUp("---what's my +*& line?");    // " what s my line "
 */

/** P
 * Input: String
 * Output: String with special characters removed and replaced with non-consecutive spaces
 * 
 * non-alphabet characters only get replaced with a space once until an alphabet character is registered
 * 
 * Mental model:
 * Given a string, replace any non-alphabet characters with spaces. Spaces are
 * non-consecutive meaning their may not be multiple spaces in a row. 
 * 
 */

/** E
 * 
 * Input: ' !'
 * Output: ' '; //Only one space
 * 
 * Input: '! !!hi'
 * Output: ' hi'
 * 
 */

/**DA
 * D: String input
 * A:
 * 1. Create a function that takes 1 argument
 * 2. Split string into individual characters
 * 3. Loop through characters
 * 4. SpaceTracker = 0
 * 4. newString = ''
 * 5. IF a character is non-alphabetic && spaceTracker === 0, concat a space and change space Tracker to 1
 * 6. ELSE IF character is alphabetic, concat and change space tracker to 0
 * 7. ELSE continue
 * 8. return newString
 * 
 */

function cleanUp(sentence) {
  let characters = sentence.split('');
  let wasSpaceInserted = false;
  let newString = '';

  characters.forEach(char => {
    if (!(isAlpha(char)) && (wasSpaceInserted === false)) {
      newString += ' ';
      wasSpaceInserted = true;
    } else if (isAlpha(char)) {
      newString += char;
      wasSpaceInserted = false;
  }})

  return newString;
}

function isAlpha(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}


console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
console.log(cleanUp(' !'));
console.log(cleanUp('! !!hi'));