/**
 * Create a function that takes an array of integers as an argument and returns the number of identical pairs of integers in that array. 
 * For instance, the number of identical pairs in [1, 2, 3, 2, 1] is 2: there are two occurrences each of both 2 and 1.

If the array is empty or contains exactly one value, return 0.

If a certain number occurs more than twice, count each complete pair once. For instance, 
for [1, 1, 1, 1] and [2, 2, 2, 2, 2], the function should return 2. 
The first array contains two complete pairs while the second has an extra 2 that isn't part of the other two pairs.

I: Array of integers
O: Number representing identical pairs in that array

Explicits:
1. If array is empty, or only has one value, return 0
2. If a particular number occurs more than twice, count each complete pair once
So [3, 3, 3] --> 1 pair
Whereas [3, 3, 3, 3] --> 2 pairs

Implicits:
1. Numbers have to be accounted for, once accounted don't re-count them as part of the pair

[7, 7, 7, 7, 7, 7, 7]
7
loop to find additional pair at starting index
7

1 pair, 7 at index 0, and 7 at index 1

Pairs === 1

Instead of splicing, skip index 0 and 1 for future iterations

[1, 2, 2, 3, 4] --> 1 pair

1, loop through array , no pairs found, skip index in future
2, loop through array, 1 additional pair found '2'
break loop
Count indexes found, skip in future
2 is skipped

3, no pairs found

4 no pairs found

Loop through the array, and take a starting element.
Loop again through the array, starting at starting element index position.
Find an element that matches that element. If found, record that index position
by adding it to a tracker array. Then break the loop.
In outer loop, skip indexes thare in tracker array


Data structures:
1. Array
--Second loops

Algorithm:
Pairs = 0 + 1
1. Loop through original array [1, 2, 2, 3]
2. Tracker array = []
3. If current element index is in tracker array, skip
4. Otherwise, second loop
5. In second loop, iterate through array from right after current element index
6. Look for value that === current element. 
--If found, add index to tracker array
--Increment Pairs by 1
--Break loop
7. If no matches, do nothing, return to outer loop

 */

function pairs(arr) {
    let foundIndexes = [];
    let pairs = 0;

    arr.forEach((el, idx) => {
        if (foundIndexes.includes(idx)) return;

        for (let innerIndex = idx + 1; innerIndex < arr.length; innerIndex++) {
            if (el === arr[innerIndex]) {
                foundIndexes.push(innerIndex);
                pairs++;
                break;
            }
        }
    })

    return pairs;
}

const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);

//Completed in 12.5 minutes