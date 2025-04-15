/**
P: Implement a function that shortens a sentence such that it will fit within the character limit set. It shortens by removing vowels in the 
sequence of a, e, i, o, and u. Start removing from the end of the sentence. If it can not be shortened to fit within character limit, return an 
empty string. Spaces don’t count for the limit.

 */

/**
 * I: String of words, Number
 * O: Shortened String or empty string
 * 
 * Explicits:
 * 1. Spaces don't count for limit
 * 2. Remove vowels in sequence of a, e, i, o u
 * 3. Start by removing from end of sentence
 * 
 * Implicits:
 * 1. Input is string of words where spaces don't count for limit
 * 2. Length is amount of characters string should be
 * 3. Remove vowels until string is at target character length - confirm this
 * 
 * 'This is a test sentence', 18
 * [This, is, a, test, sentence]
 * this === 4
 * is === 2
 * a === 1
 * test === 4
 * sentence === 8
 * 
 * 19 characters long, and needs to go to 18
 * 
 * a -
 * a --> ''
 * 
 * New length with 'a' removed is 18
 * 
 * DS:
 * 1. String of words, Array of words
 * 2. String
 * 3. Number
 * 
 * Algorithm:
 * 1. Split string into array of words by separating by spaces
 * 2. Measure length of total characters in array
 * 3 If <= target length, return original string
 * 4. Reverse array of words
 * 5. Reverse each word in array
 * 6. Loop through vowels (a, e, i, o u)
 * 7. For each word, check for fist occurence of current vowel
 * 8. Remove it from the word, convert back into string, and check length
 * ---Break word into array of characters, replace the character from current vowel to ''
 * ---If <= target length, break all loops and return string
 * ---Have an array with the mutated strings so that the changes are there for each iteration
 * --If not, repeat sequence
 * 9. Reverse words and array, join into string, and return
 * 
 * 
 * sentence --> Includes a? If so, remove last occurence of 'a'
 * then check new length of entire string
 * 
 * 
 */

function minimumShorten(str, target) {
    if (measureCurrentLengthOfStrArr(str.split(' ')) <= target) return str;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let strArr = str.split(' ').map(el => el.split('').reverse().join('')).reverse();
    // console.log(strArr)

    for (let vowel = 0; vowel < vowels.length; vowel++) {
        let currentVowel = vowels[vowel];
        for (let word in strArr) {
            if (strArr[word].includes(currentVowel)) {
                // console.log(strArr[word])
                let wordArray = strArr[word].split('');
                // console.log(wordArray);

                let indexOfVowel = wordArray.findIndex(el => el === currentVowel);
                wordArray.splice(indexOfVowel, 1);
                strArr[word] = wordArray.join('');
                
                let strCopy = strArr.slice().map(el => el.split('').reverse().join('')).reverse();
                if (measureCurrentLengthOfStrArr(strCopy) <= target) return strCopy.join(' ');
            }
                                
            }
        }

        strArr = strArr.map(el => el.split('').reverse().join('')).reverse().join(' ');
        // console.log(strArr);
        if (strArr.length > target) return '';
        return strArr;
    }



function measureCurrentLengthOfStrArr(strArr) {
    return (strArr.reduce((acc, el) => {
        acc+= el.length;
        return acc;
    }, 0))
}


// Test cases
console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
console.log(minimumShorten("Short", 10)); // Short
console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""

//Solved in 30+ minutes
