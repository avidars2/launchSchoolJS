// Write a function, snakecase, that transforms each word in a sentence to alternate between lower (even index value) and upper (odd index value) 
// cases when the word before or after it  begins with "s". -- Avi

/**
 * I: String
 * O: String where even index valeus are lowercase and odd index values are uppercase when the word before or after it begins with s
 * 
 * Explicits:
 * 1. If word before or after begins with 's', change word to snake case
 * 2. Even index values are lower case
 * 3. Odd indes values are uppercase
 * 
 * Implicits:
 * 
 * Hi Sarah --> hI Sarah
 * 
 * sas assess pass --> sas AsSeSs pass
 * 
 * 1. Check a word and what letter it begins with
 * 2. If it begins with 's', keep that n oted
 * 3. Check next word, and what letter it begins with
 * 4. If 's', keep that noted
 * --If previous word begins with 's' or word after it begins with 's',
 * convert word to snake case
 * 
 * Ideas:
 * 1. Have an array that represents each word
 * 2. Pass through array and note words which have 's' in beginning
 * 3. Mark these values in a new array
 * 4. Using new array, use those locations to amend word array into snakeCase
 * 
 * Algorithm:
 * 1. Split string into array of words
 * 2. Iterate through array of words returning a map of words which begin with 's'
 * 3. Iterate through the mapped array to determine which words need to be modified
 * 'simple sentence structure' --> [true, true, true]
 * 'apples are sweet' --> [false, true, false]
 * Check word after current word, if begins with 's', then return true, else false
 * If last index, check previous word if begins with 's', if so then return true
 * 
 * Iterate over true/false array, map snakecase function execution
 * 
 * 
 */

function snakecase(str) {
    let wordArr = str.split(' ');

    let changeMap = wordArr.map((word, idx) => {
        if (idx === wordArr.length - 1) {
            return wordArr[idx - 1][0].toLowerCase() === 's';
        } else if (wordArr[idx + 1][0].toLowerCase() === 's') {
            return true;
        } else return false;
    })

    // console.log(changeMap);

    let finalSentence = changeMap.map((bool, idx) => {
        // console.log('bool', bool);
        if (bool) {
            return snakeChange(wordArr[idx]);
        }
        return wordArr[idx];
    }).join(' ');

    // console.log(changeMap);
    // console.log(finalSentence);
    return finalSentence
}

function snakeChange(word) {
    //Split word into array
    //map array, if index is odd, change letter to uppercase
    //if index is even, change letter to lowercase
    //return and join
    let snakeWord = word.split('').map((char, idx) => {
        if (idx % 2 === 0) return char.toLowerCase();
        if (idx % 2 === 1) return char.toUpperCase();
    }).join('');

    return snakeWord

    // console.log(snakeWord);
}

// snakeChange('slither');;

// Test cases
console.log(snakecase("Snakes slither silently")); // "sNaKeS sLiThEr sIlEnTlY"
console.log(snakecase("simple sentence structure")); // "sImPlE sEnTeNcE sTrUcTuRe"
console.log(snakecase("apples are sweet")); // "apples aRe sweet"
console.log(snakecase("swiftly swimming swans")); // "sWiFtLy sWiMmInG sWaNs"
console.log(snakecase("the sun sets slowly")); // "tHe sUn sEtS sLoWlY"
console.log(snakecase("A quick brown fox")); // "A quick brown fox"