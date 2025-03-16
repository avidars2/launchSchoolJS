let [arr1, arr2] = [[]];

console.log(arr1)
console.log(arr2)

//First loop will iterate through array
//Second loop will iterate starting from current position on same array
////Second loop will find lowest value in array
//After second loop runs, first loop will swap the position of it's current value with the lowest value
/**
 * 2 loops
 * 
 * First loop tracks current element & position, and lowest element & position
 * Second loop starts at the position of the first loops counter
 * After second loop runs, first loop swaps elements
 * 
 */

function sortAsc(arr) {
  arr.forEach((currentEl, currentPos) => {
    let [lowestVal, lowestPosition] = [currentEl, currentPos];
    for (let position = currentPos; position < arr.length; position++) {
      if (arr[position] >= lowestVal) continue;
      lowestVal = arr[position];
      lowestPosition = position;
    }
    arr[currentPos] = lowestVal;
    arr[lowestPosition] = currentEl;
  })
}

let x = [5, 4, 3, 1, 2];
sortAsc(x);
console.log(x);