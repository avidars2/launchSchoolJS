/**
 * I: [0, 0, 0], 5
 * O: [5, 4, 5]
 */

function tripleLoop(arr, target, value) {
    arr.push([target]);
    if (arr.length === 5) {
        return [target];
    }
    let result = tripleLoop(arr, target - 1);
    // console.log(result);
    arr.push(result);
    return [target];

}

/**
 * Loops on demand
 * 
 * Recursive loop
 * 
 * for (let x = value; x < arr.length - target; x++)
 */
let arr = []
tripleLoop(arr, 5);

console.log(arr);