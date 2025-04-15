/**
P: Create a function that takes a string argument and returns the character that occurs most often in the string. 
If there are multiple characters with the same greatest frequency, return the one that appears first in the string. 
When counting characters, consider uppercase and lowercase versions to be the same.

 */

/**
 * I: String argument
 * O: Character which occurs most often
 * 
 * Explicits:
 * 1. If multiple characters occur at same frequency, return one that appears first in string
 * 2. Case does not matter
 * 
 * 'Hello World'
 * H -1
 * e - 1
 * l - 1
 * l - 2
 * o - 1
 * W - 1
 * 
 * {
 * h: 1
 * e: 1
 * l: 2}
 * 
 * hVF = ''
 * if key > value then current key, replace it
 * 
 * position = 2
 * h - [1, 0]
 * e - [1, 1]
 * l - [1, 2]
 * l - [2, 2]
 * o - [2, 3] (Hypothetically)
 * 
 * Iterate through a string and count the occurences of each character in the string, case irrelevant
 * Then return the character which occurs most frequently
 * 
 * DS:
 * 1. Object to count characters
 * 2. Array of object keys to find max value
 * 
 * Algorithm:
 * 1. Iterate through string
 * --Count each character
 * ----Add lowercase char to key in object and increment count by 1
 * ----If exists, increment by 1, if doesn't exist add to object at 0 and + 1
 * 2. For each key in the object
 * ---Get the value of the key, store in av ariable
 * ---For each remaining key, check if value of that key is greater than current key value
 * ---If so, reassign it
 * ---If not, leave as is
 * 3. Return key 'character'
 * 
 */

function mostCommonChar(str) {
    let strObj = {};
    for (let charIdx in str) {
        let char = str[charIdx];
        strObj[char.toLowerCase()] = (strObj[char.toLowerCase()] ?? 0) + 1;

    }

    let highestValueKey = ''
    // console.log(strObj);
    for (key in strObj) {
        if (strObj[highestValueKey] === undefined) {
            highestValueKey = key;
        }
        if (strObj[key] > strObj[highestValueKey]) {
            highestValueKey = key;
        }
    }

    return highestValueKey;
}

const p = console.log;
p(mostCommonChar("Hello World") === "l");
p(mostCommonChar("Mississippi") === "i");
p(mostCommonChar("Happy birthday!") === "h");
p(mostCommonChar("aaaaaAAAA") === "a");

//Solved in 14.35 minutes