/**
 * I: Two arrays
 * O: New array containing all elements from both arguments
 * With each element taken in alternation
 * 
 * Explicits:
 * 1. Assume both input arrays are non-empty and have same # of elements
 * 2. Two array inputs
 * 3. Return new array containing all elements alternating
 * 
 * Implicits:
 * 1. Datatypes can be different
 * 2. First argument array element appears first
 * [1, 2], ['a', 'b'] --> [1, 'a', 2, 'b']
 */

/**
 * Data structures:
 * 1. Loops
 * 2. Arrays
 * 
 * Algorithm:
 * 1. Iterate through both arrays at the same time
 * 2. Push values of these arrays into a new array
 * 3. Continue until last iteration
 */

function interleave(arr1, arr2) {
    let newArr = [];

    // for (let el = 0; el < arr1.length; el++) {
    //     newArr.push(arr1[el], arr2[el]);
    // }

    // arr1.forEach((el, idx) => {
    //     newArr.push(el, arr2[idx]);
    // })

    newArr = arr1.map((el, idx) => {
        return [el, arr2[idx]];
    }).flat();

    console.log(newArr);
    // return newArr
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]