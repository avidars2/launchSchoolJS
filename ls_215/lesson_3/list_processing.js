// exercise1();
// exercise2()
// exercise3();
exercise4();
//1 Sum of Digits
function exercise1() {

function sum(int) {
  return String(int).split("").reduce((acc, el) => Number(el) + acc, 0);

}
console.log(
sum(23),           // 5
sum(496),          // 19
sum(123456789)   // 45
)
}

function exercise2() {
const englishNames = "zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen".split(", ");

function alphabeticNumberSort(arr) {
//I: Array of integers 0-19
//O: Sorted array, with the sort being based on english words of numbers

return arr.slice().map(el => englishNames[el]).sort().map(word => englishNames.findIndex(el => el === word));

//Split englishNames into array
//Based on index of each name, that can be the number value to evaluate
}

console.log(
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
}


function exercise3() {

function multiplyAllPairs(arr1, arr2) {
  let newArr = [];

  arr1.forEach(num => {
    arr2.forEach(secNum => newArr.push(num * secNum))
    
  });

  newArr.sort((a, b) => a - b)

  console.log(newArr);
  return newArr;


}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
}

function exercise4() {

/**
 * 
 * I: Array of numbers
 * O: Sum of the sums of each leading subseqence in that array
 * 
 * E:
 * 1. Function takes an array of numbers
 * 2. Assume array always contains at least one number
 * 
 * I:
 * 
 * T:
 * First number + (First + Second number) + (First + Second + Third num)...
 * 
 * 1 + 3 + 6 + 10 + 15 === 35
 * 
 * Take an array of numbers
 * Get the first number
 * Add that with the next number + all the previous numbers
 * Continue til end of array
 * 
 * 
 * CQ:
 * 1. What is the sum of the sums of each leading subsequence?
 * 2. Can the input be something besides an array?
 * 3. Can the array contain additional types besides numbers?
 * 
 * DS:
 * 1. Array
 * 
 * 
 * A:
 * 1. Given an array of numbers
 * 2. Iterate through the array
 * 3. For each number, add it + all the previous numbers in the array
 * to a running total
 * ---Reduce
 * ---
 * 4. Return that running total
 * 
 * 
 */

function sumOfSums(arr) {
  let res = arr.reduce((acc, el, idx) => {
    return acc + (arr.slice(0, idx + 1).reduce((acc2, el2) => acc2 + el2, 0))
  }, 0);

  console.log(res);

}


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
}