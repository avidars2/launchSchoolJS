/**
 * Write a function that takes an array of numbers and returns an array with the same 
 * number of elements, but with each element's value being the running total
 *  from the original array.
 * 
 * runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
 */

/** 
 * P:
 * Inputs: Array of Numbers
 * Output: Array with same number of elements, but each element value is the running total
 * 
 * Given an array as input, output an Array with the same amount of elements,
 * and each subsequent number in the list is a running total
 * 
 * [1, 2, 3] --> [1, 3, 6]
 * 
 * Explicits:
 * 1. Array of numbers as input
 * 2. Array of numbers as output, same amount of elements as input array
 * 3. Running total --> what does running total mean here? [element 1, element 2 = element 1 + element 2, element 3 = element 3 + element 2]
 * 4. Empty arrays return nothing, one item arrays return one item arrays
 * 
 * Implicits:
 * 1. Running total starts from left to right of Array
 * 
 * Questions:
 * 1. Are we returning the same array, or a new array? It appears to be new given the phrasing 'an array'
 * 2. Will the numbers only be integers? --> Examples seem to show this
 * 
 * [2, 4, 5]
 * El 1: 2
 * El 2: 2 + 4 --> 6
 * El 3: 6 + 5 --> 11
 * 
 * Data structures:
 * 1. Array in
 * 2. New Array out
 * 
 * Algorithm:
 * 1. Create a function that takes an argument
 * 2. Create a new array and store in variable
 * 3. Copy first element of array into new array
 * --let currentTotal = first element;
 * 4. Copy next element of array, add to it the total, put total as next element in new array
 * 5. Repeat until end of Array
 * 6. Return new Array
 * 
 * Ideas:
 * 1. Map method can be used to return a new array, and iterate over original array
 * 2. reduce has an accumulator
 * 
 * newArray = map
 * for each element return the sum of all the previous elements
 * 
 * Program
 * 
 */

function runningTotal(arr) {
  let total = 0;
  let newArr = [];

  // arr.forEach(num => {
  //   total += num;
  //   newArr.push(total)
  // })

  newArr = arr.map(num => {
    return total += num;
  })
  
  console.log(newArr);
  return newArr;

}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []