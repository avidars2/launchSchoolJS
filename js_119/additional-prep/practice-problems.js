function evaluateSolutions() {
    // problem1(); //Solved in 13.5 minutes
    // problem2(); //Solved in 17.1 minutes
    // problem3(); //Solved in 15 minutes;
    // problem4(); //Solved in 19 minutes
    // problem5(); //Solved in 17.5 minutes (last test case seems to be wrong)
    // problem5two(); //Solved in 9.5 minutes (last test case seems to be wrong), I re-interpted the question to accomodate
    // problem6(); //Not solved (test cases seem to be off)
    // problem6two(); //Not fully solved (Test cases seem to be off)
    // problem7(); //Solved in 13.3 minutes
    // problem8(); //Solved in 23.5 mnutes
    // problem8two(); //Solved in 15 minutes
    // problem8three(); //Solved in 12.5 minutes
    // problem9(); //Solved in 30 minutes
    // problem10(); //Solved in 20.5 minutes
    // problem11(); //Solved in 12.16 minutes
    // problem12(); //Solved in 17.65 minutes

}
evaluateSolutions();

/**
Given 2 two arguments of an array of numbers and a number, find all the pairs that results in the forming a triangle with the number.

Note: To determine if three numbers form a triangle you have to use the Triangle Inequality Theorem, which states that the sum of two side lengths of a 
triangle is always greater than the third side. If this is true for all three combinations of added side lengths, then you will have a triangle.

 */

function problem1() {

/**
 * I: Array, number
 * O: Array of array pairs
 * 
 * Explicits:
 * 1. 3 numbers form a triangle if the sum of 2 side lengths is greater than the third side
 * 2. The above needs to be true for all combinations of side lengths
 * 
 * 
 * [2, 3, 4, 5], 7 --> 
 * 2, 3, 7
 * 
 * 2 + 3 > 7 ? No
 * 2 + 7 > 3 ? Yes
 * 7 + 3 > 2 ? Yes
 * 
 * If all yes, a valid pair was found
 * 
 * [2, 3, 4, 5], 7
 * 
 * 2, 3
 * 2, 4
 * 2, 5
 * 3, 4
 * 3, 5
 * 4, 5
 * 
 * Evaluate each pair if it meets the triangle condition
 * If true, push pair into array
 * 
 * Ideas:
 * 1. double loop for pairs
 * 
 * DS:
 * 1. Array of numbers
 * 2. Empty array to push valid pairs into
 * 3. Numbers; evaluate if 3 number combinations match triangle formula
 * 
 * Algorithm:
 * 1. arrayPairs = [];
 * 2. Iterate through array of numbers [2, 3, 4, 5]
 * 3. For each number, start a new loop at current index + 1 [2, 4]
 * 4. In the new loop, evaluate the outer loop element with the inner loop element if it meets triangle formula
 * 5. If true, push array into arrayPairs
 * 6. If false, keep iterating
 * 7. Repeat until end of array and push arrayPairs
 * 
 * Evaluate triangle formula
 * 1. Is el1 + el 2 > argument
 * 2. Is el1 + argument > el2
 * 3. Is el2 + argument > el1
 * 4. If all conditions pass, it is a valid pair
*/

function findTrianglePairs(arrOfNums, thirdSide) {
    let arrayPairs = [];

    for (let startNum = 0; startNum < arrOfNums.length; startNum++) {
        for (let innerNum = startNum + 1; innerNum < arrOfNums.length; innerNum++) {
            let firstSide = arrOfNums[startNum];
            let secondSide = arrOfNums[innerNum];
            let pair = [firstSide, secondSide];
            if (evaluateTriangleFormula(pair, thirdSide)) {
                arrayPairs.push(pair);
            }
        }
    }
    // console.log(arrayPairs);
    return arrayPairs

}

function evaluateTriangleFormula(pair, thirdSide) {
    return (pair[0] + pair[1] > thirdSide) && (pair[0] + thirdSide > pair[1])
    && (pair[1] + thirdSide > pair[0])
}

// console.log(evaluateTriangleFormula([3, 4], 7));

console.log(findTrianglePairs([2, 3, 4, 5], 7)); // [ [ 3, 5 ], [ 4, 5 ] ]
console.log(findTrianglePairs([1, 2, 3, 4], 10)); // []
console.log(findTrianglePairs([7, 10, 12, 15], 9)); // [ [ 7, 10 ], [ 7, 12 ], [ 7, 15 ], [ 10, 12 ], [ 10, 15 ], [ 12, 15 ] ]
console.log(findTrianglePairs([8, 2, 5, 6, 3], 4)); // [ [ 8, 5 ], [ 8, 6 ], [ 2, 5 ], [ 2, 3 ], [ 5, 6 ], [ 5, 3 ], [ 6, 3 ] ]


//Solved in 13.5 minutes
};

/**
P: Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. 
Minimum possible length is `2`. If there’s none return `[]`. 

 */
function problem2() {;

/**
 * I: Array of numbers
 * O: New array of maxium possible consecutive alternating odd and even numbers
 * 
 * Explicits:
 * 1. Minimum length of returned array is 2
 * 2. If no consecutive alternating odd and even #'s, return '[]'
 * 
 * Implicits:
 * 1. If numbers are incrementing by 1, it is alternating
 * 
 * Odd: num % 2 === 1
 * Even: num % 2 === 0
 * 
 * [1, 2, 3, 4, 5, 6] //[1, 2, 3, 4, 5, 6]
 * 1 -- odd
 * 2 -- even
 * 3 -- odd
 * 4 -- even
 * keep going until 2 evens or 2 odds in a row
 * 
 * [2 , 4, 6, 8]
 * 2 -- even
 * 4 -- even //break
 * 
 * 4 -- even
 * 6 -- even //break
 * 
 * Idea:
 * --Double loop, incrementing combinations 
 * 
 * [1, 1, 3, 7, 8, 5] 
 * 1 -- odd
 * 1 -- odd //break
 * 
 * 1 -- odd
 * 3 -- odd //break
 * 
 * 3 -- odd
 * 7 -- odd //break
 * 
 * 7 -- odd
 * 8 -- even
 * 5 -- odd
 * //end of array break
 * 
 * Is length of current combination > 1 ? Yes
 * Is longer than current highest combo ? Yes
 * 
 * arrayCombo = [7, 8, 5]
 * 
 * Looping from 8, 
 * 8 -- even
 * 5 -- odd
 * 
 * [8, 5] not > current highest so skip
 * 
 * 
 * [4, 6, 7, 12, 11, 9, 17]
 * 
 * let currentHighestCombo = []
 * 
 * 6, 7, 12, 11 > 2 length ? Yes > currentCombo ? Yes, re-assign currentCombo
 * 
 * Check if next number is opposite of previous
 * previousEval = odd
 * current = ? even
 * 
 * previous = even
 * current -
 * 
 * if previous index odd && current even OR previous even && current odd then push number
 * 
 * Iterate through the array.
 * For each number, start a new loop from index + 1
 * --Inner loop, check if new index num is opposite even/odd from previous
 * --If so, push, else break loop
 * 
 * DS:
 * 1. Array of numbers
 * 
 * Algorithm:
 * 1. highest combo = [] 
 * 1. Iterate through array // * [4, 6, 7, 12, 11, 9, 17]
 * 2. For each element, start a new loop at next index element
 * 3. From next index element, evaluate formula: //4, 6
 * --temparray = [currentEl]
 * ---Is previous index odd && is current index even OR is previous index even && current index odd
 * ----If above is true, push current element into temporary array
 * ---If false, break loop
 * 4. if temp array length > 2 && > highest combo length, re-assign highest combo length
 * 5. Else continue to next iteration
 * 6. Repeat then return highest combo 
 */

function longestAlternatingSubarray(numArr) {
    let highestCombo = [];

    for (let outNum = 0; outNum < numArr.length; outNum++) {
        let tempArray = [numArr[outNum]];
        for (let inNum = outNum + 1; inNum < numArr.length; inNum++) {
            let previousNum = numArr[inNum - 1];
            let currentNum = numArr[inNum];
            if ((isOdd(previousNum) && isEven(currentNum)) || (isEven(previousNum) && isOdd(currentNum))) {
                tempArray.push(currentNum);
            } else break;
        }

        if ((tempArray.length > 2) && (tempArray.length > highestCombo.length)) {
            highestCombo = tempArray;
        }
    }
    return highestCombo;
}

function isOdd(num) {
    return ((num % 2) === 1)

}

function isEven(num) {
    return ((num % 2) === 0)

}

console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]
console.log(longestAlternatingSubarray([4, 6, 7, 6, 7, 9, 17])); // [ 6, 7, 6, 7 ]

//Solved in 17.10 minutes

}

/**
 * P: Find all triple of words in the sentence that have at least 2 vowels in them.
 */
function problem3() {;

/**
 * I: String of words
 * O: Array of arrays containing triples of words that have at least 2 vowels in them
 * 
 * Explicits:
 * 1. Words in triples must have at least 2 vowels in them
 * 
 * Implicits:
 * 1.
 * 
 * CQ:
 * 1. What is a triple? A triple appears to be a unique collection of 3 words
 * 
 * "This is a test sentence with some vowels" //[["sentence", "some", "vowels"]]
 * 
 * sentence //has >= 2 vowels
 * some //has >= 2 vowels
 * vowels //has >= 2 vowels
 * 
 * Above 3 are only words with 3 vowels
 * 
 * [['sentence', 'some', 'vowels']]
 * 
 * "Beautiful, bright, and sunnier days are lovely"
 * //Beautiful, sunnier, are --> 1 combination
 * //Beautiful, sunnier, lovely --> another combination
 * 
 * Iterate from 0, check if it matches condition
 * 'Beautiful'
 * 
 * Check next word to see if it matches
 * 
 * Ideas:
 * 1. Combinations problem
 * 
 * DS:
 * 1. Array to contain triples
 * 2. Array to contain arrays of triples
 * 
 * Algorithm:
 * 1. triples = []
 * 2. Split string into array of words
 * 3. Iterate through array
 * 4. For each word, check if it has >= 2 vowels
 * --If so, start new loop from next index | If not, skip to next word. then repeat outer check
 * ---Check if that word has >= 2 vowels
 * -----If so, start new loop from next index |  If not, skip to next word. then repeat outer check
 * -------Check if that word has >= 2 vowels
 * ---------If so, push array of outer, middle, and inner loop into an array
 * ---------If not, skip to next word. then repeat outer check
 * 5. Return triples array
 * 
 * Count Vowels
 * 1. list vowels ='aeiou'
 * 2. Iterate through word
 * 3. For each character, if vowels includes character, add to count
 * 4. Return true if count >= 2, false if not
 */

function findTripleWithVowels(str) {
    let triples = [];
    let strArr = str.split(' ');

    for (let outer = 0; outer < strArr.length; outer++) {
        let outerWord = strArr[outer];
        if (!vowelCount(outerWord)) continue
        for (let middle = outer + 1; middle < strArr.length; middle++) {
            let midWord = strArr[middle];
            if (!vowelCount(midWord)) continue
            for (let inner = middle + 1; inner < strArr.length; inner++) {
                let innerWord = strArr[inner];
                if (!vowelCount(innerWord)) continue
                triples.push([outerWord, midWord, innerWord]);
            }
        }
    }

    return triples
}

function vowelCount(word) {
    let vowels = 'aeiou'
    let count = 0;
    let wordArr = word.split('');
    wordArr.forEach(char => {
        if (vowels.includes(char)) count++;
    })

    return count >= 2;

}


//  Test cases
console.log(findTripleWithVowels("This is a test sentence with some vowels")); // [["sentence", "some", "vowels"]]
console.log(
  findTripleWithVowels("The quick brown fox jumps over the lazy dog")
); // []
console.log(
  findTripleWithVowels("Beautiful, bright, and sunnier days are lovely")
);
// [
//  [ 'Beautiful,', 'sunnier', 'are' ],
//  [ 'Beautiful,', 'sunnier', 'lovely' ],
//  [ 'Beautiful,', 'are', 'lovely' ],
//  [ 'sunnier', 'are', 'lovely' ]
// ]

//Solved in 15 minutes
}

/**
 * P:Write a function, snakecase, that transforms each word in a sentence to alternate between lower (even index value) 
 * and upper (odd index value) cases when the word before or after it  begins with "s".

 */
function problem4() {;

/**
 * I: String of words
 * O: New SnakeCase string
 * 
 * Explicits:
 * 1. Each word in a sentence alternate between lower (even index value) and upper (odd index value)
 * cases when the word before or after it begins with 's'
 * 
 * Implicits:
 * 1. First character in snake case is always lowercase
 * 2. Word is only snakecase if word before or after starts with 's'
 * 
 * 'apples are sweet' 
 * apples, check before ? (no word)
 * check after 'are' ? Does not begin with 's' //no snake case
 * 
 * 'are' -- check before 'apples' ? not 's'
 * --check after 'sweet' begins with 's' //snake case
 * 
 * Iterating through a string of words
 * For each word, I am checking if the word before or after it begins with 's'
 * If it does, make the word snakecase, otherwise continue to next word
 * 
 * DS:
 * 1. String and array of words
 * 
 * Algorithm:
 * 1. Iterate through string of words
 * 2. Check if word before current word or after begins with 's'
 * --If so, make current word snake case
 * 3. Return new string of words
 * 
 * 2--
 * Iterate through the words
 * Check index - 1 and index + 1 if they begin with 's'
 * --If so, it is snake case
 * 
 * Edge cases:
 * first word? If index === 0, only check word after it
 * Last word ? If index === arr.length -1, only check word before it
 * 
 * Algorithm:
 * --If array length === 1, return original string
 * 1. Iterate through array of words
 * 2. For each word, check word before and after if it begins with 's'
 * --If current index === 0, only check index + 1. If current index === arr.length - 1, only check index - 1
 * --Check current word index - 1 && current word index + 1 if they begin with 's'
 * ----If condition is true, convert word to snake case
 * --return snake case word
 * 3. Join string in array, return new string
 * 
 * Snake case conversion:
 * 1. Split word into character array
 * 2. map word, for each even index return lowercase
 * --for each odd index, return uppercase
 * 3. Join word and return
 *  
 */

function snakecase(str) {
    let strArr = str.split(' ');
    if (strArr.length <= 1) return str;

    let newWord = strArr.map((word, index) => {
        let previousWord = strArr[index - 1];
        let nextWord = strArr[index + 1];
        // console.log(previousWord, word, nextWord);
        if (index === 0) {
            if ((nextWord[0].toLowerCase() === 's')) return convertToSnakeCase(word);
            return word;
        }
        if (index === strArr.length - 1) {
            if ((previousWord[0].toLowerCase() === 's')) return convertToSnakeCase(word);
            return word;
        }
        if (previousWord[0].toLowerCase() === 's' || nextWord[0].toLowerCase() === 's') {
            //snakecase
            return convertToSnakeCase(word);
        }

        return word;
    })

    return newWord.join(' ');
}

function convertToSnakeCase(word) {
    let wordArr = word.split('');
    return wordArr.map((char, idx) => {
        if (idx % 2 === 0) {
            // console.log(char);
            return char.toLowerCase();
        }
        if (idx % 2 === 1) {
            // console.log(char);
            return char.toUpperCase();
        }

    }).join('');
}

// console.log(convertToSnakeCase('hello'));

// // // Test cases
console.log(snakecase("Snakes slither silently")); // "sNaKeS sLiThEr sIlEnTlY"
console.log(snakecase("simple sentence structure")); // "sImPlE sEnTeNcE sTrUcTuRe"
console.log(snakecase("apples are sweet")); // "apples aRe sweet"
console.log(snakecase("swiftly swimming swans")); // "sWiFtLy sWiMmInG sWaNs"
console.log(snakecase("the sun sets slowly")); // "tHe sUn sEtS sLoWlY"
console.log(snakecase("A quick brown fox")); // "A quick brown fox"

//Solved in 19 minutes
}

/**
Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel 
sequence in the sentence. The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words).

If no consecutive vowels are found, return null.
 */
function problem5() {

/**
I: String of words
O: Index of rightmost consecutive vowel

Explicits:
1. If no consecutive vowels are found, return null
2. Find the starting index of the rightmost consecutive vowel
3. vowels should be case-insensitive
4. Vowel sequences should not span multiple words, only indiviudal words

She sells sea shells on the sea shore

Start by iterating from the back/reversing the string

erohs

e, check if next character is also a vowel. If so, 'e' is starting index of vowels

Reverse the string, keeping all spaces to delineate words

Iterate until a vowel is found
--When a vowel is found, record position
--Then check next character if it is a vowel
---If it is, return position as index of consecutive vowel
---If it isn't, break loop and clear position as no consecutive vowel was found
--If no consecutive vowels are found, return null

DS:
1. String

Algorithm:
0. Consecutive vowel position = null
1. Reverse string //"The quick brown fox jumps over the laaazy dog"
---Split string into word array
---Map array and transform each word into reverse
---Join new array into string
2. Iterate through string
--For each characterm evaluate if it is a vowel
----If it is a vowel, check next character (index + 1), if it is also a vowel
-----If true, mark down current index and break loop
3. if consecutive vowel position !== null
----Subtract current index from array length -1 to get index position and return
--else, return null

CQ:
1. What is a consecutive vowel? --vowels which occur one after another
--ae is a consecutive vowel
--aa, ee, ei are all consecutive vowels
 */

function rightmostConsecutiveVowel(str) {
    let reversedString = reverseStr(str);

    let consecutiveVowelPosition = null;
    for (let character = 0; character < reversedString.length - 1; character++) {
        let currentCharacter = reversedString[character];
        let nextCharacter = reversedString[character + 1]
        if (isVowel(currentCharacter)) {
            if (isVowel(nextCharacter)) {
                consecutiveVowelPosition = character;
                break;
            }
        }
    }

    // console.log(consecutiveVowelPosition);

    consecutiveVowelPosition = consecutiveVowelPosition !== null ? str.length - consecutiveVowelPosition - 2 : null;
    // console.log(consecutiveVowelPosition);
    return consecutiveVowelPosition;

}

function reverseStr(str) {
    return str.split(' ').map(word => {
        return word.split('').reverse().join('')
    }).reverse().join(' ');

}

function isVowel(char) {
    let vowels = 'aeiou';
    if (vowels.includes(char)) return true;
    return false;
}


// Test Cases
console.log(
  rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")
); // Output: 37
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: 29
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: 15
console.log(
  rightmostConsecutiveVowel("This sentence has no consecutive vowels")
); // Output: null
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: 23
console.log(rightmostConsecutiveVowel("ooQueueing is fun but cooooloo")); // Output: 23

//Solved in 17.5 minutes
}

function problem5two() {

/**
 * I: String of words
 * O: Index of rightmost consecutive vowel
 * 
 * Explicits:
 * 1. Case-insensntive
 * 2. Vowel sequences are limited to within individual words
 * 3. Find the starting index of the rightmost occurence of any consecutive vowel
 * A consecutive vowel is a series of multiple vowels in a row 'ae, or 'aeio or oau'
 * 
 * Implicits:
 * 1. Consecutive here means 2 vowels in a row
 * 
 * Find the rightmost consecutive vowel 'laaazy' --> 'aaa', index of first 'a'
 * 
 * The quick brown fox jumps over the laaazy dog //
 * 
 * 'laaazy dog'
 * 
 * Iterate backwards through the string
 * Look for a vowel
 * --If I find a vowel,, check index before it and see if it is also a vowel
 * --If so, the index before it is the correct starting position
 * 
 * DS:
 * 1. Strings
 * 
 * Algorithm:
 * 1. Iterate through string backwards
 * 2. For each character, check if vowel
 * --If not, continue to next iteration
 * --If so, check if index before is also a vowel
 * ---If found, that index before is the proper index and can be returned
 * 3. 
 * 
 * 
 * Notes:
 * 1. Because i'm checking index and index - 1, loop should not stop at >0, but > 1
 *  
 */
function rightmostConsecutiveVowel(str) {
    const isVowel = char => 'aeiouAEIOU'.includes(char);

    for (let i = str.length - 1; i > 1; i--) {
        if (isVowel(str[i]) && isVowel(str[i - 1])) {
            return i - 1;
        }
    }

    return null;
}

// Test Cases
console.log(
    rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")
  ); // Output: 37
  console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: 29
  console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: 15
  console.log(
    rightmostConsecutiveVowel("This sentence has no consecutive vowels")
  ); // Output: null
  console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: 23
  console.log(rightmostConsecutiveVowel("ooQueueing is fun but cooooloo")); // Output: 23
  
//Solved in 9.5 minutes

function getIndexesList(str) {
    // let idxObj = str.split('').reduce((acc, el, idx) => {acc[idx] = el; return acc;},{})
    // console.log(idxObj);
    // return idxObj

    return Object.entries(str.split(''))
}

console.log(getIndexesList("Queueing is fun but cooool")); // Output: 23
console.log(getIndexesList("ooQueueing is fun but cooooloo")); // Output: 23
}

/**
Right Most Consecutive Vowels with Word

Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel 
sequence in the sentence and the word it belongs to. The function should be case-insensitive and should only consider 
vowel sequences within individual words (not spanning multiple words).

If a consecutive vowel sequence is found, return an array where the first element is the starting index of the sequence 
and the second element is the word containing that sequence.

If no consecutive vowels are found, return an empty array.
 */
function problem6() {

/**
 * I: String of words
 * O: Array containing starting index of sequence and word containing the sequence
 * 
 * Explicits:
 * 1. If no consecutive vowels are found, return an empty array
 * 2. If consecutive vowel is found return [starting index of sequence, word containing sequence]
 * 3. Vowels should be identified case-insensitive
 * 4. Vowels sequences should only be considered within individual words
 * 
 * Implicits:
 * 1. Consecutive means any vowels next to each other 'ea'
 * 2. Only 2 vowels need to be next to each other to be considered consecutive
 * 
 * 
 * "The quick brown fox jumps over the laaazy dog"
 * a - 39
 * a - 38
 * a- 37
 * l - 36 //not a vowel, previous iteration was where the vowels stopped
 * 
 * [39, 38, 37] //not push 36, and identify that 37 is where the vowels stopped
 * 
 * If array length >= 2, then last element of the array is where the index starts
 * 
 * 
 * the, laaazy, dog
 * 
 * [last element, current word]
 * 
 * 
 * DS:
 * 1. Array for return value
 * 2. Array to track index of vowels
 * 3. Numbers
 * 4. Strings to iterate
 * 
 * Algorithm:
 * --counter = 0
 * --outer array = []
 * 1. Split string into array of words
 * 2. Iterate from the back of the array
 * --For each array element,
 * ---If index === array length - 1, no spaces added before index
 * ---Otherwise, add 1 to account for space from end
 * --Evaluate word in reverse for multiple vowels in a row
 * ----for each decrement, add to counter
 * ----If current character is vowel, check current index - 1,
 * -------if also a vowel, then push both indexes into temporary array
 * -------continue checking until a consonant is found, pushing vowel indexes into array
 * -------if consonant is found,
 * ---------push current word and last index of temporary array into outer array
 * ---If current character is vowel and current index - 1 is not also a vowel, continue iteration
 * 
 * 3. return outer array
 

*Index of last element === length - 1

length - current iteration from back === index
 */

function rightmostConsecutiveVowelWord(str) {
    let counter = 0;
    let finalArr = [];
    let vowels = 'aeiou';

    let strArr = str.split(' ');

    for (let word = strArr.length - 1; word >= 0; word--) {
        if (!(word === strArr.length - 1)) counter += 1;
        // counter += strArr[word].length;
        let tempArray = [];

        for (let char = strArr[word].length - 1; char >= 0; char--) {
            counter++;
            console.log(strArr[word][char])
            if (vowels.includes(strArr[word][char].toLowerCase())) {
                if (vowels.includes(strArr[word][char - 1].toLowerCase())) {
                    tempArray.push(str.length - (counter + 1));
                    for (let innerChar = char - 1; innerChar >= 0; innerChar--) {
                        if (vowels.includes(strArr[word][innerChar])) {
                            tempArray.push((tempArray[tempArray.length - 1]) - 1)
                        } else {
                            finalArr = [strArr[word], tempArray[tempArray.length - 1]]
                        }
                    }

                }
            }
        }
    }

    return finalArr;
}


// // Test Cases
// console.log(
//   rightmostConsecutiveVowelWord("The quick brown fox jumps over the laaazy dog")
// ); // Output: [37, "laaazy"]
// console.log(
//   rightmostConsecutiveVowelWord("She sells sea shells on the sea shore")
// ); // Output: [29, "sea"]
// console.log(
//   rightmostConsecutiveVowelWord("I like eating aaapples and oranGEs")
// ); // Output: [15, "aaapples"]
// console.log(
//   rightmostConsecutiveVowelWord("This sentence has no consecutive vowels")
// ); // Output: []
// console.log(rightmostConsecutiveVowelWord("Queueing is fun but cooool")); // Output: [23, "cooool"]

//Not solved
}

/**
Right Most Consecutive Vowels with Word

Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel 
sequence in the sentence and the word it belongs to. The function should be case-insensitive and should only consider 
vowel sequences within individual words (not spanning multiple words).

If a consecutive vowel sequence is found, return an array where the first element is the starting index of the sequence 
and the second element is the word containing that sequence.

If no consecutive vowels are found, return an empty array.
 */
function problem6two() {

/**
 * I: String of words
 * O: Array containing starting index of rightmost occurence of any consecutive vowel
 * 
 * Explicits:
 * 1. Vowels sequence must be in individual word, not spanning multiple words
 * 2. If no consecutive vowels are found, return an empty array
 * 3. If consecutive vowel is found, return [starting index of sequence, word]
 * 
 * Implicits:
 * 1. Consecutive vowel means vowels that occur at least twice in a row
 * 
 * "The quick brown fox jumps over the laaazy dog"
 * 
 * reverse the string
 * 
 * god yza
 * 
 * find a vowel, put it in an array, and check if next character is a vowel as well
 * if it is, push it to the array. If it isn't, break the loop and check if the array length is >=2
 * If it is, this is the latest consecutive vowel
 * 
 * If it isn't, then keep iterating through characters
 * 
 * 
 * DS:
 * 1. Str
 * 
 * Algorithm:
 * 1. Iterate backwards through the string
 * 2. For each character, check if it's a vowel and if the character before is a vowel
 * ----If true, set the startVowelIdx to idx - 1
 * ----Then while startVowelIdx is a vowel, decrement startVowel
 * -----startVowelIdx (let's say this is 8)
 * ----while (str[startVowelIdx] === a vowel), decrement start vowel --> (str[startVowelIdx (which is now 7)] === a vowel ?)
 * ------This loop will keep looping backwards while the condition is true, which is that the current index is a vowel
 * 
 */

function rightmostConsecutiveVowelWord2(str) {
    // let reverseStr = str.split('').reverse().join('');
    const isVowel = char => 'aeiouAEIOU'.includes(char);
    // console.log(reverseStr);

    let consecVowelStart;

    for (let idx = str.length - 1; idx >= 0; idx--) {
        // console.log(idx);
        if (isVowel(str[idx]) && isVowel(str[idx - 1])) {
            consecVowelStart = idx - 1;
            let startIndex = idx - 1;
            while (isVowel(str[startIndex])) startIndex--;
            break;
        }
    }

    console.log(consecVowelStart);
}

function rightmostConsecutiveVowelWord(str) {
    const isVowel = char => 'aeiou'.includes(char.toLowerCase());
    //laazy dog
    let startVowelIdx;
    for (let idx = str.length - 1; idx >= 0; idx--) {
        if (isVowel(str[idx]) && isVowel(str[idx - 1])) {
            //We found consecutive vowels!
            startVowelIdx = idx - 1;
            while (isVowel(str[startVowelIdx])) startVowelIdx--;
            break; 
        }
    }

    console.log(startVowelIdx);
    console.log(str[startVowelIdx])

}

// // Test Cases
console.log(
  rightmostConsecutiveVowelWord("The quick brown fox jumps over the laaazy dog")
); // Output: [37, "laaazy"]
console.log(
  rightmostConsecutiveVowelWord("She sells sea shells on the sea shore")
); // Output: [29, "sea"]
// console.log(
//   rightmostConsecutiveVowelWord("I like eating aaapples and oranGEs")
// ); // Output: [15, "aaapples"]
// console.log(
//   rightmostConsecutiveVowelWord("This sentence has no consecutive vowels")
// ); // Output: []
// console.log(rightmostConsecutiveVowelWord("Queueing is fun but cooool")); // Output: [23, "cooool"]
}

/**
Implement a function that finds all pairs of numbers from an array, where:
- The first number in each pair is located at an even index in the original array and has a value less than 5.
- The second number in each pair is located at an odd index in the original array and has a value greater than 5.
*/
function problem7() {;


/**
 * I: Array of numbers
 * O: Array of array pairs, where each pair matches conditions
 * 
 * Explicits:
 * 1. First number in each pair is located at an even index in original array and has value < 5
 * 2. Second # in each pair is located at an odd index in original array and has value > 5
 * 
 * Implicits:
 * 1. A number in a pair can be used more than once
 * 
 * Ideas:
 * 1. Combinations problem/looping
 * 2. I'm looking for #'s for first pair which are even index (iterate by 2 ?)
 * 
 * [2, 6, 1, 7, 4, 10] //[ [ 2, 6 ], [ 2, 7 ], [ 2, 10 ], [ 1, 7 ], [ 1, 10 ], [ 4, 10 ] ]
 * 
 * 2 -- index 0, which is even
 * ---2 is less than 5
 * 6 -- index 1, which is odd
 * ----6 > 5
 * [2, 6]
 * 
 * [[2, 6]]
 * 
 * 2, 7 --> [[2, 6], [2, 7]]
 * 
 * DS:
 * 1. Array of arrays
 * 2. Array to iterate through
 * 3. Loop through array, then loop from position
 * 
 * Algorithm:
 * --Outer array = []
 * 1. Iterate through array //[2, 6, 1, 7, 4, 10]
 * 2. For each number, evaluate if the number is an even index && is < 5
 * --If this is true, this is the first number in a potential pair | If false, continue to next number
 * --Start a new loop at next number position (idx + 1)
 * 3. For each number, evaluate if number is an odd index && is > 5
 * ---If true, I have a pair, I can push [outer loop num, inner loop num] to outer array
 * ---Repeat until end of array (continue if not true)
 * 4. 
 */

function findSpecialPairs(arr) {
    let outerArray = [];

    for (let outerIdx = 0; outerIdx < arr.length; outerIdx++) {
        if ((outerIdx % 2 === 0) && (arr[outerIdx] < 5)){
            for (let innerIdx = outerIdx + 1; innerIdx < arr.length; innerIdx++) {
                if ((innerIdx % 2 === 1) && (arr[innerIdx] > 5)) {
                    outerArray.push([arr[outerIdx], arr[innerIdx]]);
                } else continue;
            }
        } else continue;
    }

    return outerArray;
}

// Test cases
console.log(findSpecialPairs([2, 6, 1, 7, 4, 10])); // [ [ 2, 6 ], [ 2, 7 ], [ 2, 10 ], [ 1, 7 ], [ 1, 10 ], [ 4, 10 ] ]
console.log(findSpecialPairs([4, 9, 2, 6, 3, 11, 4])); // [ [ 4, 9 ], [ 4, 6 ], [ 4, 11 ], [ 2, 6 ], [ 2, 11 ], [ 3, 11 ] ]
console.log(findSpecialPairs([5, 12, 3, 8])); // [ [ 3, 8 ] ]
console.log(findSpecialPairs([7, 4, 6, 5])); // []
console.log(findSpecialPairs([1, 7, 2, 8, 3, 9])); // [ [ 1, 7 ], [ 1, 8 ], [ 1, 9 ], [ 2, 8 ], [ 2, 9 ], [ 3, 9 ] ]

//Solved in 13.3 minutes
}

/**
Implement function that finds all fibonacci slices in a given array of integers. 
A Fibonacci slice is a sequence where every number after the first two is the sum of the two preceding ones. The minimum length is 3.

 */
function problem8() {;

/**
 * I: Array of integers
 * O: Array of array combos of fibonacci slices
 * 
 * Explicits:
 * 1. A fibonacci slice is a sequence where every number after the first two is the sum of the two precedingones. The minimum length is 3
 * 
 * Implicits:
 * 1. A slice needs to be at least 3 length because 2 numbers need to be evaluated if they are equal to the third
 * 
 * [1, 1, 2, 3, 5, 8] //[[1, 1, 2], [1, 1, 2, 3], []]
 * 1, 1, 2, 3
 * 
 * 1, 1, 3
 * 1, 1, 2 -- slice
 * [1, 1] === 2 -- slice [[1, 1, 2]]
 * [1, 1, 2] === 3 ? slice [1, 1, 2, 3]
 * [1, 1, 2, 3] === 4 ? break
 * 
 * [1, 2] 
 * [1, 1] === 2
 * []
 * 
 * Iterating through an array, by 2 elements at a time
 * Evaluating if the sum of those 2 elements, equal the next element
 * 1, 1, 2 --> does array length - 3 + array length - 2 === array length - 1
 * 
 * [1, 1, 2] --> [[1, 1, 2]]
 * 1, 1, 2
 * 
 * I want a way to calculate if the past 3 numbers are a valid fibonacci sequence
 * I want a way to build an array with the current fibonacci sequence, and if that array is valid
 * to keep building on it and pushing it into an outer array, until it is no longer valid
 * 
 * While the next elements are still a fibnoacci sequence, keep pushing each increment of the array into the outer array
 * [1, 1, 2] --> [1, 1, 2]
 * [1, 1, 2, 3]
 * 
 * [1, 2, 3]
 * 
 * Given an array of numbers, iterate through the array 3 numbers at a time
 * Check if these 3 numbers are fibonacci. If so, push to an outer array, and expand array size by 1 larger slice
 * If still fibonacci, push to outer array.
 * 
 * If no longer fibonacci, break and continue iteration
 * 
 * DS:
 * 1. Array of arrays
 * 2. Array of numbers to iterate through
 * 
 * Algorithm:
 * --Outer array = [] //[1, 1, 2]
 * 1.Iterate through an array, 1 index at a time
 * --Per increment, get the current index, next index, and next next index value and put into a temporary array
 * ----[current, next, next next] //[1, 1, 2]
 * --Evaluate if fibonacci
 * ----If so, push into outer array
 * -----Then, expand array by a larger slice and evaluate if fibonacci
 * -------If valid, push, if not, break inner loop
 * ----If not, break loop, go to next iteration
 * 2. Return outer array
 * 
 * Fibonacci ? : arr[arrLen - 3] + [arrlen - 2] === [arrlen - 1]
 */

function findFibonacciSlices(arrOfNums) {
    let fibnoacciCombos = [];

    for (let i = 0; i < arrOfNums.length - 2; i++) {
        let tempArray = [arrOfNums[i], arrOfNums[i + 1], arrOfNums[i + 2]];
        if (isFibonnaciEnding(tempArray)) {
            // console.log(tempArray);
            fibnoacciCombos.push(tempArray.slice());
            for (let z = i + 3; z < arrOfNums.length; z++) {
                tempArray.push(arrOfNums[z]);
                if (isFibonnaciEnding(tempArray)) {
                    fibnoacciCombos.push(tempArray.slice())
                } else break;
            }
        }

    }

    return fibnoacciCombos;
}

function isFibonnaciEnding(arr) {
    let l = arr.length;
    return (arr[l - 3] + arr[l - 2] === arr[l - 1])
}

// Test cases
// console.log(findFibonacciSlices([1, 1, 2, 3, 5, 8])); // [[1, 1, 2], [1, 1, 2, 3], [1, 1, 2, 3, 5], [1, 1, 2, 3, 5, 8], [1, 2, 3], [1, 2, 3, 5], [1, 2, 3, 5, 8], [2, 3, 5], [2, 3, 5, 8], [3, 5, 8]]
// console.log(findFibonacciSlices([2, 4, 7, 11, 18])); // [ [ 4, 7, 11 ], [ 4, 7, 11, 18 ], [ 7, 11, 18 ] ]
// console.log(findFibonacciSlices([5, 5, 10, 15, 24, 40])); // [ [ 5, 5, 10 ], [ 5, 5, 10, 15 ], [ 5, 10, 15 ] ]
console.log(findFibonacciSlices([1, 2, 4, 6, 10, 16])); // [[2, 4, 6], [2, 4, 6, 10], [2, 4, 6, 10, 16], [4, 6, 10], [4, 6, 10, lon16], [6, 10, 16]]
console.log(findFibonacciSlices([10, 22, 33, 43, 56])); // Should return []

//Solved in 23.5 minutes
}

/**
Implement function that finds all fibonacci slices in a given array of integers. 
A Fibonacci slice is a sequence where every number after the first two is the sum of the two preceding ones. The minimum length is 3.

 */
function problem8two() {;

/**
 * I: Array of integers
 * O: Array of arrays where each sub-array is a fibonacci slice
 * 
 * Explicits:
 * 1. A fibonacci slice is a sequence where every number after the first two is the sum of the two preceding ones
 * 2. Minimum length is 3
 * 
 * Implicits:
 * 1. Only the last 3 numbers in the output sub array need to be evaluated to see if it is fibonacci
 * --Meaning, if I ahve a fibonacci array of 3, and add a number so now length is 4, I only need to evaluate the last 3 numbers to see if it is still fibonacci
 * 2. I'm trying to get all the unique valid fibonacci slices/combinations
 * 
 * Fibonacci: last number === previous number + previous previous number
 * current index = previous index + previous previoux index
 * 
 * [1, 1, 2, 3, 5, 8]
 * 
 * [1, 1, 2]
 * [idx, idx + 1, idx + 2]
 * 
 * Fibonacci formula --> true
 * 
 * outer array = [[1, 1, 2], [1, 1, 2, 3]]
 * 
 * [1, 1, 2, 3] --> formula --> true
 * 
 * I am building a slice of 3 numbers, idx, idx + 1, idx + 2
 * I am evaluating if that slice is valid, and if it is, I am pushing it into an outer array
 * Then, I am taking that valid slice, and expanding it by 1 then evaluating if that new slice is valid.
 * 
 * If it is, then that new slice also gets pushed into the array
 * --The loop happening here, is: expand slice, evaluate, if valid push.
 * --If invalid, break
 * --Go to next starting number on outer loop
 * 
 * DS:
 * 1. Array of array slices
 * 2. temporary array to hold current sequence, which can be expanded per iteration
 * 
 * Algorithm:
 * 1. Iterate through array
 * --For each idx, check idx + 1 and idx + 2 (which means loop stops at array length - 2)
 * ---If fibonacci, then push to outer array
 * --If not, continue to next iteration
 * 2. If fibonacci
 * ---Take a copy of the fibonacci array, and expand by 1
 * -----Start new loop at idx + 3, push that number into temporary array
 * -----Check if fibonacci
 * ----If so, push a copy and repeat
 * ----If not, break inner loop
 * 3. Return outer array
 */

function findFibonacciSlices(arrayOfNumbers) {
    const isFibonacci = arr => arr[arr.length - 1] === (arr[arr.length - 2] + arr[arr.length - 3])
    let fibnoacciCombos = [];

    for (let i = 0; i < arrayOfNumbers.length - 2; i++) {
        let fibnoacciSlice = [arrayOfNumbers[i], arrayOfNumbers[i + 1], arrayOfNumbers[i + 2]];
        if (isFibonacci(fibnoacciSlice)) {
            fibnoacciCombos.push(fibnoacciSlice.slice());
            for (let z = i + 3; z < arrayOfNumbers.length; z++) {
                fibnoacciSlice.push(arrayOfNumbers[z]);
                if (isFibonacci(fibnoacciSlice)) {
                    fibnoacciCombos.push(fibnoacciSlice.slice());
                } else break;
            }
        }
    }
    return fibnoacciCombos
}

// Test cases
console.log(findFibonacciSlices([1, 1, 2, 3, 5, 8])); // [[1, 1, 2], [1, 1, 2, 3], [1, 1, 2, 3, 5], [1, 1, 2, 3, 5, 8], [1, 2, 3], [1, 2, 3, 5], [1, 2, 3, 5, 8], [2, 3, 5], [2, 3, 5, 8], [3, 5, 8]]
// console.log(findFibonacciSlices([2, 4, 7, 11, 18])); // [ [ 4, 7, 11 ], [ 4, 7, 11, 18 ], [ 7, 11, 18 ] ]
// console.log(findFibonacciSlices([5, 5, 10, 15, 24, 40])); // [ [ 5, 5, 10 ], [ 5, 5, 10, 15 ], [ 5, 10, 15 ] ]
// console.log(findFibonacciSlices([1, 2, 4, 6, 10, 16])); // [[2, 4, 6], [2, 4, 6, 10], [2, 4, 6, 10, 16], [4, 6, 10], [4, 6, 10, lon16], [6, 10, 16]]
// console.log(findFibonacciSlices([10, 22, 33, 43, 56])); // Should return []

//Solved in 15 minutes
}

/**
Implement function that finds all fibonacci slices in a given array of integers. 
A Fibonacci slice is a sequence where every number after the first two is the sum of the two preceding ones. The minimum length is 3.

 */
function problem8three() {

/**
 * I: Array of integers
 * O: Array of arrays of fibonacci slices
 * 
 * CQ: What is a fibonacci slice?
 * 
 * Explicits:
 * 1. Sequence where ever number after the first two is the sum of the two preceding ones.
 * 2. Minimum length is 3
 * 
 * Ideas:
 * 1. Minimum length of 3 for sub-arrays: Slice 3 at a time
 * 2. Loop Through array elements, 1 at a time
 * ---For each iteration, slice current index up to + 3
 * ---If that slice is a valid fibonacci slice, I can push it into an outerarray
 * ----While the slice is still valid, push the next element into a temporary array, check if it is fibonacci
 * ----Push that as well, repeat until an element is not fibonacci then break
 * 
 * Is current idx and idx + 1 === idx + 2
 * 
 * Fibonacci = arr[arr.length - 2] === arr[arr.length - 1] + arr[arr.length]
 * 
 * 
 */

function findFibonacciSlices(arr) {
    const isFibonacci = fibArr => fibArr[fibArr.length - 1] === (fibArr[fibArr.length - 2] + fibArr[fibArr.length - 3])
    let outerArray = [];

    for (let i = 0; i <= arr.length - 3; i++) {
        let tempArray = [];
        if (isFibonacci(arr.slice(i, i + 3))) {
            tempArray = arr.slice(i, i + 3);
            outerArray.push(tempArray.slice());
            for (let nextNum = i + 4; nextNum <= arr.length; nextNum++) {
                tempArray = arr.slice(i, nextNum);
                if (isFibonacci(tempArray)) {
                    outerArray.push(tempArray.slice())
                } else break;
            }
        }
    }

    return outerArray;

}

// Test cases
console.log(findFibonacciSlices([1, 1, 2, 3, 5, 8])); // [[1, 1, 2], [1, 1, 2, 3], [1, 1, 2, 3, 5], [1, 1, 2, 3, 5, 8], [1, 2, 3], [1, 2, 3, 5], [1, 2, 3, 5, 8], [2, 3, 5], [2, 3, 5, 8], [3, 5, 8]]
console.log(findFibonacciSlices([2, 4, 7, 11, 18])); // [ [ 4, 7, 11 ], [ 4, 7, 11, 18 ], [ 7, 11, 18 ] ]
console.log(findFibonacciSlices([5, 5, 10, 15, 24, 40])); // [ [ 5, 5, 10 ], [ 5, 5, 10, 15 ], [ 5, 10, 15 ] ]
console.log(findFibonacciSlices([1, 2, 4, 6, 10, 16])); // [[2, 4, 6], [2, 4, 6, 10], [2, 4, 6, 10, 16], [4, 6, 10], [4, 6, 10, lon16], [6, 10, 16]]
console.log(findFibonacciSlices([10, 22, 33, 43, 56])); // Should return []

//Solved in 12.5 minutes
}
/**
Implement the function/method, minimum shorten. The function shortens a sentence such that 
it will fit within the character limit set. It shortens by removing vowels in the sequence 
of a, e, i, o, and u. Start removing from the end of the sentence. If it can not be shortened to fit 
within character limit, return an empty string. Spaces don’t count for the limit.

 */


function problem9() {

/**
 * I: String of words and a Number
 * O: Shortened sentence
 * 
 * Explicis:
 * 1. Shorten sentence until it fits within character limit set
 * 2. Remove vowels in sequence of a, e, i, o u
 * 3. Start by removing from end of the sentence
 * 4. It it can't be shortened to be under limit set, return empty stringg
 * 5. Spaces don't count for limit
 * 
 * Implicits:
 * 1. Only remove enough characters to fit within limit set
 * 
 * Ideas:
 * 1. Map array of words (no spaces)
 * 2. Iterating backwards through string and re-measuring after each removal
 * 3. Splice to manipulate words in array, based on index of vowels
 * 
 * 
 * "Hello World", 8
 * 
 * Real length is 10
 * 2 vowels need to be removed
 * a -- not in string
 * e -- is in the string
 * 
 * world --> Iterate backwards, checking if current character === 'e'
 * Doesn't have it so nothing happens
 * 
 * Hello --> e is at index 1, split into characters, reverse, find index of 'e', splice that e out, reverse again, re-map that word
 * Hllo
 * 
 * Re-measure --> new string length is 9
 * 
 * o world --> wrld, new string length is 8
 * 
 * Taking a string
 * Getting the real length
 * Splitting string into words
 * Iterating from the back (reverse the array)
 * Iterate over each word looking for the current character
 * 
 * 1 loop: Iterating over current vowel to remove
 * 2 loop: iterating over array, removing characters, and checking length of string, and if not yet real length, continuing removal of that character
 * 
 * DS:
 * 1. Array of words
 * 2. String
 * 3. Number
 * 
 * Algorithm:
 * 1. Get real length of string be removing spaces and measuring length //"Hello World", 8 (real length === 10)
 * ---If it is <= target length, return string
 * 2. real length == real length //10
 * ---Vowels to remove === real length - target length --> 8
 * 3. Array of vowels [aeiou] //[a, e, i, o, u]
 * 3. Split string into array of words [hello, world] //vowels should be case insensitive***
 * --Reverse array //[world, hello]
 * 4. Iterate over array of vowels //[a]
 * --- iterate over reversed array //[world, hello]
 * ---For each word in the reversed array, iterate through it backwards //world --> dlrow
 * ---Check if the vowel is included in the word //a is not in dlrow
 * ---If it isn't, skip to next word //olleh 
 * 
 * ---If it is, while (vowels to remove > 0) then find the index of the first occurrence of that vowel in the reversed word
 * ---Splice out that vowel // index 3 for 'e', splice(3, 1) --> ollh
 * ---Rejoin the word and return it back to the string --> ollh
 * -----Decrement vowels to remove //1
 * -----Only continue further iterations if vowels to remove > 0
 * ----------
 * ---Otherwise repeat for this word, until it doesn't have the vowel
 * 5. Repeat for all words
 * 6. Reverse array, join with spaces, and return new string
 * 
 * 
 */

function minimumShorten(str, targetNum) {
    let realLength = str.split(' ').join('').length;
    let wordsToRemove = realLength - targetNum;
    if (wordsToRemove <= 0) return str;

    let vowels = [...'aeiou'];

    let sentenceArray = str.split(' ').reverse();

    for (let vowel = 0; vowel < vowels.length; vowel++) {
        let currentVowel = vowels[vowel]; //world, hello

        for (let word = 0; word < sentenceArray.length; word++) {
            //world
            let currentWord = sentenceArray[word];
            // console.log(currentWord);
            let reversedWord = currentWord.split('').reverse();
            if (reversedWord.includes(currentVowel)) {
                while (wordsToRemove > 0) {
                    let vowelIndex = reversedWord.findIndex((el) => el === currentVowel);
                    if (vowelIndex === -1) break;
                    reversedWord.splice(vowelIndex, 1);
                    wordsToRemove--;
                }                
            }
            let reReversedWord = reversedWord.reverse().join('');
            sentenceArray[word] = reReversedWord;
        }
        if (wordsToRemove <= 0) break;
    }

    
    if (sentenceArray.join('').length > targetNum) return '';
    let newStr = sentenceArray.reverse().join(' ');
    return newStr;

}
// Test cases
console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
console.log(minimumShorten("Short", 10)); // Short
console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""

//Solved in 30 minutes
}

/* 10.
Write a function, `negate`, that converts all `“yes”` words to `"no"` and `"no"` words to `"yes"` in a sentence. 
The comparison for `"yes"` and `"no"` should be case insensitive.`"yes"` and `"no"` should be negated even if ending with `.`, `?`, `,`, or `!`.
*/

function problem10() {

/**
 * I: String of words
 * O: Negated string of words
 * 
 * Explicits:
 * 1. Comparison is case insensitive
 * 2. Yes and no should be negated even if it ENDS with punctucation
 * 
 * Implicits:
 * 1. Only yes or no with punctuation at the end needs to be considreed, not the beginning
 * 
 * Ideas:
 * 1. Check for 'yes' or 'no' in a sentence
 * ---Checking that yes and character 4 is either punctuation or a space
 * ---Checking that for 'no', character 3 is either punctuation or a space
 * 
 * Yes, I said no but now I say yes.
 * No, I said yes but now I say no.
 * 
 * Yes, I said no but now I say yes
 * 
 * Find all the 'yes's and 'no's' and switch them to the opposite
 * 
 * Iterate through the string, finding 'yes'
 * 
 * Find substrings which are either yes or no, and have either a space in front/after it or punctuation after it
 * 
 * Yes, I said no but now I say yes
 * [Yes, I, said, no, but, now, i, say, yes]
 * Yes/No
 * if includes yes --> starting at y, check if next 2 characters are 'e' and 's', And if 4th character is ' ' or punctuation
 * ---If so, replace word with 'No' (matching case)
 * 
 * I am iterating through an array of words, evaluating if each word is actually the word 'Yes' or 'no'.
 * If thehy are this word, I am swapping the words with the opposite, matching original case.
 * 
 * DS:
 * 1. Array of words
 * 2. Returning a new string
 * 
 * Algorithm:
 * 1. Split string into array of words //Yes, I said no but now I say yes
 * 2. For each word, check if slice 0,3 lowercase includes 'yes' or if it includes 'no'
 * ---If 'yes', check further
 * -----Check if slice 0,4, the last character, is alphabetic. If it is, skip this word //Check if it is undefined, if undefined, word is good
 * -----If it isn't, swap 'yes' to no
 * --------If word[0] === 'Y' then swap to No else swap to no
 * ---Inverse for 'No', except check slice 0,3
 * 3. 
 */

function negate(str) {
    const isAlphabetical = char => (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z');
    let strArr = str.split(' ').map(word => {
        let wordSlice = word.slice(0, 3);

        if (wordSlice.toLowerCase().includes('yes')) {
            if (word[3] === undefined || !(isAlphabetical(word[3]))) {
                // console.log(wordSlice);
                let newWord = word[0] === 'y' ? 'no' : 'No';
                if (word[3] !== undefined) newWord += word[2];
                return newWord;
                
            }
        } else if (wordSlice.toLowerCase().includes('no')) {
            if (word[2] === undefined || !(isAlphabetical(word[2]))) {
                let newWord = word[0] === 'n' ? 'yes' : 'Yes';
                if (word[2] !== undefined) newWord += word[2];
                return newWord;
            }

        }

        return word;
    })

    return strArr.join(' ');
}

console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
console.log(negate("no way, yes way!")); // "yes  way, no way!"
console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate("No, I do not know!")); // "Yes, I do not know!"

//Solved in 20.5 minutes
}

/* 11. The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

 maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
 If the array is made up of only negative numbers, return 0 instead.
 */
function problem11() {

/**
 * I: Array of numbers
 * O: Maximum sum of contiguous numbers
 * 
 * Explicits:
 * 1. If array is made up of only negativenumbers, return 0 instead
 * 
 * Implicits:
 * 1. Empty array && array of all negatives returns 0
 * 
 * CQ: What is contiguous?
 * What is max sum of contiguous?
 * 
 * [-2, 1, -3, 4, -1, 2, 1, -5, 4], === 6?
 * 4, -1, 2, 1 === 6
 * 
 * I am looking for the max sum of consecutive integers
 * What is the highest number I get from adding up integers in a row
 * 
 * Ideas:
 * 1. Combinations
 * 2. Expanding array
 * 
 * [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * 
 * -2, 1 --> -1
 * -2, 1, -3 --> -4
 * -2, 1, -3, 4 --> 0
 * 
 * [1, 2, -2, 3]
 * 
 * sum === 4
 * 1 --> 1
 * 1, 2 --> 3
 * 1, 2, -2 --> 1
 * 1, 2, -2, 3 --> 4
 * 
 * 2, -2, 3
 * 
 * Given an array of numbers,
 * find the highest possible sum from consecutive integers
 * Return highest possible sum
 * If array is empty or only negative integers are in the array, return 0
 * 
 * 
 * DS:
 * 1. Array of numbers
 * 2. Numbers
 * 
 * Algorithm:
 * ---if array is empty or I filter the array for positive numbers and there are none, return 0
 * 1. highestSumFound = -Infinity
 * 2. One loop, to check the current number
 * 3. Second loop, starting from the current number
 * ----Starting value === 0 += current num
 * ---See if current value > highestSumFound
 * -----If it is, re-assign highestSumFound
 * -----If it isn't, continue to next iteration
 * 4. Repeat above until end of array
 * 5. Return highestSumFound
 * 
 */

function maxSequence(arr) {
    if ((arr.filter(num => num > 0).length === 0) || arr.length === 0) return 0;

    let highestSumFound = -Infinity;

    for (let outer = 0; outer < arr.length; outer++) {
        let startingNumber = 0;
        for (let inner = outer; inner < arr.length; inner++) {
            startingNumber += arr[inner];
            if (startingNumber > highestSumFound) highestSumFound = startingNumber;
        }
    }

    return highestSumFound;

}

// // Test Cases
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

//Solved in 12.16 minutes
}


/* 12.
You are given an array of strings and an integer `k`. 
Your task is to return the first longest string consisting of `k` consecutive strings taken from the array. 
n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
 */

function problem12() {

/**
 * I: Array of strings, integer 'k'
 * O: First longest string consisting of 'k'' amount of consecutive strings taken from the array
 * 
 * Explicits:
 * 1. n being length of string array, if n = 0 or K > n or k <= 0 return empty string
 * 
 * Implicits:
 * 1. Return first occurence of highest possible longest string
 * 
 * IF the array is empty, return ''
 * If the second argument > array length, return ''
 * If second argument <= 0 return ''
 * 
 * ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2
 * abigaeiltheta is what is returned
 * 
 * Ideas:
 * 1. Combinations, longest combination
 * 2. Compare new strings if it is >, not >= current string
 * 3. empty string variable to build on
 * 
 * zone abigail --> string length, 5
 * 
 * abigail theta --> 7
 * 
 * Iterating through an array and looking for the longets combination of array elements
 * given a # of elements to combine that I can get from the array
 * 
 * DS:
 * 1. Array
 * 2. string variable
 * 3. String length
 * 
 * Algorithm:
 * 0--If array length === 0 || targetNum > array.length || targetNumber <= 0 return ''
 * 0. longestStringFound = ''
 * 1. Iterate through the array (stopping at array length - target #)
 * ---Outer loop variable startingStr = ''
 * 2. For each element, I will start the inner loop
 * 3. Inner loop, start from current iteration, and loop up to target # amount of times
 * ---concat current string to startingStr //zone, abigal
 * --Check if startingStr > longetsStrFound length
 * ----If so,re-assign variable
 * ----If not, continue iteration
 * 4. Repeat the above, and return longetsStringFound
 * 
 */

function longestConsec2(arr, targetNum) {
    if (arr.length === 0 || targetNum > arr.length || targetNum <= 0) return '';

    let longestStr = '';

    for (let i = 0; i <= arr.length - targetNum; i++) {
        let startingStr = '';
        for (let z = i; z < i + targetNum; z++) { //
            startingStr+= arr[z];
            // console.log(startingStr)
            if (startingStr.length > longestStr.length) longestStr = startingStr;      
        }
    }

    return longestStr;

}

function longestConsec(arr, targetNum) {
    if (arr.length === 0 || targetNum > arr.length || targetNum <= 0) return '';

    let highestStr = '';

    for (let i = 0; i <= arr.length - targetNum; i++) {
        let newStrArr = arr.slice(i, i + targetNum);
        let newStr = newStrArr.reduce((acc, el) => acc + el);
        if (newStr.length > highestStr.length) highestStr = newStr;
    }

    return highestStr;

}

// Test Cases
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

//Solved in 17.65 minutes
}

function problem13() {

}