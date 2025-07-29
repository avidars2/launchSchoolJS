let p = console.log;

/**
Write a function that takes a sorted Array of integers as an 
argument, and returns an array that includes all of the missing 
integers (in order) between the first and last elements of the 
argument.

I: Sorted array of integers
O: New array with alal missing integers in order between
first and last elements

Explicits:
1. Sorted array of integer argument
2. Return new array, only containing elements between
first and last elements in order

Implicits:
1. First number in array and last number in array are boundaries
for other numbers to populate

Ideas:
1. Iterate each number from start to finish checking if array
includes #

[-3, -2, 1, 5]

-3 start
-2 -- is in array? Yes, so skip
-1 -- is in array? No, so add
0--
1 --skip
2--
3--
4--
5--end

DS:
1. Array

Al:
1. Given the array input
2. Loop with start # === arr[0] + 1, until arr[arr.length - 1]
3. Check if number included in arr
4. If not, push to new array

 */

function missing(arr) {
  let newArr = [];
  let endNum = arr[arr.length - 1];
  for (let start = arr[0] + 1; start < endNum; start++) {
    if (arr.includes(start)) continue;
    newArr.push(start);
  }
  return newArr;
  
}



p(missing([-3, -2, 1, 5]));   // [-1, 0, 2, 3, 4]
p(missing([1, 2, 3, 4]));     // []
p(missing([1, 5]));           // [2, 3, 4]
p(missing([6]));              // []