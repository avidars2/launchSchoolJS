/**
 * Definitions:
 * Merge sort is a recursive sorting algorithm that
 * works by breaking down an array's elements into
 * nested sub-arrays, then combining those nested sub
 * -arrays back together in sorted order.
 */

/**
 * I: Array of inputs
 * O: New array sorted, using merge sort algorithm
 * 
 * Explicits:
 * 1. Use merge sort algorithm
 * 2. You can use merge function from prior
 * 3. Array inputs will contain either all Numbers or Strings
 * 
 * Implicits:
 * 1. Inputs can be Numbers or Strings
 * 2. Sort ascending order
 * 3. Each iteration divides array in half until
 * --each sub-array length is 1
 * 4. Not all elements will be at the same depth for
 * an odd length array
 * 
 * CQ:
 * 1. What happens to uneven length arrays?
 * 
 * [1, 2, 3, 4] -->[[1, 2], [3, 4]]
 * --> [[[1], [2]], [[3], [4]]]
 * 
 * 1, 2, 3
 * --> [1, 2],[3] --> [[[1], [2]], [3]] ?
 * 
 * 1, 2, 3, 4, 5
 * 
 * [1, 2, 3], [4, 5]
 * [[1, 2], [3]], [[4], [5]]
 * [[[1], [2]], [3]], [[4], [5]]
 * 
 * I could either further nest an array already at length 1
 * to keep depth equal, or I can just account for uneven depth
 * 
 * 
 * Phase 1: Divide & Nesting
 * Phase 2: Merging & sorting
 * 
 * 
 * Phase 1:
 * [1, 2, 3, 4, 5]
 * Divide it by half into two nested sub-arrays
 * [[1, 2, 3], [4, 5]]
 * Check innermost array lengths if they are all one
 * 
 * If they are, start next phase. Otherwise, repeat by
 * dividing and nesting
 * 
 * [[[1, 2], [3]], [[4], [5]]] 
 * 
 * [[[[1], [2]], [3]], [[4], [5]]];
 * 
 * Phase 2: (Pretend the order was 3, 2, 5, 4, 1)
 * [[[[3], [2]], [5]], [[4], [1]]];
 * Go to second-to-inner most array where length is 2
 * 
 * Merge function to sort nested arrays at that level where
 * length is 2:
 * [[[2, 3], [5]], [1, 4]]
 * 
 * Repeat until array is flat:
 * -Check if element isArray, if so continue:
 * [[2, 3, 5], [1, 4]]
 * 
 * [1, 2, 3, 4, 5]
 * 
 * 
 * 
 */

/**
 * Data structures:
 * 1. Arrays
 * 
 * Algorithm:
 * 
 * Phase 1: Divide & Nesting
 * Phase 2: Merging & sorting
 * 
 * Phase 1:
 * [1, 2, 3, 4, 5]
 * Divide it by half into two nested sub-arrays
 * [[1, 2, 3], [4, 5]]
 * Check innermost array lengths if they are all one
 * 
 * If they are, start next phase. Otherwise, repeat by
 * dividing and nesting
 * 
 * [[[1, 2], [3]], [[4], [5]]] 
 * 
 * [[[[1], [2]], [3]], [[4], [5]]];
 * 
 * Phase 2: (Pretend the order was 3, 2, 5, 4, 1)
 * [[[[3], [2]], [5]], [[4], [1]]];
 * Go to second-to-inner most array where length is 2
 * 
 * Merge function to sort nested arrays at that level where
 * length is 2:
 * [[[2, 3], [5]], [1, 4]]
 * 
 * Repeat until array is flat:
 * -Check if element isArray, if so continue:
 * [[2, 3, 5], [1, 4]]
 * 
 * [1, 2, 3, 4, 5]
 */



// function passArray(arr) {
//    arr = divideArray(arr); 
//    console.log(arr);
//    divideInnerArrays(arr);

//    console.log(arr);
//    console.log(arr[0], arr[1]);

// //    console.log(innerMostArray(arr, 1))
// }



// passArray([1, 2, 3, 4, 5, 6])

function mergeSort(arr) {
    console.log(arr);
    arr = divideArray(arr); 
    divideInnerArrays(arr);
 
    // * Phase 2: (Pretend the order was 3, 2, 5, 4, 1)
    // * [[[[3], [2]], [5]], [[4], [1]]];
    // * Go to second-to-inner most array where length is 2
    // * 
    // * Merge function to sort nested arrays at that level where
    // * length is 2:
    // * [[[2, 3], [5]], [1, 4]]
    // * 
    // * Repeat until array is flat:
    // * -Check if element isArray, if so continue:
    // * [[2, 3, 5], [1, 4]]
    // * 
    // * [1, 2, 3, 4, 5]


    console.log(arr);
    console.log(arr[0], arr[1], '\n');

    let newArr = mergeInnerArrays(arr);
    newArr = newArr.map(el => el[0]);
    console.log(newArr);


    return newArr
 
 //    console.log(innerMostArray(arr, 1))
}

function divideInnerArrays(arr) {
    if (!innerMostArray(arr, 0)) return arr;
     arr.forEach((inArr, idx) => {
         if (inArr.length > 1) {
             arr[idx] = divideArray(arr[idx]);
         }
         // console.log(arr);
         });
     arr.forEach(arr => divideInnerArrays(arr));
 }

 function mergeInnerArrays(arr) {
    if (bottomOfArray(arr) === 2) return arr;

    //Get inner most array reference
    console.log(innerMostArray(arr, 0, 3));
    console.log(innerMostArray(arr, 1, 3));
    
    return mergeInnerArrays(merge(innerMostArray(arr, 0, 3), innerMostArray(arr, 1, 3)));

 }

function bottomOfArray(arr) {
    let currentArr = arr;
    let levels = 0
    while(Array.isArray(currentArr)) {
        levels++;
        if (Array.isArray(currentArr[0])) {
            currentArr = currentArr[0];
        } else break;
    }

    // console.log(`Levels: ${levels}`);
    return levels;
}

function innerMostArray(arr, position, depth=2) {
    let layers = bottomOfArray(arr);
    let arrRef = arr;
    if (typeof arrRef[0] === 'string') return null;
    arrRef = arr[position];
    while (layers > depth) {
        arrRef = arrRef[0];
        layers--;
    }
    // console.log(arrRef);
    return arrRef;
}

function divideArray(arr) {
    return [arr.slice(0, Math.ceil(arr.length / 2)), arr.slice(Math.ceil(arr.length / 2))];
}

// function divideArray(arr) {
//     if (arr.length > 1) {
//         return [arr.slice(0, Math.ceil(arr.length / 2)), arr.slice(Math.ceil(arr.length / 2))];
//     } else return arr;
// }


// console.log(divideArray([1, 2, 3]));


mergeSort([9, 5, 7, 1]);               // [1, 5, 7, 9]
mergeSort([5, 3]);                     // [3, 5]
mergeSort([6, 2, 7, 1, 4]);            // [1, 2, 4, 6, 7]
// mergeSort([9, 2, 7, 6, 8, 5, 0, 1]);   // [0, 1, 2, 5, 6, 7, 8, 9]

// mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]



function merge(arr1, arr2) { //Returns merged list of two sorted arrays of same length
    if (arr1.length === 0 && arr2.length === 0) return [];
    if (arr1.length === 0 || arr2.length === 0) {
        console.log(arr1.length === 0 ? arr2.slice() : arr1.slice());
        return arr1.length === 0 ? arr2.slice() : arr1.slice();
    }
    let newArr = arr1.concat(arr2);
    let lowestValue = 0;
    let resultArray = [];

    while (newArr.length > 0) {
        //Loop through new array
        //Find lowest value
        //Splice lowest value out and into resultArray
        lowestValue = newArr[0];
        for (let index = 0; index < newArr.length; index++) {
            if (newArr[index] < lowestValue) {
                lowestValue = newArr[index];
            } else continue;
        }
        resultArray.push(newArr.splice(newArr.findIndex(el => el === lowestValue), 1)[0]);
    }

    console.log(resultArray);
    return resultArray;

}