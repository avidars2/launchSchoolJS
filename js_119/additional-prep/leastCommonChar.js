/**
P: Write a method that takes a string as an argument and returns
the character that occurs least often in the given string.
If there are multiple characters with the equal lowest number
of occurrences, then return the one that appears first in the
string. When counting characters, consider the uppercase and
lowercase version to be the same.
 */

/**
 * I: String
 * O: Character that occurs least often
 * 
 * Explicits:
 * 1. If multiple characters occur equal amount of lowest times, return which appeared first
 * 2. Case is irrelevant
 * 
 * 'hello world'
 * h -1
 * e - 1
 * l - 2
 * o - 1
 * w - 1
 * o - 2
 * r - 1
 * l - 3
 * d - 1
 * 
 * array = [h, e, l, o, w, r, d]
 * 
 * Obj = {
 * h: 1
 * e: 1}
 * 
 * Algorithm:
 * 1. For each letter, if not in array add to array
 * 2. Add as object key, and increment count
 * 
 * Iterate through array, for each 'key' letter array, get value
 * lesatOccurences re-assign if less than
 * 
 * 
 */

function leastCommonChar(str) {
    let lesatOccurences = [Infinity, ''];
    let orderOfAppearance = [];
    let countObj = {};
    for (let char in str) {
        countObj[str[char].toLowerCase()] = (countObj[str[char].toLowerCase()] ?? 0) + 1;
        if (!orderOfAppearance.includes(str[char])) orderOfAppearance.push(str[char].toLowerCase());
    }

    orderOfAppearance.forEach(el => {
        if (countObj[el] < lesatOccurences[0]) {
            lesatOccurences = [countObj[el], el]
        }
    })

    // console.log(countObj);
    // console.log(orderOfAppearance);
    // console.log(lesatOccurencesLetter);
    return lesatOccurences[1];


}

console.log(leastCommonChar("Hello World")); // "h"
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers")); // "t"
console.log(leastCommonChar("Mississippi")); // "m"
console.log(leastCommonChar("Happy birthday!")); // ' '
console.log(leastCommonChar("aaaaaAAAA")); // 'a'

//Solved in 9 minutes (Barely any PEDAC used)