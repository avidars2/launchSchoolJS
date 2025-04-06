/**
 * Matrix can be represented by 2d arrays
 * 
 * A 90-degree rotation of a matrix produces a new matrix in which each side
 * is rotated clockwise by 90 degrees
 * 
 * 
1 5 8
4 7 2
3 9 6

Becomes

3 4 1
9 7 5
6 2 8

Non-square matrices have similar effect:

3 4 1
9 7 5

becomes

9 3
7 4
5 1


Take an Arbitray MxN matrix, rotates it clockwise by 90-degrees, and returns result as a new matrix

Input: Matrix (array)
Output: Rotated new array

Expliciits:
1. Do not mutate input
2. Return new array
3. Rotate clockwise by 90-degrees

Implicits:
1. Array length becomes array height
--Inner array length, when rotated, becomes outer array length

1 5 8
4 7 2
3 9 6

3 4 1
9 7 5
6 2 8


1 5 8 -->
, , 1
, , 5
, , 8

Inner array 1, element 1 --> Inner array 1, element 3 (outer array length - (array position in outer array))
Inner array 1, element 2 --> Inner array 2, element 3 (outer array length - (array position in outer array))
Inner array 1, element 3 --> Inner array 3, element 3 (outer array length - (array position in outer array))

4 7 2 -->
, 4 ,
, 7 , 
, 2 ,

Inner array 2, element 1 --> Inner array 1, element 2
Inner array 2, element 2 --> Inner array 2, element 2
Inner array 2, element 3 --> Inner array 3, element 2


The transformations are:
1. Element position in inner array determines which inner array it will be moved to
2. Position of inner array in outer array AND outer array length, determines element position
--Outer array length minus
[
[1, 2, 3],
[4, 5, 6]
]

2:
Position === zero based index + 1
New inner array: Array 2 because the element position is 2
Index in new inner array: Array length (2) minus array position (zero based index + 1) in outer array (1) === 1

[4, 1]
[5, 2]
[6, 3]


[1, 2]
[3, 4]

For 2:
2nd position, it will go to the second array
First array, Outer array length === 2 so 2 - 1 === 1. It will go to index 1 or position 2 in second array
 */

/**
 * Data structures:
 * 1. Object to keep track of arrays
 * 2. Arrays
 * {
 * Key will be row: [array which will contain elements in row]}
 * 
 * Algorithm:
 * 1. Iterate through outer array
 * 2. For each inner array, iterate through elements
 * --Keep track of inner array position in outer array
 * --Keep track of outer array length
 * 3. moveToArray = Index + 1 is position
 * --This will be which array it is going in
 * 4. innerArrayPosition = outer array length - inner array position in outer array
 * 5. Object[moveToArray] = (if blank, create new array [] other wise return existing array)[innerArrayPosition - 1]
 * 6. Assemble array and return
 */

function rotate90(matrix) {
    let newObj = matrix.reduce((acc, arr, outIdx, outerArray) => {
        // console.log(acc);
        arr.forEach((el, inIdx) => {
            let moveToArray = inIdx;
            let innerArrayPosition = outerArray.length - (outIdx);
            
            acc[moveToArray] = (acc[moveToArray] || []);
            acc[moveToArray][innerArrayPosition - 1] = el;
        })
        return acc;
    }, [])

    console.log(newObj);
    return newObj;

}

let matrix1 = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6],
  ];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];
let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));
