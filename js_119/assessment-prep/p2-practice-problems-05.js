/**
Create a function that takes a string argument and returns the character that occurs most often in the string. 
If there are multiple characters with the same greatest frequency, 
return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.

I: String argument
O: Character that occurs most often in the string, if multiple characters have same frequency, return first appearing

Explicits:
1. Return most frequently occuring character that appears first (assuming 2 characters have equal repeats)
2. Case does not matter

Implicit:
1. 

Ideas:
1. Iterate through the string
2. Count characters into an object
3. Convert object to array and return highest value

Hello World --> 
H -- 1
e -- 1
l -- 3
l
o -- 2
W -- 1
o
r -- 1
l
d -- 1

h: 1
e: 1
l : 3
o: 2
w: 1
r: 1
d: 1

Get max value from the object

Order of appearance array
['h', 'e', 'l', 'o'', 'w', 'r', 'd']
Iterate through array, checking value for highest
highest value === 1 for h, e is skipped because it's the same, l replaces it because it is 3
highest char === l

Data structures:
1. String
2. Object
3. Array

CQ:
1. Does space count?

Algorithm:
1. Iterate through string
2. Add each character to an object and count + 1
3. Add each unique character to array
orderOfAppearance = []
4. Iterate through order of appearance and check key of object number
--If number > current number, re-assign current number
--Re-assign current character
--If lower, skip
--Repeat til end of array

5. return character
 */

function mostCommonChar(str) {
    let strObj = {};
    let orderOfAppearance = [];
    for (let i = 0; i < str.length; i++) {
        strObj[str[i].toLowerCase()] = (strObj[str[i].toLowerCase()] || 0) + 1;
        if (!orderOfAppearance.includes(str[i].toLowerCase())) {
            orderOfAppearance.push(str[i].toLowerCase());
        }
    }
    
    let curretHighest = -Infinity;
    let currentChar = '';

    orderOfAppearance.forEach(char => {
        if (strObj[char] > curretHighest) {
            curretHighest = strObj[char];
            currentChar = char;
        }
    })

    // console.log(strObj, orderOfAppearance);
    // console.log(curretHighest, currentChar);

    return currentChar
    

}

const p = console.log;
p(mostCommonChar('Hello World') === 'l');
p(mostCommonChar('Mississippi') === 'i');
p(mostCommonChar('Happy birthday!') === 'h');
p(mostCommonChar('aaaaaAAAA') === 'a');

let myStr = 'Peter Piper picked a peck of pickled peppers.';
p(mostCommonChar(myStr) === 'p');

myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
p(mostCommonChar(myStr) === 'e');

//Solve time: 13.5 minutes


