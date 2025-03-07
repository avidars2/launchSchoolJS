/**
 * Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. 
 * Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. 
 * The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.
 */
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

/**
 * I: Two dimensional array [string, number]
 * O: Repeat of string, Number amount of times, in a new one dimensional array
 * 
 * Explicits:
 * 1. Input is two-dimensional array
 * 2. Output is one-dimensional array
 * 3. Each element of two-dimensinoal list contains fruit name and number that represents
 * desired quantity of that fruit
 * 4. Output array has each fruit name appearing 'number' amount of times
 * 
 * [['grape', 2]] --> ['grape', 'grape']
 * 
 * Cq: New array returned?
 * 
 */

/**
 * DA
 * D:
 * [[]] --> Iterate over inner arrays in outer array
 * [] --> get index 1 to know amount of repeats of index 0
 * Place values into new array []
 * 
 * Algorithm:
 * 1. Take input array
 * 2. Iterate through array
 * 3. For each each array, push element 0 into new array
 * element 1 amount of times
 * 4. Return new array
 * 
 * 2- expanded
 * buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
[].reduce({}, [])

{} --> ['apple', 3]

push 'apple' 3 times into []
return []
 */

function buyFruit(twoDArray) {
  let newArr = twoDArray.reduce((acc, el) => {
    for (let repeats = el[1]; repeats > 0; repeats--) {
      acc.push(el[0]); //apple gets pushed el[1] (3) amount of times
    }
    return acc;
  }, [])
  console.log(newArr);
  return newArr
}

