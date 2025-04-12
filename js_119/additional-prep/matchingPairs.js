/**
P: Given a sentence, find all pairs of words whose first letter matches the last letter of its pair. 
Return an empty array if there’s no such pair. Only consider words that have at least length of 2 for the pairings.

 */

/**
I: String
O: Array of arrays, each containing a pair of words which the first letter of a pair
matches the last letter of it's pair

Explicits:
1. Only consider words that have at least a length of 2 for the pairings

Implicits:
1. Case does not seem to matter
1. Case should be the original in result array

Ideas:
1. Filter out/Ignore words < 2 length

"The cat in the hat"
The - T //Starting
cat - t --> [The, cat]
hat - t --> [The, hat]

cat - c // starting

in - i //starting

the - t //starting
hat - t --> [the, hat]

A man a plan a canal Panama
man - m //starting
plan - p //starting

[]

Data structures:
1. Array to whole nested array pairs
2. Temporary arrays to hold Starting elements
--Buld array if combination is valid and push [starting, valid pair]
3. Same collection iteration - incrementing
--

Algorithm:
1. pairArray = []
2. Split the string into words as an array && filter out words less than 2 length
3. For each word in the array
--Evaluate if the current word is a pair with any remaining words in the collection //
----Evaluate if first character to lowrecase of current word === last character lowercase of remaining words
------If match, push [current word, remaining word] into pairArray
------If no match, continue iteration
4. Repeat 3 until end
5. return pairArray


 */

function findMatchingPairs(str) {
    let filteredStrArr = str.split(' ').filter(el => el.length > 1)
    let pairArray = [];
    for (let word = 0; word < filteredStrArr.length; word++) {
        let currentWord = filteredStrArr[word];
        for (let innerWord = word + 1; innerWord < filteredStrArr.length; innerWord++) {
            let remainingWord = filteredStrArr[innerWord];
            if (currentWord[0].toLowerCase() === remainingWord[remainingWord.length - 1].toLowerCase()) {
                pairArray.push([currentWord, remainingWord]);
            }
        }
    }
    // console.log(pairArray);
    return pairArray;


}

// Test cases
console.log(findMatchingPairs("The cat in the hat")); // [ [ 'The', 'cat' ], [ 'The', 'hat' ], [ 'the', 'hat' ] ]
console.log(findMatchingPairs("A man a plan a canal Panama")); // []
console.log(findMatchingPairs("This sentence has no pairs")); // [ [ 'sentence', 'has' ], [ 'sentence', 'pairs' ] ]
console.log(findMatchingPairs("Apple leads to leap")); // []

//Solved in 14.85 minutes