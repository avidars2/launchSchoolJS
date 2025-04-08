/**
 * I: 2 sorted arrays
 * o: New array that contains all the elements from both
 * input arrays in sorted order
 * 
 * Explicits:
 * 1. Don't sort result array
 * 2. Don't mutate input arrays
 * 
 * Implicits:
 * 1. Array arguments can be empty
 * 2. Duplicate elements can exist in either or both arguments
 * 3. Don't mutate result by sorting it
 * 
 * 
 * [1, 4] [1, 2, 3]
 * 
 * 1, 
 * 
 * 1, 2, 3, 4
 * 
 * [1, 2, 3], []
 * 
 * 1, 2, 3
 * 
 * If an argument is empty, return the non-empty array
 * If both arguments are empty, return an empty array
 * 
 * 
 * Given 2 sorted arrays, return a new array, built one element at a time,
 * that contains the elements of both input arrays in sorted order.
 * 
 * 
 * DS:
 * Arrays
 * 
 * Algorithm:
 * 1. Copy both arrays into a new array, newArray1
 * 2. Iterate through newArray1 and find the lowest value
 * 3. Once found, filter it out of newArray1 to mutate it
 * 4. Append that value to resultArray
 * 5. Repeat until newArray1 is empty
 * 
 */

function merge(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0) return [];
    if (arr1.length === 0 || arr2.length === 0) {
        console.log(arr1.length === 0 ? arr2.slice() : arr1.slice());
        return arr1.length === 0 ? arr2.slice() : arr1.slice();
    }
    let newArr = arr1.concat(arr2);
    let lowestValue = 0;
    let resultArray = [];

    while (newArr.length > 0) {
        //Loop through new array
        //Find lowest value
        //Splice lowest value out and into resultArray
        lowestValue = newArr[0];
        for (let index = 0; index < newArr.length; index++) {
            if (newArr[index] < lowestValue) {
                lowestValue = newArr[index];
            } else continue;
        }
        resultArray.push(newArr.splice(newArr.findIndex(el => el === lowestValue), 1)[0]);
    }

    console.log(resultArray);
    return resultArray;

}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]
merge(['Al', 'Lisa', 'Kim'], ['Tyler', 'Rachel']);  // [ 'Al', 'Kim', 'Lisa', 'Rachel', 'Tyler' ]
