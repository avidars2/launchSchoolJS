function solution1() {

/**
 * Given a non-empty string check if it can be constructed by
 * taking a substring of it and appending multiple copies of the
 * substring together. You may assume the given string consists
 * of lowercase English letters only.
 * 
 * Example 1:
 * Input: 'abab'
 * Output: True
 * Explanation: It's the substring 'ab' twice.
 * 
 * Example 2:
 * 
 * Input: 'aba'
 * OutputL False
 * 
 * I: Non-empty string
 * O: Boolean true or false
 * 
 * True if a substring can be repeated to create the original string
 * False if a substring can't be repeated to create the original string
 * 
 * Explicit rules:
 * 1. Lowercase characters only
 * 2. Non-empty string input
 * 
 * Implicit:
 * 1. I can start evaluating from the first character
 * 2. A substring must be able to be repeated to replicate the entire string
 * aba --> false because a repeating or ab repeating can't replicate the string
 * 3. Odd length strings, unless every character is the same, return false
 * 
 * Ideas:
 * 
 * Start at first character, repeat entire length
 * Max substring is up to half length of string, as at least one repeat is needed
 * 
 * abab, max substring to check would be 'ab', because 'aba' repeated would be over the string length
 * 
 * 'abab'
 * Test first character
 * 
 * 'a', repeat string length / subStr.length amount of times
 * 'a' repeats 4 times to get 'aaaa'
 * 
 * Compare to original string 'abab' to see a mismatch
 * 
 * Iterate a greater substring of 'ab'
 * Repeat string length / subStr.length (2) to get 2 repeats
 * 'ab'.repeated twice === 'abab' which === 'abab' so I can return true
 * 
 * 'a
 * 
 * 
*/

/**
 * Data structures:
 * 1. Strings
 * 2. Arrays
 * 
 * Algorithm:
 * 1. Get length of string
 * 2. Get length of half of string
 * 3. Build a string to test
 * -Taking the first character and repeating it appropriately
 * 4. Check if the test works
 * 5. If not, add character to test
 * 6. Repeat test
 * 7. Repeat until match is found, or test length > 1/2 of string length
 */


function repeatedSubStringPattern(str) {
    let strLength = str.length;
    let maxSubStrSize = Math.floor(strLength / 2);

    let testSubString = ''
    let charactersToAppend = 0;
    //'abab'
    while (testSubString.length < maxSubStrSize) {
        testSubString += str[charactersToAppend]; //a
        let repeats = strLength / testSubString.length;
        charactersToAppend++;
        
        if (testSubString.repeat(repeats) === str) console.log(`Repeats: ${repeats}, testSubString: ${testSubString}, true`)
        if (testSubString.repeat(repeats) === str) return true;
    //Build a test string
    //Test to see if it can be repeated to match string

    }
    console.log(false);
    return false;


    
}


//16 minute solve time

repeatedSubStringPattern('abab') // true
repeatedSubStringPattern('aba') // false
repeatedSubStringPattern('aabaaba') // false
repeatedSubStringPattern('abaababaab') // true
repeatedSubStringPattern('abcabcabcabc') // true

}

function solution2() {
/**
 * Given a non-empty string check if it can be constructed by
 * taking a substring of it and appending multiple copies of the
 * substring together. You may assume the given string consists
 * of lowercase English letters only.
 * 
 * Example 1:
 * Input: 'abab'
 * Output: True
 * Explanation: It's the substring 'ab' twice.
 * 
 * Example 2:
 * 
 * Input: 'aba'
 * OutputL False
 */

/**
 * I: Non-empty string
 * O: Boolean if it can be constructed by taking a substring of it and appending
 * multiple copies of the substring together
 * 
 * Explicits:
 * 1. String will only be lowercase letters
 * 
 * Implicits:
 * 1. The copies can be evaluated from the first character
 * to see if it can be replicated string length / substr length amount of times
 * 2. A minimum of 2 copies are needed, which means if i'm over halfway through the string without a match
 * then return false
 * 3. Unless same character, odd length strings return false
 * 
 * 'abab'
 * 'a' repeat str length, 'aaaa' !== str so next iteration
 * 
 * 'ab' repeat str length / substr length (2) --> 'abab' === str so return true
 * 
 * Iterate through a string, append the character to an existing variable 'substr',
 * repeat substr string length / substr length amount of times
 * If that new string === the string, return true
 * 
 * If index >= str length / 2, return false
 * DS:
 * 1. Strings
 * 2. Loops
 * 
 * Algorithm:
 * 1. Loop through a string //abab
 * 2. Append character to currentChar variable //ab
 * --If index >= str.length / 2, return false //index is 0, not greater than 2 //index is 1, not greater than 2
 * 3. Evaluate if currentChar repeated string length / currentChar length amount of times //aaaa !== 'abab' 'abab'
 * === string
 * 4. If so, return true
 * 5. Otherwise iterate
 * 6. Default return false
 * 
 */

function repeatedSubStringPattern(str) {
    let currentSubStr = '';
    for (let char = 0; char < str.length; char++) {
        if (char >= str.length / 2) break;
        currentSubStr += str[char]; //a
        let repeats = str.length / currentSubStr.length;
        let evaluatedSubStr = currentSubStr.repeat(repeats);
        if (evaluatedSubStr === str) return true;
    }

    return false;
}


console.log(repeatedSubStringPattern('abab')) // true
console.log(repeatedSubStringPattern('aba')) // false
console.log(repeatedSubStringPattern('aabaaba')) // false
console.log(repeatedSubStringPattern('abaababaab')) // true
console.log(repeatedSubStringPattern('abcabcabcabc')) // true
}

solution2();

//Solved again in 11 minutes