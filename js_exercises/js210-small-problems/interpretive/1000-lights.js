/**
 * P:
 * - bank of switches
 * - numbered 1 to n
 * 
 * I: One argument, total number of switches
 * O: An array of the lights that are on after n repetitions
 * 
 * E:
 * 1. Every switch is connected to exactly one light that is initially off
 * 2. Write a program that takes one argument
 * 
 * Assumptions:
 * 1. Always positive integer input above 0
 * 
 * I:
 * 1. The # of which pass it is represents the interval of switches to click
 * 2. The toggling of switches starts at the beginning each time
 * 
 * T:
 * Given a set of switches, numbered from 1 to n
 * --Based on which pass it is
 * --Toggle a switch in "pass #" intervals
 * --Repeat until at nth pass
 * 
 * I: 5 --> [1, 4]
 *  o o o o o
 *  o x o x o
 *  o x x x o
 *  o x x o o
 *  o x x o x
 * 
 * 
 * 
 * 
 * CQ:
 * 1. Is the input both the total # of switches and the repetitions?
 * 2. Will the argument always be a number?
 * 3. Can it ever take 2 arguments or a string?
 * 4. Can I always assume a number input or do I need to check for
 * incorrect types
 * 5. Can the number input be 0 or negative? How should that be handled?
 * 6. Is an array of numbers what you're looking for, where each number
 * represents the light switch and not in a zero-based index sense
 * 
 * Assumptions:
 * 1. If 0, return empty array
 * 2. Always number input
 * 3. All lights start off
 * 
 * EC:
 * 
 * 
 * DS:
 * 1. Array or object
 * 
 * A:
 * 
 * 5 --> [false, false, false, false, false]
 * 1 --> (idx + 1) % 1 === 0, flip switch from "false" to "true" and vice versa
 * 2 --> (idx + 1) % 2 === 0,  flip switches [t, t, t, t, t] --> [t, f, t, f, t]
 * 3 --> (idx + 1) % 3 === 0, flip switches [t, f, t, f, t] --> [t , f, f, f, t]
 * 
 * 1. Verify the input is a positive integer above 0
 * --If note, return an empty array
 * 2. Create an array of n length and fill it with "false" [f, f, f, f, f]
 * 3. Start a loop for n iterations i = 0
 * 4. For each iteration, iterate through the array 
 * 5. For each element in the array, 
 * if the idx + 1 % (outer loop iteration + 1) === 0 then flip boolean
 * 6. Repeat til end
 * 7. Map the array, replacing each true value with the (idx + 1) number [t, f, f, t, f] --> [1, f, f, 4, f] --> [1, 4]
 * 8 Filter array for numbers and return
 * 
 */

function lightsOn(switches) {
  if (switches <= 0) return [];
  let switchArr = []
  switchArr.length = switches;
  switchArr.fill(false, 0, switches);

  for (let idx in switchArr) {
    let passNum = Number(idx) + 1;

    switchArr = switchArr.map((lightSwitch, idx) => {
      let lightNum = idx + 1;
      // console.log(passNum);
      if (lightNum % passNum === 0) return !lightSwitch;
      return lightSwitch;
    })


  }

  let onLights = switchArr.map((el, idx) => {
    if (el) return idx + 1;
  }).filter(el => el);


  console.log(onLights)

}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

lightsOn(0) //[]

lightsOn(-1) //[]

lightsOn(3) //[1]