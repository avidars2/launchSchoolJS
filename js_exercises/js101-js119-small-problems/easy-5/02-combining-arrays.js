/**
 * I: Two arrays
 * O: New array containing union of values from two with no duplicates
 * Even duplicates in original array are removed
 * 
 * Explicits:
 * 1. Return new array
 * 2. Array returned must have no duplicates
 * 3. Both arguments will always be arrays
 * Implicits:
 * 1. What to do with nested objects? They are not strictly equal
 * so include
 * 
 * [1, 2], [2, 4] --> [1, 2, 4]
 * 
 * Checking for duplicates in the array, and disincluding them
 * 
 * Ideas:
 * 1. Have new empty array
 * 2. I can then iterate through the argument arrays
 * 3. I'll push the elements of the argument array into the empty array
 * 4. Check each iteration if the element is included in the new array
 * 5. If it is included, ignore the element
 * 6. If it is not included, push the element in
 * 7. Return the new array
 */

function union(arr1, arr2) {
    let newArr = [];

    [...arr1, ...arr2].forEach(el => {
        if (!newArr.includes(el)) {
            newArr.push(el);
        } else return;
    })

    console.log(newArr);
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]