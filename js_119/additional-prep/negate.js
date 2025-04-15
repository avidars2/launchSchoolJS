/**
P: Write a function, `negate`, that converts all `“yes”` words to `"no"` and `"no"` words to `"yes"` in a sentence. 
The comparison for `"yes"` and `"no"` should be case insensitive.`"yes"` and `"no"` should be negated even if ending with `.`, `?`, `,`, or `!`.

 */

/**
 * I: String of words
 * O: New string with yes && no switched
 * 
 * explicits:
 * 1. Case insensitive
 * 2. Swap should happen even if there is punctuation
 * 
 * Implicits.
 * 1. Original case needs to be swapped
 * 
 * - Determine if a word is yes or no, even if punctuation is attached to it
 * 
 * Yes, I said no but now I say yes.
 * no
 * 
 * ['Yes,', 'no', 'yes.']
 * Yes, --> yes,
 * Does this include 'yes' or 'no'
 * 
 * Yes,
 * Replace the first 3 characters with 'no' and append the comma
 * 
 * no
 * replace first 2 characters and append remaining characters
 * 
 * Take a slice of the string from 0, 3 or 2 depending on the word, then change it with something else, append remaining characters
 * 
 * slice from 3 or 2 depending on the word
 * 
 * ['now', 'no,']
 * no
 * 
 * 
 * DS:
 * 1. Array of words
 * 2. Strings
 * 
 * Algorithm:
 * 1. Split string into array of words
 * 2. For each word, determine if the lowercase verison includes 'yes' or 'no'
 * 3. If not, ignore
 * 4. If so, 
 * ---If yes, swap word to no
 * ------Slice starting at index 3 to end of word (this will be punctuation if any)
 * -----append no or No depending on original case
 * ------if word[0] === 'Y' 'N' 
 * ------Append with punctuation and re-map the word
 * ------append correct case character + remainder of word + punctuation
 * ---If no, inverse of above except start at index 2
 * 5. Join array of words into string and return
 * 
 * 
 * 
 */

function negate(str) {
    let strArr = str.split(' ');
    let punctuation = [`.`, `?`, `,`, `!`];

    let newStr = strArr.map(word => {
        if (word.toLowerCase().includes('yes') && punctuation.includes(word[3])) {
            //yes
            let punctuation = word.slice(3);
            let firstLetter = word[0] === 'y' ? 'n' : 'N';
            let remainderOfWord = 'o';
            return firstLetter + remainderOfWord + punctuation;
        }
        if (word.toLowerCase().includes('no') && punctuation.includes(word[2])) {
            //no
            let punctuation = word.slice(2);
            let firstLetter = word[0] === 'n' ? 'y' : 'Y';
            let remainderOfWord = 'es';
            return firstLetter + remainderOfWord + punctuation;
        }

        return word;
        
    })

    return newStr.join(' ');
}


// console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
// console.log(negate("no way, yes way!")); // "yes way, no way!"
// console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
// console.log(negate("No, I do not know!")); // "Yes, I do not know!"

//Solved in 17.5 minutes



/**
 * I: String of words
 * O: New string with Yes and no's reversed in string
 * 
 * Explicits:
 * 1. The comparison for yes/no should not be dependent on case
 * 2. Punctuation should remain as well
 * 
 * Implicits:
 * 1. Yes/yes No/no gets swapped, keeping the original case
 * 2. Punctuation is only at the end of each word
 * 
 * Yes, --> No,
 * 
 * no way, --> yes way,
 * 
 * I am looking for the words yes/no (Case-insensitive) and swapping them with each other and
 * returning the new string
 * 
 * 1. Have a way to swap words with original case
 * 2. Have a way to determine which word is yes and no in the string
 * 
 * Ideas:
 * 1. Measure alphabetical length of word, if 3, see if it is 'yes' and if 2, see if it is 'no'
 * 
 * DS:
 * 1. Array of words
 * 
 * Algorithm:
 * 1. Split string into words array
 * 2. Iterate through array
 * 3. For each word, check alphabetical length
 * --For each word, split into characters, trim out non-alphabetic characters
 * --Get length of filtered word
 * 4. If 3, check if word is 'yes' and if 2, check if word is 'no'
 * 5.If either of the above is true
 * --If 'yes', swap out with 'no', if 'Yes', swap out with 'No'
 * --and vice versa
 * 6. Return swapped word to modified words array
 * 7. Join and return string
 * 
 * 
 */ 
function negate2(str) {
    let wordArray = str.split(' ');

    let modifiedString = wordArray.map(word => {
        let charArray = word.split('')
        let alphaChars = charArray.filter(char => isAlphabetical(char));
        let punctuation = charArray.filter(char => !(isAlphabetical(char)));
        if (alphaChars.length === 3) {
            //is yes?
            if (alphaChars.join('').toLowerCase().includes('yes')) {
                //swap to no
                if (alphaChars[0] === 'Y') {
                    return 'No' + (punctuation[0] ?? '');
                } else if (alphaChars[0] === 'y') {
                    return 'no' + (punctuation[0] ?? '');
                }
            } else return word;

        } else if (alphaChars.length === 2) {
            //is no?
            if (alphaChars.join('').toLowerCase().includes('no')) {
                //swap to yes
                if (alphaChars[0] === 'N') {
                    return 'Yes' + (punctuation[0] ?? '');
                } else if (alphaChars[0] === 'n') {
                    return 'yes' + (punctuation[0] ?? '');
                }

            } else return word;
        } else return word;

    });
    return modifiedString.join(' ')

}

function isAlphabetical(character) {
    return (character.toLowerCase() >= 'a' && character.toLowerCase() <= 'z')
    
}

console.log(negate2("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
console.log(negate2("no way, yes way!")); // "yes way, no way!"
console.log(negate2("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate2("No, I do not know!")); // "Yes, I do not know!"