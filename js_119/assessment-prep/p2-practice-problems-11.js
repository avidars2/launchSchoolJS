/**
 * Create a function that takes a nonempty string as an argument and returns an array consisting of a string and an integer. 
 * If we call the string argument s, the string component of the returned array t, and the integer component of the returned 
 * array k, then s, t, and k must be related to each other such that s === t * k. The values of t and k should be 
 * the shortest possible substring and the largest possible repeat count that satisfies this equation.

You may assume that the string argument consists entirely of lowercase alphabetic letters.
 */

/**
 * I: Non empty string
 * O: New array consisting of a string and an integer
 * 
 * String argument ==== [t * k]
 * 
 * Explicits:
 * 1. t and K should be the shortest possible substring and largest possible repeat count
 * that satisfies this equation
 * 
 * Implicits:
 * 1. All the string arguments are repeating in some way, and if not, the entire string is returned as 't' and k is '1'
 * 
 * Given a string, return an array containing the shortest possible substring that can be repeated to create
 * the original string 
 * 
 * 'aaaaaa' --> a repeated 6 times === original string
 * 
 * 'a', repeat string length / substring length amount of times (6), === original string ? yes
 * 
 * 'xyxy'
 * 'x' repeat string length / substring length amount of times (4) === original? No
 * 'xy' repeat string length / substring length (2) === original ? Yes
 * 
 * Decimals can happen for odd #'s, which it wouldn't work anyways so
 * If the remainder is not 0, then skip
 * 
 * Data strcutres:
 * 1. String
 * 2. Array
 * 
 * Algorithm:
 * 1. Loop through string //xyxy
 * --substr = ''
 * 2. For each character of string, build substring //xy
 * --The current character + previous characters looped through //xy
 * 3. Test if substring repeated string length / substr length === original string //xy * 2 xyxy === xyxy ? yes
 * 4. If yes, return [substring, string length / substr length]
 * 5. If no, repeat til end of string
 */

function repeatedSubstring(str) {
    let subStr = '';
    let multiplier;
    for (let idx = 0; idx < str.length; idx++) {
        subStr += str[idx];
        multiplier = str.length / subStr.length;
        if (subStr.repeat(multiplier) === str) {
            return [subStr, multiplier]
        }
    }

    return [subStr, multiplier];
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));

//Solved in 11.25 minutes