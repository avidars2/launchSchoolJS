/**
P: Given a string of words, you need to find the highest scoring word. Return the highest scoring word as a string.
Rules: 
- Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
- If two words score the same, return the word that appears earliest in the original string.
- All letters will be lowercase and all inputs will be valid.
 */

const { to } = require("cli-color/move");

/**
 * I: String
 * O: Highest scoring word
 * 
 * Explicits:
 * 1. All letters will be lowercase and all inputs will be valid
 * 2. If two words score the same, return the word that appears earlieset in the original string
 * 
 * Implicits:
 * 1. A word are the groups of characters delineated by spaces
 * 2. Lexicographic order determines word score
 * 
 * 'aa b' 
 * a - 1
 * a - 1
 * total for aa === 2
 * 
 * b value === 2
 * 
 * aa is returned because it appears first
 * 
 * b aa
 * b === 2
 * aa === 2
 * 
 * b is returned here becase b appears first
 * 
 * Given a string of words, evaluate each word for their value
 * Return the highest value word. If a word and another word have
 * the same value, return the word which appeared first
 * 
 * DS:
 * 1. Array of strings
 * 
 * Algorithm:
 * -Var: Highest word found = ''
 * -Var: Value of highest word found = -Infinity
 * 0. For each alphabetical character, create value object
 * {a: 1, b: 2, etc.}
 * //Split all words of alphabet
 * 1. Split string into array //aa b [aa, b]
 * 2. Loop through the words, calculating the value of each word
 * --Iterate through each individual word, //a, 1, a, 1 === 2, b === 2
 * ---for each character, get value (index in alphabet array + 1)
 * ----Add up values to totalWordvalue
 * ---Total value is value of word
 * 3. If value of current word > value of highestWordFoundValue,
 * re-assign highest word found and value
 * 4. Repeat til end of array
 * 5. Return highest word found
 */

function high(str) {
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz']; //char value === index + 1
    let strArr = str.split(' ')

    let highestValueWord = '';
    let highestValueFound = -Infinity;

    //aa b

    strArr.forEach((word) => {
        if (getValueOfWord(word, alphabet) > highestValueFound) {
            highestValueWord = word;
            highestValueFound = getValueOfWord(word, alphabet);
        }
    })

    return highestValueWord;

}

function getValueOfWord(word, alphabetArr) {
    let total = 0;
    for (let char = 0; char < word.length; char++) {
        let wordValue = alphabetArr.findIndex((letter) => letter === word[char]) + 1;
        total+= wordValue;
    }
    // console.log(total)
    return total;
}
// let alphabet = [...'abcdefghijklmnopqrstuvwxyz']; //char value === index + 1

// getValueOfWord('ab', alphabet)

console.log(high("man i need a taxi up to ubud")); // "taxi"
console.log(high("what time are we climbing up the volcano")); //"volcano"
console.log(high("take me to semynak")); // "semynak"
console.log(high("aa b")); // "aa"
console.log(high("b aa")); // "b"
console.log(high("bb d")); // "bb"
console.log(high("d bb")); // "d"
console.log(high("aaa b")); // "aaa"

//Solved in 14.75 minutes