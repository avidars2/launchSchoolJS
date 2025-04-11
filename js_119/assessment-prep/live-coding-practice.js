/**
 * You have to create a function that takes a positive integer number
 * and returns the next bigger number formed by the same digits:
 * 
 * 12 ==> 21
 * 513 ==> 531
 * 2017 ==> 2071
 * If no bigger number can be composed using those
 * digits return -1
 * 
 * 9 ==> -1
 * 111 ==> -1
 * 531 --> -1
 */
function solution1() {
/**
 * I: Positive Integer
 * O: Next biggest number formed by the same digits
 * 
 * Explicits:
 * 1. If no bigger # can be returned, return -1
 * 2. Return next biggest numeber formed by digits
 * 
 * Implicits:
 * 1. The output will have to be the same length of digits as the input unless -1 is returned
 * 2. If all digits are the same, -1 is returned
 * 
 * 12 --> 21
 * 513 --> 531
 * 
 * 0 --> -1
 * 
 * Idea:
 * 1. Increment numbers by 1 starting at the input
 * and check each # if it includes all the digits of the original input
 * 
 * 13, increment by 1 until we get to a number that is the max length of the number so
 * for 13, it would be 99
 * 
 * Increment until we find another number where each digit ticks off a digit in the input
 * 
 * 131, [1, 3, 1]
 * 
 * 310 --> take out 3 and 1, leaving 1
 * 
 * If the array is not 0 by the time the digits are iterated through, then it isn't a match
 * 
 * DS:
 * 1. Array to hold input values
 * 2. Numbers
 * 3. String to split into numbers
 * 
 * Algorithm:
 * 1. Take the number, convert it to a string
 * 2. Split the string into individual characters into an array
 * 
 * 1. Evaluate each number starting at the input number, up to the highest value of same length of digits
 * --9 repeating for the length of the digits
 * --Take max value digit from input, and repeat that as the cap
 * 2. Check if each increment includes each value in the array once
 * 3. IF so, it is the next highest value, return that #
 * 4. If this can't be found, return -1
 */

function nextBiggerNum(input) {
    let numChars = `${input}`.split('');
    let repeating = numChars.every((int, idx) => {
        if (idx === 0) return true;
        if (idx > 0) {
            if (int === numChars[idx - 1]) return true;
        } else return false;
    })
    if (repeating) return -1;

    // console.log(numChars);
    let maxNum = Number('9'.repeat(numChars.length));
    // console.log(maxNum);

    let higherNum;
    for (let i = input + 1; i < maxNum; i++) {
        higherNum = evaluateNumber(i, numChars);
        if (higherNum) {
            // console.log(higherNum);
            return higherNum;
        }
    }
    // console.log(higherNum);

    if (higherNum === maxNum) return -1;
    return -1;
}

function evaluateNumber(input, arr) {
    arr = arr.slice();
    //26, ['2', '5']
    //Evaluate each character and see if it is in the array
    //If the element is in the array, remove it from the array
    //If the element is not in the array, return false
    numArr = `${input}`.split('');

    let foundNum = numArr.every((el) => {
        if (arr.includes(el)) {
            let foundElement = arr.findIndex(element => el === element);
            arr.splice(foundElement, 1);
            return true;
        } return false;
    })

    return foundNum ? input : false;

    //Return the number that includes each element once
    //Or return false;

}

console.log(nextBiggerNum(9)) // -1
console.log(nextBiggerNum(12)) //21
console.log(nextBiggerNum(513)) //531
console.log(nextBiggerNum(2017)) //2071
console.log(nextBiggerNum(111)) //-1
console.log(nextBiggerNum(531)) //-1
console.log(nextBiggerNum(123456789)) //123456798

}

/**
 * You have to create a function that takes a positive integer number
 * and returns the next bigger number formed by the same digits:
 * 
 * 12 ==> 21
 * 513 ==> 531
 * 2017 ==> 2071
 * If no bigger number can be composed using those
 * digits return -1
 * 
 * 9 ==> -1
 * 111 ==> -1
 * 531 --> -1
 */

/**
 * I: Positive integer
 * O: Next biggest number formed by same digits
 * 
 * Explicits:
 * 1. If no bigger number can be composed, return -1
 * 
 * Implicits:
 * 1. The highest value will be 9 repeating for the same length of the number

 * 12 ==> 21
 * 513 ==> 531
 * 
 * 2017 --> 2071
 * 
 * Increment through numbers until a number
 * which includes all the numbers above is found
 * 
 * 112
 *  [1, 1, 2]
 * 113
 * 1 --> [1, 1, 2] --> [1, 2]
 * 1 --> [1, 2] --> [2]
 * 3 --> [2] --> [2]
 * 
 * 12
 * 13 [12] has 1 [2], 3 [2] remains,
 * While the array still has a length, the number combination does not work
 * 
 * Take a number, 12
 * Increment starting from 13 by 1 at a time
 * For each number, check if the numbers within that number are in the input number
 * ---Split input # into individual elements [1, 2]
 * ---Iterate through incremented #, and check if each of those elements are included in the
 *-----array. If so, pop it from the array. 
 ------Repeat for all elements, and if array length is not 0/ > 0, it is not a match
 -----If array length is 0, then it is a match and I can return that number as the next biggest
 * End of string

 Data structures:
 1. Array
 2. Strings (Number representation of strings)
 3. Loops to increment
 ---Loop to iterate through current increment
 ----Array to be mutated to evaluate if current increment is valid

 Algorithm:
 1. Take starting number //12
 2. Start incrementing loop at starting # + 1 //13
 3. Loop until incrementing # (9 repeating input length) //99

 Evaluate each increment
 1. Split input into str array ['1', '2']
 2. Iterate over increment //13
 --If increment string char is included in str array, pop that element from str array // 1 would pop '1', 3 would not pop '2'
 --Repeat until end of increment str
 3. Return if str array length === 0. If so, return true else false //13 would return false, so it would go to next increment '14' until 21
 
 If no elements return true, return -1
 If an element returns true, return that Number
 */

 function nextBiggerNum(num) {
    let startingNum = num;
    let highestValue = Number(`9`.repeat(`${startingNum}`.length));

    for (let newNum = startingNum + 1; newNum < highestValue; newNum++) {
        if (evaluateIncrement(newNum, num)) {
            return newNum
        }

    }

    return -1;
 }

 function evaluateIncrement(num, input) {
    let inputArr = `${input}`.split('');
    // console.log(inputArr)
    let numArr = `${num}`.split('')
    for (let idx = 0; idx < numArr.length; idx++) {
        let currentEl = numArr[idx];
        // console.log(currentEl)
        if (inputArr.includes(currentEl)) {
            let indexx = inputArr.findIndex(el => el === currentEl);
            inputArr.splice(indexx, 1);
        }
    }

    return inputArr.length === 0;
 }

//  evaluateIncrement(21, 12)



console.log(nextBiggerNum(9)) // -1
console.log(nextBiggerNum(12)) //21
console.log(nextBiggerNum(513)) //531
console.log(nextBiggerNum(2017)) //2071
console.log(nextBiggerNum(111)) //-1
console.log(nextBiggerNum(531)) //-1
console.log(nextBiggerNum(123456789)) //123456798

/**
 * 123
 * 
 */

//Solved in 21.5 minutes