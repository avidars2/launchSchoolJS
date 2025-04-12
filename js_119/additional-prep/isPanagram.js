/**
P: Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not.
Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence 
"Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.

 */
/**
 * I: String
 * O: Boolean if string is pangram, false if it is not
 * 
 * Explicits:
 * 1. Pangram are sentences that contain every letter of alphabet at least once
 * 2. Case does not matter here
 * Implicits:
 * 1. Only alphabetical characters are relevant, rest can be filtered out
 * 
 * Ideas:
 * 1. If string has less than 26 alphabetical characters, return false
 * 
 * 'abcdef'
 * 'a big clock did every fish'
 * a - 1
 * b - 1
 * c - 1
 * d - 1
 * e - 1
 * f - 1
 * All characters found can be measured by having each
 * character lowercase by a key in an object, then the length of
 * the object keys measured to see if it is 26
 * 
 * DS:
 * 1. Objects
 * ---Keep track of character keys
 * 2. Arrays
 * --Filter out non alphabetic characters
 * 
 * Algorithm:
 * 1. Split string into characters and filter out nonAlphabetic characters
 * 2. Iterate through modified array
 * 3. For each alphabetic element, add as a key to an object
 * 4. Once at end of array, measure object keys length
 * 5. If less than 26, return false, else return true
 * 
 * 
 */

function isPangram(str) {
    return Object.
    keys(str.split('').
    filter(el => {
        if (el.toLowerCase() >= 'a' && el.toLowerCase() <= 'z') {
            return true;
        } else return false;
    }).
    reduce((acc, el) => {
        acc[el] = (acc[el] ?? 0) + 1;
        return acc;
    }, {})).
    length >= 26

}

const p = console.log;
p(isPangram("The quick, brown fox jumps over the lazy dog!") === true);
p(isPangram("The slow, brown fox jumps over the lazy dog!") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

//Solved in 9.5 minutes