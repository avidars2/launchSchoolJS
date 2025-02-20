/**
 * Input: array of Numbers
 * Output: array sorted by highest to lowest values
 * 
 * 
 * Idea: Swap sort
 * 
 * [80, 40, 20, 60]
 * Start with 80 (index 0), compare with 40 for higher value, 80 is higher, check 20, 80 is higher
 * check 60. 80 is higher in all instances, keep position.
 * 
 * Now for 40 (Index 1), compare with 20, 40 is higher, check 60, 60 is higher -- swap 60 and 40
 * 
 * Now for index 2, 20, compare with 40, 40 is higher -- swap 40 and 20
 * Algorithm:
 * 1. highestValue = 0;
 * 2. highestValueIdx = 0;
 * 2. currentIndex = 0;
 * 3. Current value = 0;
 * 4. checkIndex
 * 
 * 1. Start at current index, assign to current value and highest value
 * 2. Compare highest value to next index, if current > next idx, skip and repeat #2
 * 3. If current < next idx, 
 * - highestValue = next idx value, 
 * - highestValueIdx = next idxValue,
 * - Repeat #2 until end of array
 * 4. IF highestValue > currentValue, swap indexes
 * --array[currentIndex] = highestValue
 * --array[highestValueIdx] = currentValue
 */

function sortHigh(arr) {

  for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
    let highestValue = arr[currentIndex];
    let highestValueIdx = currentIndex;
    let curentValue = arr[currentIndex];
    
    for (let startIndex = currentIndex; startIndex < arr.length; startIndex++) {
      if (curentValue >= arr[startIndex]) continue;
      if (curentValue < arr[startIndex]) {
        highestValue = arr[startIndex];
        highestValueIdx = startIndex;
      }
    }
    if (highestValue > curentValue) {
      arr[highestValueIdx] = curentValue;
      arr[currentIndex] = highestValue;
    }
  }

  return arr;
}

let testArray = [[80, 40, 20, 60], [1, 5, 1, 2, 4, 9], [90, 40, 80, 20, 50]];

testArray.forEach(arr => console.log(sortHigh(arr)));