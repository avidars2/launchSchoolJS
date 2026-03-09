//15 - Total Square Area
//Rectangles as arrays
///Height and width
function problem15() {
/**
 * 
 * Explicits:
 * 1. Write function named totalArea
 * 2. Takes an array of arrays as arguments
 * 3. Function returns total area covered by all the rectangles
 * 
 * Implicits:
 * 1. Each sub-array has 2 elements
 * 2. Multiple the numbers in each sub-array, then add the total of each subarray
 * 
 * I: [[3, 4], [6, 6]]
 * 
 * 3 * 4 = 12
 * 6 * 6 = 36
 * 
 * 48
 * 
 * 1. Iterate through the array
 * 2. For each sub-array, multiply elements up to 2 --although assume validation
 * 3. Track totals and sum
 * 
 * Map through array
 * Reduce the array
 * 
 * 
 */

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangles) {
  return reduceArrays(rectangles.map(subArr => {
    // console.log(reduceRectangle(subArr));
    return reduceRectangle(subArr);
}));
}

function reduceRectangle(subArr) {
  return subArr.reduce((acc, el) => acc * el);
}

function reduceArrays(arr) {
  return arr.reduce((acc, el) => acc + el);
}

console.log(totalArea(rectangles));    // 141

function totalSquareArea(rectangles) {
  return reduceArrays(rectangles.filter(subArr => subArr[0] === subArr[1]).map(subArr => {
    return reduceRectangle(subArr)
  }))
}

console.log(totalSquareArea(rectangles));    // 121
}

//16 Processing Releases
function problem16() {

/**
 * I: Array of movie data
 * O: Array of objects containing only the id and title key/value pairs
 * 
 * Explicits:
 * 1. Id/Title, if exists, are an integer > 0 and non-empty string respectively
 * 2. Return array should only contain objects that have both id and title data
 * 3. Keep only id and title data for each release
 * 
 * Implicits:
 * 1. Title property may not even exist in object
 * 2. id property seems to also not exist in every object
 * 3. Check if title and id are present, then check if they are 0/ min string length of 0
 * 
 * Q's
 * 1. Can I assume that the id will always be a number if it exists?
 * 2. Can I assume that the title will always be a string if it exists?
 * 
 * {title: 'f'}
 * 
 * Check object
 * look for "id" property
 * --if ID prop, passes one validation
 * ----if ID prop, check if > 0 --> Good
 * Check for title prop
 * --if title prop, passes another validation
 * ----if title prop, check if length > 0, and if so, passes another validation
 * 
 * --If it passed, add object to new arary
 * 
 * DS:
 * 1. Array that contains objects
 * 
 * Idea:
 * 1. filter
 * 2. Iterate via a for loop
 * 
 * Algorithm:
 * 1. Iterate through the array
 * 2. For each element, check if the object has an id and title prop
 * ----If those properties exist, check that the ID is > 0 and the prop is >= 1 string length
 * 3. If validation passes, add element to new array
 * 4. If no pass, skip over object
 * 5. Return new array
 * 6. Map new array to only include the id and title property of each object
 * 
 * 
 * 
 */
function processReleaseData(data) {
  let filteredArray = data.filter(obj => {
    if ("id" in obj && "title" in obj) {
      if (obj.id > 0 && obj.title.length > 0) return true;
    }
    return false;
  })

  return filteredArray.map(obj => { return {id: obj.id, title: obj.title}})
}

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];


console.log(processReleaseData(newReleases));


}

//17 Octals
function problem17() {

/**
 * I: Octal represented as string
 * O: Decimal
 * 
 * Explicits:
 * 1. octalToDecimal function takes String input representing octal
 * 2. Returns decimal version of that value as a Number
 * 3. Convert yourself, no pre-existing methods
 * 
 * Context:
 * 1. Octals work like base 10 notation except uses powers of 8
 * --233 === 233
 * ----2 * 10sq === 200
 * -----3 * 10^1 === 30
 * ---------3 * 10^0 === 3
 * ---added up we get 233
 * 
 * --233 === 155
 * ----2 * 8^2 --> 128
 * ------3 * 8^1 --> 24
 * ------- 3 * 8^0 --> 3
 * 
 * Implicits:
 * 1. Decimal refers to base 10 notation
 * 2. Break apart string "octal" and convert each aspect to it's respective base 8 equivalent
 * 
 * 130
 * 
 * 1 --> 8^2
 * 3 --> 8^1
 * 0 --> 8^0
 * 
 * Reverse the string
 * 031 --> the index position of the string, corresponds with the power
 * 
 * 0 --> 0 * 8 ^ (idx --> 0) --> 0
 * 3 --> 3 * 8 ^ 1 --> 24
 * 1 --> 1 * 8 ^ 2 --> 64
 * 
 * 
 * DS:
 * 1. String representation of octal
 * 2. Array from the string
 * 3. Return a number
 * 
 * Algorithm:
 * 1. Split the string into individual elements
 * 2. Reverse the given array
 * 3. For each element, multiply it by 8 to the power of the current elements index
 * 4. Sum each element and return the new total
 * 
 * Ideas:
 * 1. Reduce, after reversing it
 * 2.---Process the current element, and then sum it with the previous
 * 
 */

function octalToDecimal(numberString) {
  let reversedSplit = numberString.split('').reverse();
  // console.log(reversedSplit);

  let result = reversedSplit.reduce((acc, el, idx) => {
    let baseEightEquivalent = Number(el) * Math.pow(8, idx);
    return acc + baseEightEquivalent;
  }, 0);

  console.log(result);
  return result;

}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9

}

//18
{
//anagrams

/**
 * I: word, and array of words
 * O: array containing anagrams
 * 
 * Explicits: 
 * 1. If word contains all letters in words in array, return
 * 
 * Algorithm:
 * 1. sort string alphabetically
 * 2. Map array so strings are sorted alphabetically
 * 3. Filter array for strings === sorted string
 */

function anagram(word, list) {
  let sortedStr = sortStr(word);
  let sortedList = list.filter(word => sortStr(word) === sortedStr);
  console.log(sortedList)
  return sortedList

}

function sortStr(word) {

  let sortedWord = word.split('').sort().join("");
  console.log(sortedWord);
  return sortedWord;


}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]

}