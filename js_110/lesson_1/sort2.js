function sortArray(arr) {
  /** 2 for loops,
   * 
   * Outer loop, loops through array [1, 2, 3, 4]
   * 
   * Inner loop compares current iteration of outer loop, to each element of array
   * 1 compared to 2, then 3, then 4
   * 
   * Goal is to sort array from lowest to highest in ascending order
   * 
   * 2, 1, 4, 3
   * 
   * 2, 1
   * 1, 4
   * 1, 3
   * 1
   * 
   * Swap 1 and 2
   * 
   * 2, 4
   * 2, 3
   * 2
   * 
   * 2 stays
   * 
   * 4, 3
   * 3
   * 3 swaps with 4
   * 
   * 4
   * 
   * 1. Loop through first array
   * 2. For each element, compare with element[id + 1]
   * 3. If lower, lowestVal = element[id + 1] and lowestIdx = id + 1
   * 4. Continue comparing
   */

  arr.forEach((currentNum, idx) => {
    // // let lowestValue = currentNum;
    // // let lowestIdx = idx;

    // // for (let comparedId = idx + 1; comparedId < arr.length; comparedId++) {
    // //   if (lowestValue <= arr[comparedId]) continue;
    // //   if (lowestValue >= arr[comparedId]) {
    // //     lowestValue = arr[comparedId];
    // //     lowestIdx = comparedId;
    // //   }
    // // }

    // arr[lowestIdx] = currentNum;
    // arr[idx] = lowestValue;

    let lowestValue = findLowestValue(arr, currentNum, idx);

    arr[lowestValue.id] = currentNum;
    arr[idx] = lowestValue.value;

  });

  return arr;
}

console.log(sortArray([4, 3,1, 2, 99, 1, 43, 22, 14, 14, 12]));

function findLowestValue(arr, currentNum, idx) {
  let lowestValue = currentNum;
  let lowestIdx = idx;

  for (let comparedId = idx + 1; comparedId < arr.length; comparedId++) {
    if (lowestValue <= arr[comparedId]) continue;
    if (lowestValue >= arr[comparedId]) {
      lowestValue = arr[comparedId];
      lowestIdx = comparedId;
    }
  }

  return {value: lowestValue, id: lowestIdx};
}
