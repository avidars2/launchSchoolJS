/**
 * Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not.

Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence 
"Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.
 */
/**
 * I: String
 * O: Boolean based on string being a pangram
 * 
 * Pangrams are sentences that containe very letter of the alphabet at least once
 * 
 * 1. Explicits
 * 1. Return true if string is pangram (String contains every letter at least once)
 * 2. Case is irrelevant for this
 * 
 * Implicits:
 * 1. Abbreviation is in the strings
 * 
 * 'the'
 * t, h, e
 * T - 1
 * H - 1
 * E - 1
 * 'a' - 0
 * 'b' - 0
 * 'c' - 0
 * 
 * Ideas:
 * 1. Object of lowercase keys
 * 2. Evaluate if any value is 0, if so return false, else return true
 * 
 * Build object from alphabetical keys provided in string, and if length of 'key's array is less than 26, not a pangram
 * 
 * Data structures:
 * 1. Object to track letters
 * 2. String
 * 
 * Algorithms:
 * 1. Iterate through the string, split into array of characters
 * 2. Evaluate each element if it is alphabetical
 * --If so, add lowercase key to object and count + 1
 * --If not, skip/do nothing
 * 3. Check length of object of alphabetical keys
 * --If less than 26, return false. Else return true
 * 
 */

function isPangram(str) {
    let strArr = str.split('');
    let charObj = {};

    strArr.forEach(el => {
        el = el.toLowerCase();
        if (isAlphabet(el)) {
            charObj[el] = (charObj[el] || 0) + 1;
        }
    })

    // console.log(charObj);

    return (Object.keys(charObj).length === 26)
}

function isAlphabet(char) {
    return (char >= 'a' && char <= 'z')
}



const p = console.log;
p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);

//Solved in 8.7 minutes