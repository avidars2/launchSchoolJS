/**
 * P:
 * 
 * I: string representing a word
 * O: Boolean true or false
 * 
 * E:
 * - Can only spell words that do not use both letters from any given block
 * - Word string as argument
 * - return true if word can be spelled using set of blocks
 * - Return false if otherwise
 * - letters are case-insensitive when applying the rules
 * I:
 * - Blocks come in pairs of two letters
 * - None of the blocks seem to have repeating characters
 * 
 * T:
 * B:O X:K D:Q
 * 
 * BXD --> Ok
 * 
 * BOX --> Not ok, B and O can't both be used
 * 
 * [B:O, X:K, D:Q, C:P, N:A]
 * B
 * 
 * [X:K, D:Q, C:P, N:A]
 * BA
 * 
 * [X:K, D:Q, C:P]
 * 
 * BAA --> No A found, return false
 * 
 * 
 * CQ:
 * - Will the input always be a string? - Yes
 * - What should an empty input output? Null? False? -empty return null
 * - 
 * 
 * Given a collection of blocks, and a word, check if the word is just letters
 * If so, for each letter, look for a corresponding block. If found, take it out the list
 * If not found, return false;
 * If reach end of string, return true
 * DS:
 * 1. Array 
 * 2. Boolean
 * 
 * A:
 * 1. Check if input is valid
 * 2. Create a collection of blocks
 * 3. Iterate through each character of the string
 * 4. For each element, find a block with that letter
 * 5. If that block exists, knock it out of the collection
 * 6. If it doesn't exist, return false
 * 7. Return true
 * 
 * 
 */

function isBlockWord(str) {
  if (typeof str !== 'string') return null;
  if (str.length === 0) return null;
  if (str.match(/[^a-z]/i)) {
    console.log(false);
    return false;
  }

  const blocks = 
`B:O   X:K   D:Q   C:P   N:A   G:T   R:E   F:S   J:W   H:U   V:I   L:Y   Z:M`.split('   ')

  // console.log(blocks);

  for (let charIdx = 0; charIdx < str.length; charIdx++) {
    let char = str[charIdx];
    let blockFoundIdx = blocks.findIndex((block) => block.includes(char.toUpperCase()));
    if (blockFoundIdx === -1) {
      console.log(false);
      return false;
    }
    blocks.splice(blockFoundIdx, 1);
  }

  console.log(true);
  return true;



}

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('BOX');      // false
isBlockWord('1jest');      // false
isBlockWord('^jest');      // false
isBlockWord('Bxd');      // true
isBlockWord('jest');       // true