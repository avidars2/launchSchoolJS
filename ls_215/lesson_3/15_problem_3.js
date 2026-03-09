/**
 * P: 
 B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
 * 
 * I: String input
 * O: Boolean true based on if word can be spelled using the set of blocks,
 * false if can't
 * 
 * E:
 * 1. Can only use 1 letter per block
 * 2. Can only use each block once
 * 3. Letters are considered case insensitive
 * I:
  1. Can only spell words that use a letter from each block once


  * T:
 * 
 * 
 * 
 * CQ:
 * 1. Will the input always be a string?
 * 2. What should we do if input is an empty string?
 * 3. Will string only contain letters or can it contain numbers/symbols?
 * 4. What happens if there is no argument or wrong argument type?
 * 
 * Assumption:
 * 1. Only string input
 * 2. Empty string input should return false
 * 3. String may contain symbols/numbers
 * 
 * Given a string, check if it only has letters,
 * if so, for each letter in string, check if there is a block that
 * matches that letter. If so, remove block from list and go to next character
 * in string.
 * 
 * If at any point a character does not have a matching block, return false
 * Else return true;
 * 
 * Ideas:
 * 1. Includes
 * 2. Array of blocks
 * 3. Filtering used blocks/ removing used blocks
 * 
 * Edge:
 * 
 * 
 * DS:
 * 1. Array, string
 * --Potentially use objects?
 * A:
 * 1. Check if input is valid (string with only letters)
 * 2. split string into individual characters
 * 3. Copy the block list
 * 4. For each character, check if any block in list contains the character
 * 5. If so, splice that block out and go to next in list
 * ---If false, return false;
 * 6. return true
 * 
 */

const blocks = `B:O   X:K   D:Q   C:P   N:A G:T   R:E   F:S   J:W   H:U V:I   L:Y   Z:M`.
 split(' ').filter(char => char);

console.log(blocks);

function isBlockWord(word) {
  if (word.length === 0) return (console.log(false) || false);
  if (word.match(/[^a-z]/gi)) return (console.log(false) || false);
  let lowerStrArr = word.toUpperCase().split('');
  let blockCopy = blocks.slice();

  let result = lowerStrArr.every(char => {
    let blockPos = blockCopy.findIndex(block => block.includes(char));
    // console.log(blockPos);
    if (blockPos === -1) return false;
    blockCopy.splice(blockPos, 1);
    return true;
  })

  console.log(result);
  return result;

}

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('B@TCH');      // false
isBlockWord('1234');      // false
isBlockWord('BXQGR') //True
isBlockWord('') //false
