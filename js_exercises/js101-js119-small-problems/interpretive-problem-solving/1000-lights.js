/**
 * 1000 lights
 * 
 * Bank of switches from 1 to count
 * 
 * Count = 5
 * 
 * [] [] [] [] []
 * 
 * Every switch is counted to exactly one light that is
 * initially off
 * 
 * First iteration:
 * 1. Toggle every switch
 * 
 * [x] [x] [x] [x] [x]
 * 
 * Second iteration
 * 1. Toggle every switch starting at 2
 * --and incrementing by 2 (2, 4, 6)
 * 
 * [x] [] [x] [] [x]
 * 
 * Third iteration
 * 1. Toggle every switch starting at 3
 * --and incrementing by 3 (3, 6, 9, etc.)
 * [x] [] [] [] [x]
 * 
 * Fourth iteration
 * 1. Toggle every switch starting at 4
 * --andn incrementing by 4 (4, 8, 12, etc.)
 * [x] [] [] [x] [x]
 * 
 * Fifth iteration (last)
 * 1. Toggle every switch starting at 5
 * --and increment by 5 (5, 10, 15, etc.)
 * 
 * [x] [] [] [x] []
 * 
 * 
 * The iteration # determines:
 * 1. Which switches to start toggling at
 * 2. What to increment by
 * 
 * Iteration 1 --> Switch 1, 2, 3, etc.
 * Iteration 2 --> Switch 2, 4, 6, etc.
 * 
 * I: Number representing count
 * O: Array of switches currently on
 * 
 * Explicits:
 * 1. Switches start at the off position
 * 2. Switches range from 1 to 'count' (argument passed to function)
 * 3. Loop of toggling switches occurs 'count' amount of times
 * 
 * Implicits:
 * 1. Iteration determines which switch to start toggling at & 
 * what to increment by
 * 2. 
 * 
 * 
 * CQ:
 * 1. Are inputs always a Number or integer?
 * 2. What happens if input is 0?
 * --it is still 1 to 0 then?
 * 
 * Ideas:
 * 1. Array index + 1 can be used to represent switches
 * 
 * 
 * Given an argument 'count', loop through toggling switches from 1 to 'count' length, 'count' times.
 * Each iteration of the loop determines the switch to start toggling on
 * As well as the switches to increment the toggle. Return array representing switches still on
 */

/**
 * Data structures:
 * 1. Array to represent switches
 * 
 * Algorithm:
 * 1. Build array of 'count' length with each value set to 'false'
 * --represents off state of switches
 * 2. Loop through array 'count' times
 * 3. Second loop
 * 4. Starting count is at outside loop iteration position in array (iteration 1 === index 0)
 * 4. If current element is false, switch to true. If current element is true, switch to false
 * 5. Increment by current iteration
 * 6. If position is greater than length of array, continue to next iteration
 * 7. Filter array for 'true' values and track positions in array of true values
 * 8. Return array with 'true' value positions
 */

function lightsOn(switches) {
    let lightsArr = [];
    lightsArr.length = switches;
    lightsArr.fill(false, 0, switches);

    let round = 1
    while (round <= switches) {
        for (let button = round - 1; button < switches; button+= round) {
            //Starting at index 0 for first iteration
            if (lightsArr[button] === false) {
                lightsArr[button] = true;
            } else if (lightsArr[button] === true) {
                lightsArr[button] = false;
            }
        }
        round++;
    }

    // console.log(lightsArr);

    let newArr = lightsArr.map((el, idx) => el ? idx + 1: false).filter(el => el);
    console.log(newArr);

    return newArr;    
  }
  
  lightsOn(5);        // [1, 4]
  // Detailed result of each round for `5` lights
  // Round 1: all lights are on
  // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
  // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
  // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
  // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
  
  lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]