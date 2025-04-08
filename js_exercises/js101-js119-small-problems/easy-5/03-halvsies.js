/**
 * Input: Array
 * Output: Array of 2 nested arrays with first half in first nested
 * and second half in second nested
 * 
 * Explicits:
 * 1. If odd amount of elements, place middle element in first array
 * 2. Put first half of original elements in first element of new array
 * 3. Put second half of original elements in second element of new array
 * 
 * Implicits:
 * 1. Even if empty array, or one element, return new array with 2 elements
 * 
 * [5] --> [[5], []]
 * [] --> [[],[]]
 * [1, 2] --> [[1], [2]]
 * 
 * Length of array / 2 rounded up
 * 
 * 1 / 2 == 0.5 --> 1
 * 
 * Elements 0 to 1 inclusive are in first half of array
 * 
 * Remaining elements are placed into second array
 * 
 * If length is 0, return [[], []]
 */

/**
 * Data structures:
 * 1. Array of arrays
 * Array input
 * 
 * Algorithm:
 * 1. Slice beginning of array to middle rounded up
 * 2. Remaining elements are placed into array 2
 */

function halvsies(arr) {
    let firstHalf = arr.slice(0, Math.ceil(arr.length / 2));
    let secondHalf = arr.slice(firstHalf.length);
    console.log([firstHalf, secondHalf]);
    return [firstHalf, secondHalf];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]