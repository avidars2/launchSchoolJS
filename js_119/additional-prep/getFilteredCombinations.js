/**
P: Create a function that accepts an array of strings and a minimum length. 
The function should return all combinations of 3 elements from the array, but only 
include combinations where each string is longer than the specified minimum length.

 */

/**
 * I: Array of strings, minimum length
 * O: All combinations of 3 elements from the arraywhere each string is longer than specified min length
 * 
 * ['cat', 'dog', 'rabbit', 'elephant'], 3
 * 
 * ['cat', 'dog', 'rabbit']
 * ['cat', 'dog', 'elephant']
 * ['dog', 'rabbit', 'elephant']
 * 
 * First get array where elements meet criteria length
 * ['cat', 'dog', 'rabbit', 'elephant']
 * 
 * Then get all the combinations
 * 
 * [0, 1, 2]
 * [0, 1, 3]
 * [0, 2, 3]
 * [1, 2, 3]
 * 
 * [0, 1, 2]
 * [0, 1, 3]
 * 
 * [1, 2]
 * 
 * [2, 2]
 * 
 * for (let x = 0; x < 3; x++) {
 *  for (let i = 0; i < 3; i++) {
 * 
 * }
 * 
 * }
 * 
 * let modelIndex = [0 to just beore target number 3]
 * [0, 1, 2]
 * let counter = modelIndex.length - 1
 * 
 * First get slice 0, 3
 * [0, 1, 2]
 * 
 * Push combination [[0, 1, 2]]
 * 
 * Then take model index and increment last element by 1
 * [0, 1, 3] (If last element index === array length, skip)
 * 
 * Push combination [[0, 1, 2], [0, 1, 3]]
 * 
 * Repeat until last element index === array length.
 * 
 * Then increment previous element index by 1, and following elements by 1
 * //////////////////////////////////////////////////////////////////////////
 * Take model index
 * [0 , 1, 2]
 * 
 * Take counter
 * 2 (modelIndex.length - 1)
 * 
 * for increment = modelIndex[counter]; increment < modelIndex length; increment++
 * 
 * modelIndexCopy[counter] = increment;
 * push copy of combination
 * 
 * 
 * 
 * 
 * 
 * 
 */


// function getFilteredCombinations(arr, strLen, targetNum=3) {
//     let newArr = arr.filter(el => el.length >= strLen);
//     if (newArr.length < targetNum) return [];
//     let modelIndex = [];
//     for (let x = 0; x < newArr.length; x++) {
//         modelIndex.push(x);
//     }
//     modelIndex.length = targetNum;
    
//     let arrayCombos = [];
//     let counter = modelIndex.length - 1;

//     let copy = modelIndex.slice();
//     for (let increment = modelIndex[counter]; increment <= modelIndex.length; increment++) {
//         copy[counter] = increment;
//         arrayCombos.push(copy.slice());
//     }

//     console.log(newArr, modelIndex);
//     console.log(arrayCombos);
// }

function getFilteredCombinations(arr, strLen) {
    /**
     * Take an array of strings
     * Get the strings that are of length strLen
     * 
     * With length 3 strings, build all combinations up to 3 elements in an array
     * Array length min 3
     * [a, b, c, d]
     * [a, b, c]
     * [a, b, d]
     * [a, c, d]
     * [b, c, d]
     * 
     * outer loop iterates up to arr length - 2
     * Why - 2? And why array length?
     * 
     * Array length because in general, that's how many elements it can iterate up to
     * - 2 because it will have 2 additional loops within it, and since each inner loop
     * is going to get an index 1 higher, it needs to stop at -2 so it doesn't repeat an index/
     * cause the inner loop to reach for a higher index
     */

    let filteredArr = arr.filter(el => el.length >= strLen);

    let combos = [];

    [0, 1, 2]

    for (let outer = 0; outer < filteredArr.length - 2; outer++) {
        /**
         * The loop will increment up by 1
         * It will increment up by 1 until it is less than the filtered array length - 2
         * Why ? Because it is representing an index of an array and does not want to go
         * out of bounds of the array. 
         * 
         * - 2 because it's going to have 2 inner loops, and those inner loops will be
         * starting at it's number, + 1, and +2. So to prevent those inner loops from
         * getting the index of the array out of bounds, -2 is applied
         * 
         * Why are there 2 inner loops?
         * 3 numbers are being incremented at the same time, and each number
         * needs to be 1 higher than the previous one (which is where -2 comes in)
         * The inner loop numbers need to be incremented to the highest amount before
         * my the outer loop numbers increments.
         * 
         * It's kind of like a clock, where the second hand needs to spin a full circle
         * before the minute hand goes up 1
         * 
         * So nested loops are kind of like clocks, and iterating each part of the array
         * 1 index at a time fully before iterating the previous is like a clock
         * 
         * Why am I using this clock structure?
         * 
         * Because it so happens that this structure can get all the combinations of
         * an array
         * 
         * How? Why?
         * Because if we pretend the array [0, 1, 2] represents hours, minutes, seconds
         * All 60 seconds must be looped through, before minutes goes up. And all 60 minutes
         * must be looped through before hours go up. As far as combinations go,
         * 1 hour 1 minute 1 second is a different combination from 1 hour, 2 minutes, 1 second
         * We need to get all 60 seconds, while having 1 hour and 1 minute to get the entire
         * combination
         */

        for (let middle = outer + 1; middle < filteredArr.length - 1; middle++) {
            for (let inner = middle + 1; inner < filteredArr.length; inner++) {
                combos.push([filteredArr[outer], filteredArr[middle], filteredArr[inner]]);
            }
        } 
    } 

    return combos;

}

console.log(getFilteredCombinations(["apple", "banana", "kiwi", "fig"], 4));
// // Expected Output: [["apple", "banana", "kiwi"]] (only these are longer than 4)

console.log(getFilteredCombinations(["hi", "hello", "hey", "welcome"], 5));
// // // Expected Output: []

console.log(getFilteredCombinations(["cat", "dog", "rabbit", "elephant"], 3));
// // // Expected Output: [["cat", "dog", "rabbit"], ["cat", "dog", "elephant"], ...]


/**
0, 1, 2
 */