/**
Input: Matrix array
Output: array snail sorted

CQ: New array to return or mutate current? Let's assume new

Explicits:
1. Matix will be n x n (equal length for each row and height)
2. Elements should be arranged from outermost elements to middle element

Implicits:
1. Travel across first array, down last elements of next array to end,
in reverse order from last array
up first elements until just before first array

First row is removed immediately
midArrays[length - 1]
midArrays[length - 1]
lastArray.reverse
midArrays[0]

Repeat with midArray becoming new first and last array

Algorithm:
1. Iterate through matrix (while firstrow length > 0)
2. firstRow = matrix[0] && length > 0
3. lastRow = matrix[length - 1] && length > 0
4. if row = firstRow
--unshift all elements into snailSorted array
5. if row !== firstRow or lastRow
--pop end elements into snailSortedArray
6. if row ===  lastRow
---pop all elements into snailSortedArray
7. if row !== lastRow || firstRow 
--unshift first element into snailSortedArray
--loop upwards until firstRow index - 1
--filter out empty arrays
--re-assign first and last row then repeat

*/

let snail = function(matrix) {
  let firstRowIdx = 0;
  let firstRow = matrix[firstRowIdx];
  let lastRowIdx = matrix.length - 1
  let lastRow = matrix[lastRowIdx];

  let snailSorted = [];
  console.log(firstRow);
  while (firstRow.length > 0) {
    for (let arr = 0; arr < matrix.length; arr++) {
      let row = matrix[arr];
      if (row === firstRow) {
        while (row.length > 0) {
          snailSorted.push(row.shift());
        }
      }
      if (row !== firstRow && row !== lastRow) {
        snailSorted.push(row.pop());
      }
      if (row === lastRow) {
        while (row.length > 0) {
          snailSorted.push(row.pop());
        }
      console.log(snailSorted);
      for (let upwardsArr = (arr - 1); upwardsArr > firstRowIdx; upwardsArr--) {
        console.log(matrix[upwardsArr]);
        if (matrix[upwardsArr].length === 0) {
          break;
        }
        snailSorted.push(matrix[upwardsArr].shift());
      }
      }
    }
    matrix = matrix.filter(arr => arr.length > 0);
    console.log(snailSorted);
    firstRow = matrix[0];
    lastRow = matrix[matrix.length - 1];
    if (!firstRow) break;
  /**
  Algorithm:
1. Iterate through matrix
2. firstRow = matrix[0] && length > 0
3. lastRow = matrix[length - 1] && length > 0
4. if row = firstRow
--unshift all elements into snailSorted array
5. if row !== firstRow or lastRow
--pop end elements into snailSortedArray
6. if row ===  lastRow
---pop all elements into snailSortedArray
7. if row !== lastRow || firstRow 
--unshift first element into snailSortedArray
--loop upwards until firstRow index - 1
-re-assign first and last row, then repeat
---Find new firstrow and last row
----If 
  */
  // enjoy
}
return snailSorted;
}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix2 = [[1, 2, 3, 1], [4, 5, 6, 4], [7, 8, 9, 7], [7, 8, 9, 7]];
snail(matrix);
snail(matrix2);