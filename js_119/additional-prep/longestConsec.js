/**
P: You are given an array of strings and an integer `k`. Your task is to return the first longest string consisting of `k` 
consecutive strings taken from the array. n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

 */

/**
 * I: Array of strings && integer
 * O: Longest string consisting of 'k' consecutive strings taken from the array
 * 
 * Expliciits:
 * 1. n being the length of the string array, if n = 0 or k > n or k <= 0 return ''
 * If second argument is larger than array, or array is empty or second argument is 0 or less, return an empty string
 * 
 *       ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2

"abigailtheta" 

zone + abigail forms string 8? chars long

zone theta might be 7
zone form might be 6
and so on

What if it was 3 instead of 2?

Iterate through array, slicing k length at a time, starting from current
iteration index + (k)
0, 2
zone, abigail

let totalLengthStr = ''
For each slice of two, measure length of concatenation of all strings
If string length higher than current total, re-assign totalLengthStr

Keep iterating until index + k === array length

Implicits:
1. if second argument is 1, jsut return the longest string in the array

Data structures:
1. Array [array of strings]

Algorithm:
1. let totalLengthStr = ''
2. Iterate through array
3. Slice string from current index to k
4. Concat all strings in slice and measure length
5. If length > totalLengthStr length, re-assign
6 Repeat until index + k >= arr.length
7. Return str
 */

function longestConsec(strArr, k) {
    if (strArr.length === 0 || k > strArr.length || k <= 0) return ''

    let totalLengthStr = ''
    for (let idx = 0; idx <= strArr.length - k; idx++) {
        let currentWords = strArr.slice(idx, idx + k);
        let combinedStr = currentWords.reduce((acc, el) => acc + el);
        // console.log(combinedStr);
        if (combinedStr.length > totalLengthStr.length) {
            totalLengthStr = combinedStr;
        }
    }
    // console.log(totalLengthStr)
    return totalLengthStr
}

// // Test Cases
console.log(
    longestConsec(
      ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
      2
    ) === "abigailtheta"
  );
  console.log(
    longestConsec(
      [
        "ejjjjmmtthh",
        "zxxuueeg",
        "aanlljrrrxx",
        "dqqqaaabbb",
        "oocccffuucccjjjkkkjyyyeehh",
      ],
      1
    ) === "oocccffuucccjjjkkkjyyyeehh"
  ); // true
  console.log(
    longestConsec(
      [
        "itvayloxrp",
        "wkppqsztdkmvcuwvereiupccauycnjutlv",
        "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
      ],
      2
    ) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
  ); // true
  console.log(
    longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2) ===
      "wlwsasphmxxowiaxujylentrklctozmymu"
  ); // true
  console.log(
    longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3) ===
      "ixoyx3452zzzzzzzzzzzz"
  ); // true
  console.log(
    longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""
  ); // true
  console.log(
    longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""
  ); // true
  console.log(
    longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""
  ); // true

  //Solved in 20 minutes. First 12 spent solving the wrong problem. Understood and coded in 8