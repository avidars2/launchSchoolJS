/**
 * The goal is to see how I approach each step
 * 
 * When I look at the discussion, notice what I may have missed and
 * ask myself why --forgot? didn't think in that way? etc.
 * 
 * The goal is to develop my thinking.
 */


/**Problem:
 * Leftover Blocks

You have a number of building blocks that can be used to build a valid structure. 
There are certain rules about what determines the validity of a structure:

The building blocks are cubes
// The structure is built in layers
// The top layer is a single block
// A block in an upper layer must be supported by four blocks in a lower layer
// A block in a lower layer can support more than one block in an upper layer
// You cannot leave gaps between blocks

Write a program that, given the number for a specific amount of cubes, 
calculates the number of blocks left over after building the tallest possible valid structure.
 * 
 */
/**Step 1: Understand the problem
 * Tasks

You are provided with the problem description above. Your tasks for this step are:

To make notes of your mental model for the problem, including explicit and implicit rules
Write a list of questions for things that aren't clear about the problem from the description provided

Input: Number amount of cubes
Output: Number of blocks left over (after building tallest possible structure)

Given a number to represent cubes given, determine the tallest possible valid structure of a tower, and output 
the remaining cubes.

A valid tower must:
-Not have any gaps between it's blocks
-Have a single block on top
-Every bottom layer must be four blocks

Questions:
1. What Are gaps? Are they spaces between blocks vertically? Or Horizontally as well?
How about Diagnoally?
2. Is 4 blocks the max amount per layer? Or can it go above?
3. Return value isn't explicit but is implied to be Number of cubes
4. What is a layer? Is it just one thing stacked upon another?
5. What determines an upper layer being supported by a lower layer?
If the bottom layer is 4 blocks, but every layer after is one block, does that count?

Explicits:
- Input will be a number
- Output will be a Number?
- Building blocks are cubes (3 dimensional objects)
- Structure is built in layers, with blocks
- Block in lower layer can support more than one block
- Top layer must be a single block
- Bottom layers must be four blocks
- Gaps cannot be left between blocks

Implicits:
- Every bottom layer must be at least four blocks
- Tallest tower and blocks left over must both be calculated
- Top layer is 1 block (layer 1)
- Each descending layer, if incremented by 1, is layer^2 blocks (layer squared)
- Layer * layer = blocks at the layer
- Each layer viewed at the side tells you how many blocks if squared are at that layer


Ideas:
- We'll need to calculate the tallest possible tower in order to get the remainder blocks


Which is valid?

Option 1:
   []
   []
   []
[][][][]

Option 2:
   []
[][][][]
[][][][]
[][][][]


--Side view of layers
   [] -top layer
  [][] -lower layer (Block is centered on corners to get supported by 4 blocks)
 [][][]
[][][][]


 [] --Aerial view of each layer

 [][]
 [][]

 [][][]
 [][][]
 [][][]

 [][][][]
 [][][][]
 [][][][]
 [][][][]

 */

 /**Examples and test cases
  * 
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
  * 
With reference to your initial mental model and questions from Step 1, make some notes about the test cases. 
Do the test cases confirm or refute different elements of your original analysis and mental mode? 
Do they answer any of the questions that you had, or do they perhaps raise further questions?
  * 
  *
  * The test cases seem to confirm the 'pyramid' structure of the blocks
  * It also confirms that the bottom layer may not have excess blocks, so leftovers from the
  * valid structure will always be there
  * 
  * Mental model revised:
  * 
  * Given an input Number, calculate the amount of leftover blocks after building a valid structure and
  * return that Number
  * 
  * Implicits/Updates:
  * 1. Pyramid-like structure
  * 2. Each level counting from top down reflects
  * amount of blocks if squared
  * 3. Blocks will be left over if not necessary for a layer
  * 4. If no blocks, 0 remaining
  * 
  * 
  []
 [][]
[][][]
  * 
  * 
  */

/** Data structures
 * 1. Number in, Number out
 * 
 * If we are building the pyramid with the cubes, an Array would be useful
 * 
 * Number --> Calculate tower size --> Number
 * [
 *  []
 * [][]
 * ]
 * 
 */

/** Algorithm
 * For this step, use your analysis of the problem so far to write out a high-level algorithm that solves the problem at an abstract level. 
 * Avoid too much implementation detail at this stage.
 * //Think about things in terms of conditionals and loops, aka programatically
 * //Taking the abstract problem and grouding it to a step by step/something more visual helps like I did below
 * 
 * 5 blocks
 * 
 *  []
 * [][]
 * 
 * 1. Write function to take Number input
 * 2. Build tower from Number until out of blocks OR not enough blocks for valid layer
 * 3. Return remaining blocks
 * 
 * 
 * 2 expanded:
 * 1. blocks remaining = Take Number input
 * 2. Track current layer number
 * 2. blocksNeeded = layer number squared
 * 3. If blocks remaining >= blocksNeeded, build layer
 * 4. Subtract blocks used
 * 4. Add 1 to layer number,
 * 4. Repeat until condition is invalid
 * 5.Return remaining blocks
 * 
 * 5 blocks, layer 1
 * 4 blocks, layer 2
 * 0 blocks, layer 3 --> stops here
 * 
 * 
 * //After writing the algorithm above and starting the coding step, I can write some ideas down on how to solve this programatically
 * --I can add potential methods, code-specific syntax to my algorithm
 */

function calculateLeftoverBlocks(num) {
  let blocksRemaining = num;
  let layer = 1;
  
  while (true) {
    let blocksNeeded = Math.pow(layer, 2);
    if (blocksRemaining >= blocksNeeded) {
      blocksRemaining -= blocksNeeded;
      layer++;
    } else break;
  }
  // console.log(blocksRemaining);
  return blocksRemaining;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true