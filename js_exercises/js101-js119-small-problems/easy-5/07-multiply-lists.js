 /**
  * I: Two array arguments containing a list of numbers
  * O: New array containing product of each pair of numbers from the arguments 
  * that have the same index.
  * 
  * Explicits:
  * 1. Arguments are same length
  * 2. Return new array where each element is product of argument arrays elements of same index
  * 
  * [1, 2], [3, 4] --> [3, 8]
  */

 /**
  * A:
  * 1. Iterate through array1
  * 2. Multiply element by arr2 element at same index
  * 3. Append result to new array
  * 4. Repeat until end then return new array
  */

 function multiplyList(arr1, arr2) {
    return arr1.map((el, idx) => el * arr2[idx]);
 }

 console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
 