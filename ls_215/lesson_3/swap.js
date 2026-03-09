/**
 * Problem:
 * Write a function called swap, that takes a string as an argument and returns a new string
 * The alphabetic characters haven taken the place of the numeric characters and vice versa
 * 
 * I: String
 * O: String with alphabetic characters and numeric characters swapped
 * 
 * E:
 * 1. Return a new string
 * 2. Swap alphabetic and numeric characters
 * 3. Always a string argument
 * 4. Other character types should be added to the new string as-is
 * 5. Empty string input should return empty string output
 * I:
 * 1. The alphabetic
 * 
 * Test:
 * '1a2b3c' --> 'a1b2c3'
 * 1a --> a1
 * 2b --> b2
 * 3c --> c3
 * 
 * --When an alphabetic character is next to numeric characters, is that when they swap?
 * 
 * abcd123 --> 123dabc
 * --Are we swapping sets/groups of characters
 * ----Each alphabetic/numeric character, seems to find the first non alpha/numeric character sequentially
 * -----And those positions are swapped
 * 
 * Given a string of characters/numbers/symbols/nothing, traveling through the string from left to right
 * For each alphabetic/numeric character, find the next character of the opposite type.
 * If found, swap the positions of these characters.
 * Ignore symbols and leave them in place.
 * If there are no more characters of the opposite type when searching, break iteration.
 * 
 * CQ:
 * 1. What is considered numeric?
 * 2. Is alphabetic literally just a-z?
 * 3. What about symbols or foreign characters?
 * 4. What happens if the input is an empty string or the wrong data type?
 * 5. What happens if there is no argument?
 * 6. Can there be multiple arguments?
 * 7. What does it mean to swap a character
 * 
 * Edge cases:
 * 
 * DS:
 * 1. Strings/arrays
 * 2. Arrays are good for swapping in place rather than trying to "mutate" a string
 * 
 * A:
 * 1. Check if length === 0, if so return empty string "abcd123efg"
 * 2. Given a string, split it into an array of individual elements ['a', 'b',...'g']
 * 3. For each individual element, recognize if it's an alphabetic character or numeric ['a' --> alphabetic]
 * 4. If it falls into one of those categories, start iterating through the remainder of the array to look for the first instance
 * --of the opposite type of character ['b', 'c'...]
 * --If found, swap the positions of these characters [..1] --> [1,... 'a']
 * ----Alternative to swapping positions, is to add these elements to a new array at the specified index
 * ----And then for each character we get, if we are skipping over it, we add them to that array as well | newArr [0, 4]
 * --Upon each swap, add index to a list
 * --Before performing a swap, check array of indices to see if the swap has already occurred
 * ----If so, skip iteration
 * 5. EITHER: Join the new array, or join the current mutated array
 * 
 * 
 * Note:
 * 1. What happens if we get to the same characters that we just swapped towards the end?
 * ----Have a way to know what characters we already swapped
 * 
 */

function swap(str) {
  if (str.length === 0 || typeof str !== 'string') return str;
  let indicesUsed = [];

  let strArr = str.split('');

  for (let charIdx in strArr) {
    console.log(charIdx)
    if (indicesUsed.includes(Number(charIdx))) continue;
    let char = strArr[charIdx]
    if (isAlpha(char)) {
      //Slice remainder of array and find index of next valid position
      // let newStrArr = strArr.slice(charIdx);
      // let numIdxToSwap = newStrArr.findIndex((char) => isNum(char));
      // if (numIdxToSwap === null) break;
      // indicesUsed.push(numIdxToSwap);
      // [strArr[charIdx], strArr[numIdxToSwap]] = [strArr[numIdxToSwap], strArr[charIdx]];

      let result = swapByStrategy(charIdx, strArr, indicesUsed, isNum);
      if (result === null) break;


    } else if (isNum(char)) {
      let result = swapByStrategy(charIdx, strArr, indicesUsed, isAlpha);
      if (result === null) break;
    } else continue;
    
  }
  console.log(strArr.join(''));

  return strArr.join('');

  // ...
}

function swapByStrategy(charIdx, strArr, indicesUsed, strategy) {
  // console.log(indicesUsed)

  let numIdxToSwap = strArr.findIndex((char, idx) => {
    if (indicesUsed.includes(idx) || idx <= Number(charIdx)) return false;
    return strategy(char)
  });

  // console.log(numIdxToSwap);
  if (numIdxToSwap === -1) return null;
  indicesUsed.push(Number(numIdxToSwap), Number(charIdx));
  // console.log('pre-swap', strArr, `indices used`, indicesUsed);

  [strArr[charIdx], strArr[numIdxToSwap]] = [strArr[numIdxToSwap], strArr[charIdx]];
  // console.log('post-swap', strArr);
  return true;

}

function isAlpha(char) {
  return char.match(/[a-z]/i);

}

function isNum(char) {
  return char.match(/[0-9]/);
}

console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("abcd123efg") === "123dabcefg"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("ab1CD23") === "12a3DbC"); // true
console.log(swap("") === ""); // true

console.log(swap("12a") === "a21"); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1") === "1"); // true