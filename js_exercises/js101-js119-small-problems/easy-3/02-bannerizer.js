/**Problem
 * Write a function that will take a short line of text, and write it to the console log within a box.

logInBox('To boldly go where no one has gone before.');

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+
 * 
 */

/** P
 * Input: String of text
 * Output: A banner that contains the text
 * 
 * An empty banner seems to be a minimum of two dashes wide, 3 | tall
 * The corners are made of '+''s
 * 
 * The text does not touch the side of the banner, their are two -'s that act
 * as buffers, as well as a | between the top and bottom
 * 
 * Mental Model:
 * Given a string, create a function that produces an adaptable banner around the text with
 * buffer around the edges.
 * 
 */

/** E
 * Input: ''
 * Output: +--+ (top and bottom) | (3 height)
 * 
 * 
 */

/**DA
 * Input: string, Output: strings
 * 
 * Algorithm:
 * 1. Create a function that takes one argument
 * 2. Get the length of the string
 * 3. Print out a banner frame string length + buffer of 2, with corner +
 * 4. Print out | string length amount of spaces + buffer of 2
 * 5. Print out |, space buffer of 1, string, space buffer of 1, |
 * 6. Print out banner frame string length + buffer of 2, with corner +
 * 
*/

{
/** Further exploration
 * Word wrap messages too long to fit so that they appear on multiple lines
 * but are still contained within the box
 * 
 * Input: hello there, 6
 * Output: hello 
 *         there
 * 
 * Algo:
 * 1. Given a string, if string length > maxLength
 * 2. If MaxLength <= 0 || undefined, ignore
 *    Divide string by maxLength segments
 * 3. Print maxLength lines normally
 * 4. IF line is not max length, add spaces = to max length minus line length
 * 5. 
 */
function logInBoxImproved(string, maxLength) {
  const BUFFER = 2;
  let stringSize = string.length;
  const bannerPieces = {bridge: '-', tower: '|', corner: '+'};
  let ceilingFloor = '';
  let emptyWalls = ''
  let stringBuffer = '';
  let stringSegmentsArray = [];
  let considerMax = !(maxLength <= 0) && (maxLength !== undefined)

  if (considerMax) {
    for (let stringSegment = 0; stringSegment <= stringSize; stringSegment += maxLength) {
      stringSegmentsArray.push(string.slice(stringSegment, (stringSegment + maxLength)));
    }
  } else {
    stringSegmentsArray.push(string);
  }

  for (let pieces = 0; pieces < (considerMax ? (maxLength + BUFFER) : (stringSize + BUFFER)); pieces++) {
    ceilingFloor += bannerPieces.bridge;
    emptyWalls += ' ';
  }

  for (let spaces = 0; spaces < (BUFFER / 2); spaces++) {
    stringBuffer += ' ';
  }


  console.log(`+${ceilingFloor}+`);
  console.log(`|${emptyWalls}|`);
  stringSegmentsArray.forEach(stringSegment => {
    if (stringSegment.length === maxLength) {
      console.log(`|${stringBuffer}${stringSegment}${stringBuffer}|`);
    } else if (considerMax) {
      console.log(`|${stringBuffer}${stringSegment + (" ".repeat(maxLength - stringSegment.length))}${stringBuffer}|`);
    } else {
      console.log(`|${stringBuffer}${stringSegment}${stringBuffer}|`);
    }
  })
  console.log(`|${emptyWalls}|`);
  console.log(`+${ceilingFloor}+`);

}

logInBoxImproved('a');
}

// function logInBox(string) {
//   const BUFFER = 2;
//   let stringSize = string.length;
//   const bannerPieces = {bridge: '-', tower: '|', corner: '+'};
//   let ceilingFloor = '';
//   let emptyWalls = ''
//   let stringBuffer = '';

//   for (let pieces = 0; pieces < (stringSize + BUFFER); pieces++) {
//     ceilingFloor += bannerPieces.bridge;
//     emptyWalls += ' ';
//   }

//   for (let spaces = 0; spaces < (BUFFER / 2); spaces++) {
//     stringBuffer += ' ';
//   }


//   console.log(`+${ceilingFloor}+`);
//   console.log(`|${emptyWalls}|`);
//   console.log(`|${stringBuffer}${string}${stringBuffer}|`);
//   console.log(`|${emptyWalls}|`);
//   console.log(`+${ceilingFloor}+`);

// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');