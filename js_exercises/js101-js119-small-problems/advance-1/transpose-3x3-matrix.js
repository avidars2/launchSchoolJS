/**
 * Definitions:
 * A 3x3 matrix can be represented by an array of arrays
 */

/*
3x3 Matrix:
1  5  8
4  7  2
3  9  6
 */

// let matrix = [
//     [1, 5, 8],
//     [4, 7, 2],
//     [3, 9, 6],
//   ];

/**
 * Above is also known as a 2 dimensional array or nested array
 * 
 * Transposing a matrix is exchanging the rows and columns of the
 * original matrix
 */

/**
 * Original 3x3:
1  5  8
4  7  2
3  9  6
 * Transposed:
1  4  3
5  7  9
8  2  6
 */



/**
 * Write a function that takes an array of arrays that
 * represents a 3x3 matrix and returns the transpose of the
 * matrix
 */

/**
 * I: Two-dimensional array, 3x3
 * O: Transpose of 2d array
 * 
 * Explicits:
 * 1. Take 2d array that is 3x3 and return transpose
 * 2. Do not mutate original matrix, return new matrix
 * 
 * Implicits:
 * 1. First horizontal becomes a column, 2nd row is 2nd column
 * 3rd row becomes 3rd column
 * 2. Each element of first row in order becomes first element
 * of arrays below it
 * 
 * [1, 5, 8] -->
 * [1, ] (Element 1 --> row 1 element 1)
 * [5, ] (Element 2 --> row 2, element 1)
 * [8, ] (Element 3 --> row 3, element 1)
 * 
 * [4, 7, 2] -->
 * [, 4] (Element 1 --> row 1, element 2)
 * [, 7] (Element 2 --> row 2, element 2)
 * [, 2] (Element 3 --> row 3, element 2)
 * 
 * Ideas:
 * new array = []
 * 1. If row === 0 (1), for each element, new array.push([el])
 */

/**
 * DS:
 * Arrays and objects
 * Object = {row1: [], row2: [], row3: []}
 * 
 * Algorithm:
 * 1. Iterate through matrix
 * 2. Iterate through array
 * 3. Index of array = position in new array
 * 4. Position in array = new row
 * 5. Push element into array corresponding object key
 * 6. Repeat until end of array
 * 7. Push each row of object into new array and return
 */

const matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6]
  ];
  
function transpose(matrix) {
    /**
     * {0: [], 1: [], 2: []}
     */
    let matrixObj = matrix.reduce((acc, arr) => {
        arr.forEach((num, idx) => {
            (acc[idx] = acc[idx] || []).push(num)
        });
        return acc;
    }, []);

    return matrixObj;
}


  let newMatrix = transpose(matrix);
  
//  console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
//  console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]



const matrix2 = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6]
  ];
  
function transposeInPlace(matrix) {
    matrix.forEach((row, rowNum, outerArray) => {
        row.forEach((num, column) => {
            if (column < rowNum) return;
            let swapNum = outerArray[column][rowNum]; //Swapping number
            [outerArray[rowNum][column], outerArray[column][rowNum]] = [swapNum, num];
        })
    })
    return matrix;
}

let newMatrix2 = transposeInPlace(matrix2);

console.log(matrix2); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]

  /**
 * 1 5 8
 * 4 7 2
 * 3 9 6
 * 
 * row 0 col 0 swaps to row 0 col 0
 * outerarray[row][col]
 * row 0 col 1 swaps to row 1 col 0
 * outerarray[row][col] --> outerArray[col][row]
 * row 0 col 2 swaps to row 2 col 0
 * 
 * [1, 5, 8]
 * [4,]
 * [3,]
 * 
 * new inner position = outer array row index
 * 
 * 1 4 3
 * 5 7 2
 * 8 9 6
 * 
 * if (column < row) skip
 * 
 * row 1, col 1 swaps to row 1, col 1
 * row 1, col 2 swaps to row 2, col 1
 * 
1  4  3
5  7  9
8  2  6
 */

