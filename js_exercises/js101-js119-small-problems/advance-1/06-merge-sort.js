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


function solution2() {
    /**
 * Break down array's elements into nested
 * sub-arrays
 * 
 * Then combine those nested sub-arrays back together 
 * in sorted order
 * 
 * [2, 1] --> [[2], [1]] --> [1, 2]
 * 
 * [1, 2, 3, 4] --> [[1, 2], [3, 4]] //Divide initial list into 2 lists
 * [[1, 2], [3, 4]] --> [[[1], [2]], [[3], [4]]] //Divide each sub-array into two lists
 * //Repeat until each innermost sub-array contains only one value
 * 
 * I: Unsorted array of only Numbers or only Strings
 * O: New Sorted array
 * 
 * Rules
 * Explicits:
 * 1. Use the merge sort algorithm
 * 2. Every element will be the same data type
 * 
 * Implicits:
 * 1. Arrays can be any length, odd or even
 * 2. Array should be split until innermost arrays have only 1 value
 * 
 * CQ:
 * 1. Is this mutating the original array? NO - new array
 * 
 * Data structures:
 * 1. Arrays
 * 
 * Algorithm:
 * 1. Take an unsorted array
 * 2. Do an initial division of the array in half,
 * and place the elements into new sub-arrays in a new array
 * [4, 2, 3, 1] --> New array [[4, 2]], [3,1]]
 * 3. Check if the nested sub-array's ([4, 2] and [3, 1]) are length 1
 * 4. If not length 1, mutate the nested subarray by splitting it in half
 * and placing half the elements in a new sub-array, and the other in a new sub-array
 * [[4,2], [3,1]] --> [[[4], [2]], [[3], [1]]]
 * 5. Check length of these new nested sub-arrays, and if not 1, repeat
 * Step 4 until they are length 1
 */



/**
 * Decompose problem
 * Break down into english the steps for algorithm
 * If any part is confusing, break down algorithm into
 * sub-algorithm
 * 
 * Break actions down with similar PEDAC
 */


function mergeSort(arr) {
    let initialDividedArray = splitArray(arr);

    //I: An array with 2 nested arrays
    //O: An array where innermost nested arrays are length 1
    /**
     * [[1, 2], [3, 4]] for each array, if length > 1, 
     * return [arr.slice(0, Math.ceil(arr.length / 2)), arr.slice(0, Math.ceil(arr.length / 2))];
     * 
     * Return [[[1], [2]], [[3], [4]]]
     * 
     * This will iterate through the array
     * Take the array elements and if the length > 1, split it in half again
     * 
     * It will return a new array with the further divided elements
     * 
     * [1, 2, 3, 4, 5, 6, 7, 8] --> [[1, 2, 3, 4], [5, 6, 7, 8]]
     * --> [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
     * 
     * I need this to not only split the array in half,
     * But split the innermost array in half
     * 
     * How do I take an array, with an unknown amount of nests
     * and split that array in half?
     */

    /**
     * I: Array with unknown amount of nests & 1 to n elements in the innermost section
     * O: Innermost sections split in half
     * 
     * [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
     * [[1, 2], [3, 4]]
     * 
     * Explicits:
     * 1. A non-array element (String or Number) is at the lowest level
     * 2. I want to find the second to lowest level to get the array it is contained in
     * 3. Only arrays of length that are higher than 1 must be split ?
     * 
     * Implicits:
     * 1. I don't know the length of the array or the depth
     * 2. Each innermost array needs to be split
     * 
     * Getting to lowest level first and return a reference to the array a level above
     * Because we'll be iterating through that array and splitting those nested arrays
     * 
     * 
     * 
     * 1. Take an array of unknown depth
     * 2. I can check if it is an array
     * 3. If so, access a lower reference array[0] ([[1, 2], [3, 4]] --> array[0] --> [1, 2])
     * 4. Now check again if the reference is an Array
     * 5. Repeat steps 3 & 4 until argument is not an array
     * -----access a lower reference array[0] ([1, 2] --> 1)
     * -----1 is not an array
     * -----
     * 6. Once lowest level is found, return 2 levels up (So not 1, nor [1, 2], but the reference to [[1, 2], [3, 4]])
     */

    // getSecondLowestLevel(initialDividedArray);
    // console.log(getSplitInnerArrays(getSecondLowestLevel(initialDividedArray)));

    recursiveSplit(initialDividedArray);
    console.log(initialDividedArray);
    // initialDividedArray.forEach(el => el.forEach(arr => console.log(arr)));

    /**
     * I: An array of unknown depth, with one element each for innermost depths
     * O: Ordered surface level array
     * 
     * 1. Get innermost pairs of arrays
     * 2. For each pair, pass to merge function
     * 3. Re-assign innermost pair index with the return value of merge function
     * 4. Repeat until no depth
     */
    recursiveMerge(initialDividedArray);
    console.log(merge(initialDividedArray[0], initialDividedArray[1]).filter(el => el));
}

function recursiveMerge(arr) {
    //Send two drones into array at first
    //These drones will iterate over the inner arrays
    //They will then go deeper into the inner arrays until they find an element

    //For each array, if length > 1 and is array, iterate over the array
    //Then for each element of that array, if length > 1 and is array, iterate over the array

    if (arr.length === 2) return merge(...arr);

    arr.forEach((subArr, idx) => {
        if (Array.isArray(subArr) && Array.isArray(subArr[0]) && subArr[0].length > 1) { //[[ [ [ 9 ], [ 2 ] ], [ [ 7 ], [ 6 ] ] ], [ [ [ 8 ], [ 5 ] ], [ [ 0 ], [ 1 ] ] ]]
            recursiveMerge(arr);
            console.log(subArr);
        } else {
            console.log(subArr);
            console.log(subArr[0], subArr[1])
            arr[idx] = merge(subArr[0], subArr[1]);
        }
    })

    console.log(arr);
}

/**
 * We can now access second to innermost reference
 * We want to split each array in the second to innermost reference in half
 * [ [ 9, 5 ], [ 7, 1 ] ] --> [[[9], [5]], [[7], [1]]]
 * For each array, if length > 1, split in half
 */

function getSplitInnerArrays(arr) {
    return arr.map(inArr => {
        if (inArr.length > 1) {
            return splitArray(inArr);
        } else return inArr;
    })
}

/**
 * I: Array of varying depth
 * O: Array split until innermost arrays are length of 1
 * 
 * Take the array
 * Pass it into the splitInnerArray function
 * Check if innermost array is length 1
 * [[1, 2], [3, 4]], [[5, 6], [7, 8]]
 */

function recursiveSplit(arr) {

    if (getLowestLevel(arr).length === 1) return arr;
    /**
     * I am taking an array
     * Then taking it's nested arrays and calling a function to split them
     * [[1, 2], [3, 4]]
     * [1, 2] --> [[1], [2]]
     * 
     * Then for each of those nested arrays, split them further
     */
    //Input example for below: [[1, 2], [3, 4]]
    arr.forEach((inArr, idx) => {
        arr[idx] = splitArray(inArr);
        // console.log(arr[idx]);
    })
    //Output example for above: [[[1], [2]], [[3], [4]]]
    //Each inner array gets passed into this function
    //[1], [2], [3], [4]
    arr.forEach(inArr => recursiveSplit(getSecondLowestLevel(inArr)));
    // recursiveSplit(getSecondLowestLevel(arr));
        
}

function splitArray(arr) {
    return [arr.slice(0, Math.ceil(arr.length / 2)), arr.slice(Math.ceil(arr.length / 2))];
}

function getSecondLowestLevel(arr) {
    let secondLowestReference = arr;;
    let lowestReference = arr;
    let elementReference;

    while(Array.isArray(lowestReference)) { //[[1, 2]] --> [1, 2] --> 1
        //[[[1, 2], [3, 4]], [[5, 6], [7, 8]]] --> [[1, 2], [3, 4]] --> [1, 2]
        //[[1, 2], [3, 4]] --> [1, 2] --> 1
        secondLowestReference = lowestReference;
        lowestReference = secondLowestReference[0];
        elementReference = lowestReference[0];
        if (!Array.isArray(elementReference)) break;
    }
    // console.log(secondLowestReference, lowestReference, elementReference);

    return secondLowestReference;
}

function getLowestLevel(arr) {
    let secondLowestReference = arr;;
    let lowestReference = arr;
    let elementReference;

    while(Array.isArray(lowestReference)) { //[[1, 2]] --> [1, 2] --> 1
        //[[[1, 2], [3, 4]], [[5, 6], [7, 8]]] --> [[1, 2], [3, 4]] --> [1, 2]
        //[[1, 2], [3, 4]] --> [1, 2] --> 1
        secondLowestReference = lowestReference;
        lowestReference = secondLowestReference[0];
        elementReference = lowestReference[0];
        if (!Array.isArray(elementReference)) break;
    }
    // console.log(secondLowestReference, lowestReference, elementReference);

    return lowestReference;
}

function merge(arr1, arr2) {
    console.log(`Arguments: `, arr1, arr2)
    // if (!Array.isArray(arr1)) arr1 = [arr1];
    // if (!Array.isArray(arr2)) arr2 = [arr2];
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


mergeSort([9, 5, 7, 1]);               // [1, 5, 7, 9]
mergeSort([5, 3]);                     // [3, 5]
mergeSort([6, 2, 7, 1, 4]);            // [1, 2, 4, 6, 7]
// mergeSort([9, 2, 7, 6, 8, 5, 0, 1]);   // [0, 1, 2, 5, 6, 7, 8, 9]
// mergeSort([9, 2, 7, 6, 8, 5, 0, 1, 9, 2, 7, 6, 8, 5, 0, 1]);   // [0, 1, 2, 5, 6, 7, 8, 9]

// mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
}