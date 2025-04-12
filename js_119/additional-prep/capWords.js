/**
 * P: Create a function that takes a string and 
 * returns a new string with every word capitalized, 
 * except for certain words (like "the", "a", "an", "and", "but", "for", "at", "by", "from") unless they're the first word in the string.
Example:
Input: "the quick brown fox jumps over the lazy dog"
Output: "The Quick Brown Fox Jumps over the Lazy Dog"
 */

/**
 * I: String
 * O: New string with Every word capitalized except for particular words unless those particular words are the first in the string
 * 
 * the quick brown fox
 * The Quick Brown Fox
 * 
 * jumps over the lazy
 * Jumps Over the Lazy
 * 
 * Given a list of banned words, unless those banned words are first in the string, capitalize
 * all words except for banned words
 * 
 * DS:
 * 1. Array of words
 * 
 * Algorithm:
 * 1. Iterate through array of strings
 * 2. If index === 0, capitalize word
 * 3. Else, check if word is a banned word
 * 4. If not, capitalize it.
 */

function wordCapitalized(str) {
    let bannedWords = ["the", "a", "an", "and", "but", "for", "at", "by", "from"];
    return str.split(' ').map((word, idx) => {
        if (idx === 0) return word[0].toUpperCase() + word.slice(1);
        if (bannedWords.includes(word)) return word;
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

console.log(wordCapitalized("the quick brown fox jumps over the lazy dog"));

//Solved in 6 minutes