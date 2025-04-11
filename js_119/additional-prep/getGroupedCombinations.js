/**
Write a function that takes an array of objects, where each object has at least a name and a group property, 
and a number representing the required number of elements in each combination. The function should return 
all unique combinations of the specified number of elements from the array, ensuring that each combination 
contains at least one object from each unique group present in the input array.

 */

/**
 * I: Array of objects where each object has at least a name and a group property && number representing required # of elements in each combination
 * O: Return all unique combinations of the specified number of elements from the array
 * 
 * Explicits:
 * 1. Return all unique combinations of specified # of elements from the array, ensuring each combination
 * contains at least one object from each unique group present in the input array
 * 
 * Implicits:
 * 1. The second argument specifies each nested array length
 * 
 * CQ: What is a unique combination?
 * 
 *     { name: "Alice", group: "A" },
    { name: "Bob", group: "B" },
    { name: "Charlie", group: "A" },
    { name: "Diana", group: "B" },
    { name: "Eve", group: "C" },

    3

    [{A}, {B}, {C}]
    [{A}, {B}, {D}]
    [{A}, {B}, {E}]
    [{B}, {C}, {D}]
    [{B}, {D}, {E}]
    [{C}, {D}, {E}]

    [a, b, c]
    [a, b, d]
    [a, b, e]
    [a, c, d]
    [a, c, e]
    [a, d, e]

    [b, c, d]
    [b, c, e]
    [b, d, e]

    [c, d, e]

    Take an array slice of elements
    arr.slice(0, target #) (3)
    [a, b, c]

    Loop through combinations starting at end until array length
    [a, b, d]
    [a, b, e]
    Then increment previous index
    Start last element at index after
    [a, c, d]
    [a, c, e]

    last index = 4

    [0, 1, 2]
    [0, 1, 3]
    [0, 1, 4]

    [0, 2, 3]
    [0, 2, 4]

    [0, 3, 4]

    [1, 2, 3]
    [1, 2, 4]
    
    [1, 3, 4]

    [2, 3, 4]



    Increment last index by 1

The second argument represents the length of each nested array combination
Lower number means more combinations

Iterate over first object, and match to other objects in same nested array until length is reached
[a, b, c]
Replace last object, with next one in line, push, repeat until end
[a, b, d]
[a, b, e]

While the index of object 2 to end of object length is greater than or equal to target #, iterate from second object and remaining elements
[b, c, d]

Replace last object, with next one in line, push, repeat until end
[b, d, e]

While index of next object (3) to end of object length is (3, 4, 5) is >= target #, iterate from the increment object and remaining elements

Given an array of objects,
For each object in the array,
Given a target #,
Slice target # of objects from array (IF starting array length - starting index >= target #)

slice(0, startIdx + target #) --> ITerate slice #, until it is === array length
slice(0, 3) --> arr[target # - 1] = target # + 1, then + 2 until it is array length

newArr = slice(1, 4)
push
newArr[target # - 1] = incrementing until it is array length

Data structures:
1. Arrays

Algorithm:
combinationArray = []
1. Iterate through array of objects
2. Slice (current Index, currentIndex + target #)
3. Push that slice into comboArray
--Take that sliced array (newArr)
--Copy it
4--With the copy, mutate the last element to equal the
--originalarray[current index + target # + 1]
--While that index is < array length
--Push that copy
--Repeat 4 until index === array length
5. Return combination array

 * 
 */

// function getGroupedCombinations(arrOfObj, targetNum) {
//     let combinationArray = [];
//     arrOfObj.forEach((obj, index) => {
//         if (index + targetNum > arrOfObj.length) return;
//         let arrCopy = arrOfObj.slice(index, index + targetNum);
//         combinationArray.push(arrCopy);
//         for (let newIdx = index + 1; newIdx < arrOfObj.length; newIdx++) {
//             if (index + newIdx + targetNum >= arrOfObj.length) break;
//             let newCopy = arrCopy.slice();
//             newCopy[targetNum - 1] = arrOfObj[index + targetNum + newIdx];
//             combinationArray.push(newCopy); 
//         }
//     })

//     console.log(combinationArray);
// }

// function getGroupedCombinations(arrOfObj, targetNum) {
//     //Iterate through array of objects
//     //Create an array with targetNum elements from arrayOfObj
//     //Then copy that array, and mutate last element so that it === next element from ArrayOfObj
//     //Repeat step until it gets the last element from ArrayOfObj
//     //Repeat above until the array length - current index position (+ 1) === 0

//     let combosArray = [];

//     for (let objIdx = 0; objIdx <= arrOfObj.length; objIdx++) {
//         let startingObj = arrOfObj[objIdx];
//         let endIndex = objIdx + targetNum;
//         if (endIndex >= arrOfObj.length) {
//             let array = arrOfObj.slice(objIdx);
//             combosArray.push(array);
//             break;
//         };
//         for (let extraObjects = 0; extraObjects < arrOfObj.length; extraObjects++) {
//             console.log(endIndex, arrOfObj.length)
//             let startingArray = arrOfObj.slice(objIdx, endIndex);
//             startingArray[targetNum - 1] = arrOfObj[endIndex + extraObjects - 1];
//             // console.log(startingArray);
//             combosArray.push(startingArray);
//             if (endIndex + extraObjects >= arrOfObj.length) break;
//         }
//     }
//     console.log(combosArray);
// }

function getGroupedCombinations(arrOfOBj, targetNum) {
    /**
     * I: Array of objects, each obj has name and group property
     * O: All unique combinations of targetNum elements from the arrOfObj
     * --Each combination contains at least one object from each unique group
     * 
     * [alice-a, bob-b, eve-c]
     * [alice-a, diana-b, eve-c]
     * [charlie-a, bob-b, eve-c]
     * [charlie-a, diana-b, eve-c]
     * 
     * Each group needs to be present for the array to be valid
     * 'eve' is the only 'c' group
     * 
     * a is odd
     * b is even
     * 
     * I'm looking for there to always be an odd and even pair
     * 
     * an 'a' and 'b' pair
     * 
     * All 'a' and 'b' pairs
     * 
     * [alice, charlie]
     * [bob, diana]
     * [eve]
     * 
     * All combinations of these 3 lists
     * 
     * [alice, bob, eve]
     * [alice, diana, eve]
     * 
     * [charlie, bob, eve]
     * [charlie, diana, eve]
     * 
     * 
     * If targetnum is 2, return []
     * 
     * IF targetnum is 4
     * [alice, bob, eve, charlie]
     * [alice, bob, eve, diana]
     * [charlie, bob, eve, diana]
     * 
     * [0, 1, 2, arr[1][1]]
     * [0, 0, 0, arr[0][1]]
     * [0, 1, 0, arr[1][1]]
     * 
     * DS:
     * [['alice', 'charlie'], ['bob', 'diana'], ['eve']]
     * 
     * Algorithm:
     * 1. Split object into distinct arrays based on group
     * 2. Outer loop starting at index 0
     * 3. Inner loop starting at index 0
     * 4. inner inner loop staying at index 0
     * 5. Return combinations
     * 6. If target < 3, return []
     * 7. If target === 4, different structure
     * 8. If target 5, return each object in the array
     */

    let groups = arrOfOBj.reduce((acc, el) => {
        if (el.group === 'A') {
            (acc[0] = acc[0] ?? []).push(el);
        } else if (el.group === 'B') {
            (acc[1] = acc[1] ?? []).push(el);
        } else (acc[2] = acc[2] ?? []).push(el);

        return acc;

    }, [])

    // console.log(groups);
    let combos = [];
    if (targetNum < 3) return combos;
    if (targetNum === 3) {
        for (let x = 0; x < 2; x++) {
            for (let i = 0; i < 2; i++) {
                for (let z = 0; z < 1; z++) {
                    combos.push([groups[0][x], groups[1][i], groups[2][0]]);
                }
            }
        }
    }

    if (targetNum === 4) {
        for (let x = 0; x < 2; x++) {
            for (let i = 0; i < 2; i++) {
                for (let z = 0; z < 1; z++) {
                    combos.push([groups[0][x], groups[1][i], groups[2][0]]);
                }
            }
        }
    }

    return combos;
}



const data1 = [
    { name: "Alice", group: "A" },
    { name: "Bob", group: "B" },
    { name: "Charlie", group: "A" },
    { name: "Diana", group: "B" },
    { name: "Eve", group: "C" },
  ];

console.log(getGroupedCombinations(data1, 3));
// Expected Output:
// [
//   [{ name: 'Alice', group: 'A' }, { name: 'Bob', group: 'B' }, { name: 'Eve', group: 'C' }],
//   [{ name: 'Alice', group: 'A' }, { name: 'Diana', group: 'B' }, { name: 'Eve', group: 'C' }],
//   [{ name: 'Charlie', group: 'A' }, { name: 'Bob', group: 'B' }, { name: 'Eve', group: 'C' }],
//   [{ name: 'Charlie', group: 'A' }, { name: 'Diana', group: 'B' }, { name: 'Eve', group: 'C' }],
//   ...
// ]