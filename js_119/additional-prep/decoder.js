/**
 * P: Create a function called decoder that decodes a secret message from a sentence. 
 * The secret message is formed by retrieving every n**-th character** from every n**-th word** of the sentence.

 */

/**
 * I: String, Number
 * O: String representing every 'n'th character from every 'n'th word of the sentence
 * 
 * Explicits:
 * 1. Retrieve every n'th character from every n'th word of the given string
 * 2. Concat into a new string and return
 * 
 * Implicits:
 * 1. Spaces are not include in the output string
 * 2. If it is isn't possible to decode the string, return an empty string
 * ---If the n'th character is out of bounds of the string
 * 
 * 
 * "I love programming in JavaScript", 3
 * programming -->oai
 * 
 * I am iterating over a string
 * Looking for every n'th word (3rd word)
 * Then from that n'th word, get every n'th character (every 3rd character form the 3rd word)
 * 
 * 
 * 
 * Send every code to find secrets hidden
 * vroert
 * 
 * Data structure:
 * 1. Array of strings (with each word in the array)
 * 2. Strings,for loop
 * 
 * Algorithm:  * "I love programming in JavaScript", 3
 * --returnString
 * 1. Break string into array of words, split by space
 * 2. For each word, evaluate if the index is a multiple of the 'decodenum'
 * ---Index + 1 % decodenum === 0
 * ---If so, second loop over that word
 * --If not, skip
 * 3. If so
 * ---For each character, if the current character index + 1 % decodenum === 0
 * -----Append to returnString
 * -----If NOT, ignore
 * 4. Return returnString
 * 
 */

function decoder(str, decodeNum) {
    let returnStr = ''
    let strArr = str.split(' ');

    strArr.forEach((word, idx) => {
        if (!((idx + 1) % decodeNum === 0)) return;
        // console.log(word)
        for (let char = 0; char < word.length; char++) {
            if ((char + 1) % decodeNum === 0) returnStr += word[char];
        }
    })


    return returnStr;
}

// Test cases
console.log(decoder("She sells sea shells on the sea shore", 2)); // Output: "elhlshhr"
console.log(decoder("The quick brown fox jumps over the lazy dog", 3)); // Output: "oeg"
console.log(decoder("I love programming in JavaScript", 3)); // Output: "oai"
console.log(decoder("Just a simple test sentence to decode", 4)); // Output: "t"
console.log(decoder("This will not work well", 5)); // Output: ""
console.log(decoder("Send every code to find secrets hidden", 2)); // Output: "vroert"

//Solved in 14 minutes