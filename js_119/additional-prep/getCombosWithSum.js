/**
 Write a function that takes an array of numbers and a target sum. 
The function should return all possible combinations of 2 elements from the array 
that add up to the target sum. Ensure that each combination is unique and only appears once in the result.

 */

/**
 * I: Array of numbers and target sum
 * O: All unique possible combinations of 2 elements from the array that add up to the target sum
 * 
 * Explicits:
 * 1.Return all unique combinations possible of 2 elements that add to target sum
 * 
 * Implicits:
 * 1. Return an array of arrays
 * 2. Return empty array if no combinations add to target sum
 * 
 * [1, 2, 2, 3, 4, 5], 5
 * 
 * 1
 * 1 -2 -- 5 ? No
 * 1 2 -- 5 ? no
 * 1 3 -- 5 ? No
 * 1 4 -- 5 ? Yes
 * 
 * [1, 2]
 * 
 * 2 2 -- 5 ?
 * 2 3 -- 5 ? Yes
 * 2 4 -- 5 ? No
 * 2 5 -- 5 ? No
 * 
 * [2, 3]
 * 
 * Evaluate if a sub array combination already exists
 * 
 * JSON.stringify(nested Array)
 * 
 * For each nested array in answer array, if JSON.stringify(nestedArr) === JSON.stringify(newNest) --> don't push to array
 * 
 * I'm looping through an array and evaluating each element.
 * For each element, I'm evaluating if that element + another element in the array === target number
 * If it equals the target number, 
 * --Check if the currentCombosArray, for each element, has a stringified array that === newcombo stringified
 * --IF so, don't add to array
 * --If  not, add to the array
 * 
 * After all iterations, return nested output
 * 
 * Data structures:
 * 1. Arrays and nested arrays
 * [[], []]
 * Stringified arrays to evaluate
 * Loop through array, then inner loop from that index forward
 * 
 * Algorithm:
 * 1. Iterate through array [1,2 ,2, 3, 4, 5], 5
 * 2. For each element pass into new loop 1 --> 
 * --Loop from element starting index through array over each otherElement Compare 1 && 2, 
 * --For each otherElement, check if otherElement + element === targetSum
 * -----If so, evaluate if exists
 * -----If it doesn't exist, push to that array
 * --If evaluation does not equal target sum, continue to next loop
 * 3. Return answer array
 * 
 * 
 * Evaluate:
 * 1. Iterate through validCombosArray
 * 2. For each nestedArray, sort ascending then stringify
 * 3. Evaluate if stringified nestedArray === sorted newCombination array stringified
 * ---IF so, return true
 * --If not, return false
 * ---Evaluate if SOME array returns true that it exists
 * 1. If combination array sorted then stringified
 */
function getCombinationsWithSum(arr, targetNum) {
    let validCombosArray = [];
    
    arr.forEach((el, idx) => {
        for (let startIdx = idx + 1; startIdx < arr.length; startIdx++) {
            let compareEl = arr[startIdx]
            if (el + compareEl === targetNum) {
                let newCombo = [el, compareEl].sort((a, b) => a - b);
                // console.log(newCombo);
                if (!alreadyFound(validCombosArray, newCombo)) {
                    validCombosArray.push(newCombo);
                }
            }
        }
    })

    // console.log(validCombosArray);
    return validCombosArray;
}

function alreadyFound(combosArray, newCombo) {
    return combosArray.some((inArr) => {
        return (JSON.stringify(inArr) === JSON.stringify(newCombo));
    })

}



console.log(getCombinationsWithSum([1, 2, 2, 3, 4, 5], 5));
// Expected Output: [[1, 4], [2, 3]]

console.log(getCombinationsWithSum([1, 2, 3, 4, 5], 10));
// // // // Expected Output: [] (no combination adds up to 10)

console.log(getCombinationsWithSum([-1, 0, 1, 2, -2], 0));
// // // Expected Output: [[-1, 1], [-2, 2]] (both combinations sum to 0)

//Completion time: 17.5 minutes


