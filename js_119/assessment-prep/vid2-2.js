/**
 * Given an array of strings made only from lowercase letters,
 * return an array of all characters that show up in all strings within the given array (including duplicates)
 * For example, if a character occurs 3 times in all strings but not 4 times, you need to
 * include that character three times in the final answer
 */

/**
 * I: Array of strings all lowercase
 * O: Array of all characters that show up in all strings within the given array (including duplicates)
 * This means that if a character occurs 3 times in all strings but not 4 times, you need to include
 * that character three times in the final answer
 * 
 * Explicits:
 * 1. Return an array with the characters, including duplicates, that occur in every string
 * 
 * Implicits:
 * 1. The maximum amount of times a character occurs in every string is the amount of times
 * it needs to appear in an array. So 'cool, lock, cook,' the 'o' only appears a max of once
 * in EVERY string
 * Another way to put it, the minimum amount of that character that appears when considering all the
 * strings is the amount to repeat it in the final array
 * 
 * 'a', 'b' --> no duplicates per character
 * 
 * 'ab', 'bc'
 * ['a', 'b'], Includes 'b' ? yes, includes 'c'? No --> ['b']
 * 
 * 'bella', 'label', 'roller'
 * ['b', 'e', 'l', 'l', 'a'] includes l ? yes, a ? yes, b ? yes, l? yes
 * r ? no o ? no l ? yes l ? yes e ? yes r ? no
 * 
 * b included in ALL remaining array elements ? no
 * is e included in ALL remaining array elements ? yes
 * is l included in ALL remaining array elements ? yes
 * how many times ? twice
 * 
 * is a included in all remaining array elements ? no
 * 
 * Sort characters in order 
 * 
 * DS:
 * 1. Array to split characters for evaluation
 * 2. Strings
 * 
 * Algorithm:
 * 1. Take a string and split it into it's individual characters
 * 2. Sort characters in the string [a, b, e, l, l]
 * 3. Count occurrences of each character then remove duplicates [a, b, e, l] && [1, 1, 1, 2]
 * 3. For each character, evaluate remaining strings to see if they include that character 
 * --'label' and 'roller' don't both have a, but both have 'e', once, and l twice
 * 4. If they do, count occurrences and see if it is equal to the amount of times it appears in the original array (e, appears once so 1 stays, l appears twice so 2 stays)
 * --If greater than, ignore, if less than, change count of each character to lowered amount (if l appeared oncec, 2 would be changed to 1)
 * 5. If character does not exist in all remaining strings, change the count to '0' [a does not appear so 1 goes to 0, b does not appear so b goes to 0]
 * 6. Return array of characters the amount of times they appear in the counting array [0, 0, 1, 2] --> [a, b, e, l] --> ['e', 'l', 'l']
 */

// function commonChars(arr) {
//     let compareStrArr = arr[0].split('').sort();
//     // console.log(compareStrArr);
//     let count = compareStrArr.reduce((acc, el) => {
//         acc[el] = (acc[el] || 0) + 1;
//         return acc;
//     }, {})
//     count = Object.values(count);

//     let testStrArr = arr.slice(1);

//     count.forEach((amount, idx) => {
//         let testChar = compareStrArr[idx];
//         testStrArr.forEach(word => {
//             let charCount = 0;
//             console.log(word)
//             for (let i = 0; i < word.length; i++) {
//                 if (word[i] === testChar) charCount++;
//             }
//             if (charCount < count[idx]) {
//                 count[idx] = charCount;
//             }
//         })

//         // console.log(count[idx], testChar)
//     });

//     // console.log(testStrArr);
//     console.log(count);

//     let charArray = [];
//     count.forEach((el, idx) => {
//         while (el > 0) {
//             el--;
//             charArray.push(compareStrArr[idx]);
//         }
//     })

//     console.log(charArray);

//     return charArray;
    
// }

function commonChars(arr) {
    let startStr = arr[0].split('').sort().join('');
    let remainingArr = arr.slice(1);
    let commonCharArr = [];

    for (let charIdx = 0; charIdx < startStr.length; charIdx++) {
        let char = startStr[charIdx];
        let charExists = 1;
        for (let word in remainingArr) {
            if (!remainingArr[word].includes(char)) {
                charExists = 0;
                break;
            } else {
                let charLocation = remainingArr[word].split('').findIndex(el => el === char);
                remainingArr[word] = remainingArr[word].split('');
                remainingArr[word].splice(charLocation, 1);
                remainingArr[word] = remainingArr[word].join('');
            }
        }
        if (charExists) commonCharArr.push(char);
    }

    console.log(commonCharArr);
}

commonChars(['a', 'b']) //[]
commonChars(['ab', 'bc']) //['b']
commonChars(['bella', 'label', 'roller']) //['e', 'l', 'l']
commonChars(['cool', 'lock', 'cook']) //['c', 'o']
commonChars(['hello', 'goodbye', 'booya', 'random']) //['o']
commonChars(['aabbaaaa','ccddddd', 'eeffee', 'ggrrrrr', 'yyyzzz']) //[]

/**
 * A double loop is iterating through 2 collections at once
 * The top loop iterates through one collection
 * The inner loop, uses the information from the top loop to inform it's actions in the inner loop
 * as it loops through another collection
 * 
 * [2, 0, 1, 3] and ['a', 'b', 'c', 'd'] and I want to match the value of the number where the number in the first collection
 * equals the index of the second collection to return a new array of conjoined pairs (['1a', '2b', '0c', '3d'])
 * 
 * Given an array of Numbers representing the index values of an other array,
 * return a new array with the elements of the other array, joined with the index location of
 * the matching index value in the starting array
 * 
 */

let arr1 = [2, 0, 1, 3]
let arr2 = ['a', 'b', 'c', 'd']
let newArr = [];

for (let charIdx = 0; charIdx < arr2.length; charIdx++) {
    let char = arr2[charIdx]; //a, b, c, d
    
}

joinIndexes([2, 0, 1, 3], ['a', 'b', 'c', 'd']) //['1a', '2b', '0c', '3d'];
joinIndexes([4, 3, 2, 1, 0], ['a', 'b', 'c', 'd', 'e']) //['4a', '3b', '2c', '1d', '0e'];

/**
 * I: 2 arrays, one of integers, one of random characters
 * O: New array of conjoined elements from both arrays, where index location of
 * matching index Number in first array is conjoined with second array element
 * of matching index value
 * 
 * [2, 0, 1, 3], ['a', 'b', 'c', 'd'] --> ['1a', '2b', '0c', '3d']
 * 
 * 1. Iterate through array 2
 * 2. For each element, get index of element
 * 3. Using that element, pass into second loop through first array
 * 4. Find matching element in first array and get index of matching element
 * 5. Return index and push conjoined values into new array
 * 
 */

function joinIndexes(arr1, arr2) {
    let newArr = arr2.map((el, idx) => {
        let indexOfIndexValue = arr1.findIndex(index => {
            return index === idx;
        });
        return `${indexOfIndexValue}${el}`;
    })
    
    console.log(newArr);
    return newArr;
}

printPyramid(5);
// Expected output:
//   *
//  ***
// *****

function printPyramid(num) {
    /**
     * I: Num
     * O: Corresponding * pattern based on number
     * 
     * explicits/implicits:
     * 1. Number of rows === num input
     * 2. Number of stars on a row === row # + previous row #
     * 3. Number of spaces in row === highest row - row #
     * 
     * 0 == ?
     * 1 ===    *
     * 2 ===   ***
     * 3 ===  *****
     * 4 === *******
     * 
     * Algorithm:
     * 1. Take # input
     * # input === highest row
     * # input will help determine spaces and stars per row
     * 2. Outer loop
     * ---Iterate by 1 for each row
     * ---Print spaces based on spaces formula //'  '
     * ---Print Star after based on # of stars formula //'  *'
     * 
     */

    for (let rows = 1; rows <= num; rows++ ) {
        let stars = rows + (rows - 1);
        let spaces = num - rows;
        console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    }
    
}