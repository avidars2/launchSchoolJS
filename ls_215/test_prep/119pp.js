
/**
P: You are given an array of strings and an integer `k`. Your task is to return the first longest string consisting of `k`
consecutive strings taken from the array. n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

I: Arary of strings, and intger
O: First longest string consisting of k consecutive strings taken from the array

E:
1. If length of array = 0 return ""
--or if k > length of array return ""
--or if k <= 0 return ""
2. Return FIRST longest string consisting of 'k' consecutive strings taken from the array


I:
2. N represents how many strings to take from the array
3. N represents how many consecutive elements should be concatenated for length evaluation


CQ:
1. If two of the same word exists in an array, can they both be used if consecutive?
2. Does consecutive include looping around to the beginning of the array as well?
3. Will the input always be an array of strings or may there be other data types?
4. Do empty strings count as a consecutive string?

Given an array of strings, and a 'k' value,
find which segment of 'k' elements in a row, concatenated,
is the longest.

Return the longest combination

T:

let longestString = '';
k = 2

first slice of 2 (0, k === 2)
"zone" 4
"abigail" 7 === 11

longestString = 'zoneabigail'
longestLength = 11;

Next slice of 2 (1, k + starting (3))
abigailtheta === 12

[] length === 5

slice (4, 6) (6 would bleed out, which means slice window needs to break loop if > length)
return longest string found

On each slice, increment starting index by 1. Have ending position increment accordingly

EC:

AS:

DS:
1. Arrays
2. Numbers to track largest length found
3. STring var to track largest string found

A:
1. Do checks for valid inputs
2. Track longestString = ''
3. Start a sliding loop
---If k + starting > array.length, break loop
4. Get array slice (0, k + starting)
5. Concatenate strings and get length
6. If length >  longestStr.length, replace it and keep iterating
--else keep itearting
---slice(loopIteration, k + loopIteration)
7. return longestString


 */

function longestConsec(arr, k) {
  if (arr.length === 0 || k > arr.length || k <= 0) return "";
  let longestString = '';

  for (let arrIdx = 0; arrIdx < arr.length; arrIdx++) {
    let endSlice = k  + arrIdx;
    if (endSlice > arr.length) break;

    let wordsSlice = arr.slice(arrIdx, endSlice).join('');
    console.log(wordsSlice, longestString);
    if (wordsSlice.length > longestString.length) longestString = wordsSlice;
  }

  // console.log(longestString);

  return longestString;
}

// Test Cases
// console.log(
//     longestConsec(
//       ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
//       2
//     ) === "abigailtheta"
//   );
//   console.log(
//     longestConsec(
//       [
//         "ejjjjmmtthh",
//         "zxxuueeg",
//         "aanlljrrrxx",
//         "dqqqaaabbb",
//         "oocccffuucccjjjkkkjyyyeehh",
//       ],
//       1
//     ) === "oocccffuucccjjjkkkjyyyeehh"
//   ); // true
//   console.log(
//     longestConsec(
//       [
//         "itvayloxrp",
//         "wkppqsztdkmvcuwvereiupccauycnjutlv",
//         "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
//       ],
//       2
//     ) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
//   ); // true
//   console.log(
//     longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2) ===
//       "wlwsasphmxxowiaxujylentrklctozmymu"
//   ); // true
//   console.log(
//     longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3) ===
//       "ixoyx3452zzzzzzzzzzzz"
//   ); // true
//   console.log(
//     longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""
//   ); // true
//   console.log(
//     longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""
//   ); // true
//   console.log(
//     longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""
//   ); // true
//   console.log(
//     longestConsec(["it", "it"], 2) === "itit"
//   ); // true
//   console.log(
//     longestConsec(["it", ""], 2) === "it"
//   ); // true
//   console.log(
//     longestConsec(["", ""], 2) === ""
//   ); // true


  //Solved in 20 minutes. First 12 spent solving the wrong problem. Understood and coded in 8


let a;
/**
Implement the function/method, minimum shorten. The function shortens a sentence such that 
it will fit within the character limit set. It shortens by removing vowels in the sequence 
of a, e, i, o, and u. Start removing from the end of the sentence. If it can not be shortened to fit 
within character limit, return an empty string. Spaces don’t count for the limit.

P:
- Implement function/method, minimum shorten

I: Sentence, character limit set

O: Empty string or shortened string that is within character limit

E:
1. Spaces don't count for character limit
2. Return empty string if string cannot be shortened to fit within character limit
3. Remove vowels in sequence of a, e, i, o, u, starting from end of sentence

I:
1. Being within limit means length without spaces of string <= char limit 

T:
"Hello World", 8
"Hllo World" --> 9 chars left without space
"Hllo World"
Take away 1 O, check length again (now 8 characters)

Is length <= limit ? Yes, return string as is




CQ:
1. Will there always be 2 arguments, will the first argument always be a string?
2. Can character limit be negative? How should output be handled
3. Is the vowel removal case insensitive? 
--What happens if vowel is a word like "A"
4. What happens if there are no vowels and the sentence is already within the limit? 
--Should I just return the string as is?
5. Do all spaces not count, even if it's hundreds?

AS:
1. First input is always a string
2. All spaces don't count
3. Second argument will always be positive integer
4. Is vowel sequence case insensitive, meaning A counts and should be removed the same?
5.
EC:

DS:
1. Array for vowel sequence
2. Array for string split into array of words
3. For individual words, array of characters
--for splicing

Given a string, and a sequence of vowels
Split the string into words by space
Calculate length of all characters in that array
If length <= limit, return string as is

For list of words, loop backwards, one word at a time
For each character in a word, loop through looking for vowels sequentially, starting with 'a'
If found, remove, and update length

A:
1. If int <= 0, return ""
2. If int < string without spaces, return empty string
3. Get string split by spaces, if equal to limit, return string as is

let characterCount = ~
4. Calculatae length of all characters in array and track
5. For list of words, reverse array order, and every string within it

6. Loop through outer array, evaluating each word
--For each word, check each character if they have the starting vowel
--If so, splice it, then decrement characterCount
--Then check characterCount if <= limit
---if so, repear string and return


 */

const vowelSequence = ['a', 'e', 'i', 'o', 'u'];

function minimumShorten(str, charLimit) {
  if (charLimit <= 0) return "";
  if (charLimit > str.split(' ').join('').length) return "";
  if (charLimit === str.split(' ').join('').length) return str;

  let charCount = str.split(' ').join('').length;
  let reversedArr = reverseWordStringIntoArr(str);

  for (let vowelIdx = 0; vowelIdx < vowelSequence.length; vowelIdx++) {
    let currentVowel = vowelSequence[vowelIdx];
    let breakHere = false;
    for (let wordIdx = 0; wordIdx < reversedArr.length; wordIdx++) {
      let breakHereToo = false;
      let currentWordArr = reversedArr[wordIdx];
      // console.log(currentVowel);
      

      for (let charIdx in currentWordArr) {
        if (currentVowel === currentWordArr[charIdx]?.toLowerCase()) {
          // console.log(currentVowel, currentWordArr[charIdx], charCount)
          currentWordArr[charIdx] = null;
          charCount--;
          if (charCount <= charLimit) {
            breakHere = true;
            breakHereToo = true;
            break;
          }
        }
      }

      if (breakHereToo) break;

    }

    if (breakHere) break;
  }




  let result = repairString(reversedArr);

  if (result.split(' ').join('').length > charLimit) return ''
  return result

}

function reverseWordStringIntoArr(str) {
  return str.split(' ').reverse().map(word => word.split('').reverse());

}

function repairString(outerArr) {
  //'this is'
  //['this', 'is]
  //[['s', 'i'], ['s', 'i', 'h', 't']]

  let copy = outerArr.slice().filter(char => char !== null).map(arr => arr.reverse().join(''));
  return copy.reverse().join(' ');

}

// let x = reverseWordStringIntoArr("This is a test sentence")
// console.log(repairString(x));

// Test cases

console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
console.log(minimumShorten("Hello World", 9)); // Hllo World
console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
console.log(minimumShorten("Hello World", 7)); // Hll Wrld
console.log(minimumShorten("Short", 10)); // Short
console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""
console.log(minimumShorten("", -1)); // ""
