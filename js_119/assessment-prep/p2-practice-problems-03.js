/**
Create a function that takes a string argument and returns a 
copy of the string with every second character in 
every third word converted to uppercase. Other characters should remain the same.
 */

/**
 * I: String
 * O: New string, every second character in every 3rd word is uppercase
 * 
 * Ideas:
 * index % 2 && index % 3
 * 
 * Explicits:
 * 1. String argument
 * 2. Every second character in every third word becomes uppercase
 * 
 * Implicits:
 * 1. If word has less than 2 characters, nothing happens to it
 * 
 * CQ:
 * 1. What if there is less than 3 words?
 * 
 * 'It is a long established fact that a reader will be distracted'
 * 
 * a --> a
 * fact --> fAcT
 * reader --> rEaDeR
 * 
 * Taking a string
 * Taking every third word (if index + 1 % 3 === 0)
 * Modifying it so that every second character is uppercase (if index % 2 === 1, uppercase)
 * 
 * Data structures:
 * 1. String
 * 2. Array to contain words
 * 
 * Algorithm:
 * 1. Split string into array of words
 * 2. Map over the array checking if the index + 1 % 3 === 0
 * 3. If so, modify the stsring so that every second character is uppercase
 * --Split word into character array, map it so that if index % 2 === 1, return uppercase version
 * 4. Join the array of words, and return the new string
 * 
 */

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

function toWeirdCase(str) {
    let strArray = str.split(' ')
    let newWordArray = strArray.map((el, idx) => {
        if (!(((idx + 1) % 3) === 0)) return el;
        return el.split('').map((el, idx) => {
            if (idx % 2 === 1) return el.toUpperCase();
            return el;
        }).join('');
    })

    // console.log(newWordArray);
    return newWordArray.join(' ');
}

let original = 'Lorem Ipsum is simply dummy text of the printing world';
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
p(toWeirdCase(original) === expected);

original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
p(toWeirdCase(original) === expected);

p(toWeirdCase('aaA bB c') === 'aaA bB c');

original = "Mary Poppins' favorite word is " +
           "supercalifragilisticexpialidocious";
expected = "Mary Poppins' fAvOrItE word is " +
           "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
p(toWeirdCase(original) === expected);

//Time to solve: 10.5 minutes