/**
 * Bubble sort
 * 
 * Write a function that sorts an array
 * using the bubble sort algorithm
 * 
 * Making multiple passes through an array
 * On each pass, 
 * two values of each pair of consecutive elements
 * are compared
 * 
 * If first value > second, two elements are swapped
 * 
 * Process is repeated until a complete pass is made
 * without performing any swaps
 * 
 * 
 * The 'base case' is no swaps performed
 */

/**
 *[ 6 2 7 1 4 ]
 * 
 * 6 > 2 ? Swap
 * [ 2 6 7 1 4]
 * 6 > 7 ? No
 * [ 2 6 7 1 4]
 * 7 > 1 ? yes swap
 * [ 2 6 1 7 4]
 * 7 > 4 ? yes swap
 * [2 6 1 4 7] --end of first pass
 * Repeat above until no more swaps occur
 * 
 * 
 * Input: array
 * Output: Ascending sorted array
 * 
 * Explicits:
 * 1. Use bubble sort algorithm
 * 2
 * 
 * Implicits:
 * 1. Bubble sort is done once no more swaps are made
 * 2. Loop until no swaps are made
 * 3. 2 values are compared at a time
 * 4. Index keeps iterating over mutated array
 * 
 * [3, 2, 1] --> 3 & 2 -- 3 > 2 swap positions
 * [2, 3, 1] --> 3 & 1 -- 3 > 1 swap positions
 * [2, 1, 3] --> 2 & 1 --> 2 > 1 swap position
 * [1, 2, 3] 2 > 3 ? No
 * [1, 2, 3] --> No swaps
 */

/**
 * Arrays and Numbers
 * Comparing Numbers and mutating array
 * 
 * Algorithm:
 * 1. Take an array
 * 2. Track if a swap was made
 * 3. Iterate through array
 * 4. Compare current index to next index
 * 5. If >, swap numbers
 * //Let next el = next el
 * //current el = current el
 * //If curret > next
 * //Idx next = current El
 * //Idx current = next El
 * 6. Repeat until end of array
 * 7. If swap was made, execute loop again
 * 8. log array
 */

function bubbleSort(arr) {
  let swap = false;
  do {
    swap = false;
    // console.log(arr);
    arr.forEach((el, idx) => {
      if (arr[idx] > arr[idx + 1]) {
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]]
        // let nextEl = arr[idx + 1];
        // arr[idx] = nextEl;
        // arr[idx + 1] = el;
        swap = true;
      }
    })

  } while (swap);
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]