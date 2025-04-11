/**
 * Create a function that takes a non-empty string as an argument. The string consists entirely of lowercase alphabetic characters. 
 * The function should return the length of the longest vowel substring. The vowels of interest are "a", "e", "i", "o", and "u".
 * 
 * I: Non-empty string
 * O: Return length of the longest vowel substring
 * 
 * Explicits:
 * 1. Input is a non-empty string which is all lowercase
 * 2. Vowels are 'a, e, i, o, u'
 * 
 * Implicits:
 * 1. Vowel lengths can be repeating (occur multiple times at same length)
 * 
 * vowelConcurrency = 1
 * 'eau' --> 'e' is a vowel
 * 'a' --> is a vowel
 *  * vowelConcurrency = 2
 * 'u' --> is a vowel
 *  * vowelConcurrency = 3
 * 
 * End of string, return 3
 * 
 * beauteous
 * highest vowelConcurrency = 0;
 * 'b' --> not a vowel, ;
 * if (vowelConcur > highest) re-assign then set vowelConcurrency = 0
 * 'e' --> vowel, vowelConcur = 1
 * 'a' --> vowel, vowelConcur = 2
 * u --> vowel, vowelConcur = 3
 * 't' --> not vowel
 *  * if (vowelConcur > highest) re-assign then set vowelConcurrency = 0
 * 
 * 
 * Data structure:
 * 1. Array
 * 2. String
 * 
 * Algorithm:
 * 1. Iterate through the string as an array
 * 2. For each element, evaluate if it is a vowel
 * --Outer vowel counter = 0
 * 3. If so, increment vowelCounter by 1
 * 4. If not, 
 * --check if vowelCounter > highestVowel counter
 * ----If so, re-assign highest vowel counter
 * --Set vowel counter to 0
 * 
 * 6. Return highest vowel counter
 */

function longestVowelSubstring(str) {
    let strArr = str.split('');
    let highestConcurrentVowels = 0;
    let currentVowelConcurrent = 0;
    strArr.forEach(char => {
        if (isVowel(char)) {
            currentVowelConcurrent++;
        } else {
            if (currentVowelConcurrent > highestConcurrentVowels) {
               highestConcurrentVowels = currentVowelConcurrent;
            }
            currentVowelConcurrent = 0; 
        }
    })
    
    if (highestConcurrentVowels < currentVowelConcurrent) {
        highestConcurrentVowels = currentVowelConcurrent;
    }
    // console.log(highestConcurrentVowels);
    return highestConcurrentVowels;
}

function isVowel(char) {
    return 'aeiou'.includes(char);
}



const p = console.log;
p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);

//Solved in 12.5 minutes
