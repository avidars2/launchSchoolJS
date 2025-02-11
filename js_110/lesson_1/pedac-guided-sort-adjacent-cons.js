/**Sort strings by most adjacent consonants
 * Given an array of strings, return a new array where the strings are sorted to the highest number
 *  of adjacent consonants a particular string contains. If two strings contain the same highest number
 *  of adjacent consonants they should retain their original order in relation to each other. 
 * Consonants are considered adjacent if they are next to each other in the same word or if 
 * there is a space between two consonants in adjacent words.

Note that for this problem, the letters 'y' and 'w' should be treated as consonants.
 */

/** Problem
 * 
 * Inputs: Array of strings
 * Outputs: New array with strings sorted by which
 * words have the highest number of consonants
 * 
 * Re-statement:
 * Given an array of strings, calculate the # of adjacent consonants per string, return a new array
 * with the strings ordered by # of adjacent consonants
 * 
 * Explicits:
 * -Consonants are considered adjacent if they are next to each other
 * in the same word, or if there is a space between two consonants in adjacent words
 * -Input is an array of strings
 * -Output is a new array of strings
 * - Output array have the strings sorted in an order, by which string contains
 * the highest number of adjacent consonants
 * -If two strings hve the same number of adjacent consonants, they should retain
 * the original order in relation to each other
 * -'y' and 'w' are consonants
 * 
 * Implicits:
 * -Spaces should be removed when counting consonants adjacent
 * -A system to consider order of strings will be necessary
 * -Only adjacent consonants affect sort order, not single consonants
 * 
 * 
 * Questions:
 * 1. What order should the strings be ordered in? Ascending or descending? -->Descending, highest amount first
 * 2. How should empty arrays be handled? -->Return empty although strings from tests seem to be always there and non empty
 * 3. How are adjacent consonants counted? IS 'xx' considered 1 or 2 adjacent consonants?
 * What about 'xyx'? Is that 1 or 3? --> From test cases, this would be 3
 * 4. 
 * 
 * Visual model:
 *   3? or 1?     1 or 2?
 * [xxy]        [xxax]
 * 
 * ['xx', 'xyx', 'xxax'] --> ['xyx', 'xx', 'xxax']?
 * 
 * Ideas:
 * -Loop structures to build positions based on array count
 * 
 */

/** Test cases
 * 
let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']
 * 
 * 
 * Confirm, rules:
 * 
 * Given an array of strings, evaluate the strings within the array for
 * adjacent consonants. Adjacent consonants are counted even if there is a space
 * between words. Order the strings in a new array, in descending order of # of consonants.
 * If two words have the same # of consonants, order them in the
 * same order they were relative to their previous position.
 * 
 * Words are ordered descending from highest to lower consonant adjacents counted
 * 'xxx' is 3 consonants adjacent, 'xx' is 2
 * 
 */

/** Data structures & Algorithm
 * Input will be an Array of strings
 * Output will ben Array of strings
 * 
 * ['xza', 'xzb']
 * 
 * Arrays will be used, as will Strings and the methods associated
 * 
 * String primitives will be worked with
 * Array objects will be worked with
 * 
 * 2nd: 'xzz'  1st: 'xzzy'
 * 
 * ['xzzy', 'xzz']
 * 
 * ['xx', 'aab', 'yxxy']
 * 
 * 
 * [[xx, 2], ['aab', 0], ['yxxy, 4]]
 * 
 * {
 * xx: 2,
 * aab: 1,
 * yxxy: 4
 * }
 * 
 * xx, yyy, zzzz, d
 * 
 * xx --> how many adjacents? --> 2
 * xx --> remove spaces --> count adjacents --> #
 * {
 * xx: 2
 * }
 * 
 * Algorithm:
 * 1. Evaluate each string in Array
 * 2. For each string, remove spaces
 * 3. Count adjacent consonants
 * 4. Add string into list with both string and # of adjacents as value
 * 5. Repeat for all strings
 * 6. Sort strings by # of consonants descending
 * --When going through list, make sure to go in order so that strings with equal # of consonants get put in proper order
 * -- I could put the string always after a string with same # of consonants
 * 7. Append ordered list into Array and return
 * 
 * 3-Expanded:
 * 'xx' count first character, if constant, count second, repeat until vowel/end of string then add count to a counter
 * 'xyx'
 * 'xaxxyax'
 * 
 * Check character --> If C, note and check next --> vowel, reset --> consonant, note and check --> consonant, note and add 2 --> 
 * new consonant, note and add 1 more --> vowel, reset --> consonant, note and check next --> end of string
 * 
 * 0. Counter = 0;
 * 1. Iterate through characters
 * 2. Phase 1: If character is consonant, check next character, if also consonant, add 2 to a counter and start Phase 2. Else, skip to next character
 * 3. Phase 2: Check subsequent characters until vowel/end of string. For each consonant, add 1 to counter
 * 4. If vowel is hit, repeat from Phase 1
 *
 * 
 *  4-Expanded:
 * 1. Object, add string as property, and count as value
 * 
 * 5-forEach/for loop can be used since iteration
 * 
 * 
 * ['xx', 2], ['xxx', 3], ['tt', 2], ['zz', 2]
 * 
 * xxx3
 * xx2
 * tt2
 * 
 * 
 * 6-Expanded:
 * 1. Convert object to array of arrays
 * 2. Sort Arrays by second value
 * --Look at each array's second value, put array in
 * --Check next array, get value, search from bottom/end of main array to compare values
 * --If lower or equal, put after, else compare to next array. If reach top, add array
 */

// * Given an array of strings, evaluate the strings within the array for
// * adjacent consonants. Adjacent consonants are counted even if there is a space
// * between words. Order the strings in a new array, in descending order of # of consonants.
// * If two words have the same # of consonants, order them in the
// * same order they were relative to their previous position.
// * 
// * Words are ordered descending from highest to lower consonant adjacents counted
// * 'xxx' is 3 consonants adjacent, 'xx' is 2

/** Coding
 *  * Algorithm:
 * 1. Evaluate each string in Array
 * 2. For each string, remove spaces
 * 3. Count adjacent consonants
 * 4. Add string into list with both string and # of adjacents as value
 * 5. Repeat for all strings
 * 6. Sort strings by # of consonants descending
 * --When going through list, make sure to go in order so that strings with equal # of consonants get put in proper order
 * -- I could put the string always after a string with same # of consonants
 * 7. Append ordered list into Array and return
 * 
 * 3-Expanded:
 * 0. Counter = 0;
 * 1. Iterate through characters --> Convert to array and loop through
 * 2. Phase 1: If character is consonant, check next character, if also consonant, add 2 to a counter and start Phase 2. Else, skip to next character
 * 3. Phase 2: Check subsequent characters until vowel/end of string. For each consonant, add 1 to counter
 * 4. If vowel is hit, repeat from Phase 1
 * 
 *  * 6-Expanded:
 * 1. Convert object to array of arrays
 * 2. Sort Arrays by second value
 * --Look at each array's second value, put array in
 * --Check next array, get value, search from bottom/end of main array to compare values
 * --If lower or equal, put after, else compare to next array. If reach top, add array
 */


function sortStringsByConsonants(arrayOfStrings) {
  let strConsonants = {};
  arrayOfStrings.forEach(str => strConsonants[str] = trimAndCountConsonants(str));
  
  let arrWithCounts = Object.entries(strConsonants);
  arrWithCounts.sort(compareSecondElement);
  
  // let finalArray = [];
  let finalArray = arrWithCounts.map(arr => arr[0])

  // for (let arr = (arrWithCounts.length - 1); arr >= 0; arr--) {
  //   finalArray.push(arrWithCounts[arr][0]);
  // }

  return finalArray
  // return arrWithCounts;

}

function trimAndCountConsonants(str) {
  str = str.split(' ').join('');
  let counter = 0;
  let phase = 0; //0 means no consonants, 1 means first consonant, 2 means consonant streak
  let vowelList = ['a', 'e', 'i', 'o', 'u'];
  
  str.split('').forEach((char) => {
    if (phase === 0 && !vowelList.includes(char)) { //If no consonants found & first consonant was found
      phase = 1;
      // console.log(str, phase, char, counter);
    } else if (phase === 1 && !vowelList.includes(char)) {
      phase = 2;
      counter+= 2;
      // console.log(str, phase, char, counter);
    } else if (phase === 2 && !vowelList.includes(char)) {
      counter++;
      // console.log(str, phase, char, counter);
    } else {
      phase = 0;
      // console.log(str, phase, char, counter);
    }

  })

  return counter;


}

function compareSecondElement(arr1, arr2) {
  return arr2[1] - arr1[1];

}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']