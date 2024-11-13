//Problem

/**
Build a program that asks the user to enter the length and width of a room
in meters, and then logs the area of the room to the 
console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. 
Use the readlineSync.prompt method to collect user input.


Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
 */

/**PE
 * 
 * Inputs/Outputs
 * 
 * Input: Room length and room width in meters
 * 
 * Output: Print to console room area in sq meters and feet
 *
 * 
 * 10 x 5
 * 
 * Output: 50 sq meters (538.20) [It looks like they rounded 753.473 to .47]
 *  - So I am rounding .195 to .20
 * 
 * 
 * Implicit requirements:
 * - Positive integers must be entered, not negative
 * - 0 cannot be a value
 * 
 * Can decimals be entered? Yes
 * 
 * Through a length and width input from a user, determine the sq meters of
 * a room, as well as the sq feet, and print that to the console.
 * 
 * 
 * Examples/Test cases:
 * 
 * Inputs:
 * 10, 5
 * 
 * Output:
 * 50, 538.195 (rounded to 538.20)
 * 
 * 
 * Inputs: 0, 1
 * 
 * Output:
 * Request re-entry of a value
 * 
 * 
 * Input: -5.5, 10
 * 
 * Output:
 * Convert to absolute value
 * 
 */

/** DA
 * *****Problem says not to worry about validating input!!
 * Data structure:
 * Coerce string input from readline into Number
 * 
 * Algorithm:
 * 1. GET input from user on length, then width
 * 2. IF input is 0 or negative n(ignore handling for now)
 * 3. Convert input to Number and multiply to get sq meter result
 * 4. Multiply result by 10.7639 to get sq foot result
 * 5. Round both values to 2 decimal places
 * 6. Print both values to console
 * 
 * 
 * Test input:
 * 0, 1
 * 
 * Output: 0, 0
 * 
 * Test input: -5.5, 10
 * 
 * Output: -55, (whatever sqft calculation is)
 * 
 * 
 * Test input: 5, 10
 * 
 * Output: 50, 538.20
 * 
 */


let rlSync = require('readline-sync');

const SQMETER_TO_SQFT = 10.7639;

let unit = rlSync.question('Enter unit of measurement (meters/feet): ');

while (unit != 'feet' && unit != 'meters') {
  unit = rlSync.question('Try again. Enter unit of measurement (meters/feet): ');
  console.log(unit);
}

let length = rlSync.question(`Enter the length of the room in ${unit}: `);
let width = rlSync.question(`Enter the width of the room in ${unit}: `);

let roomArea = (Number(length) * Number(width));

let roomAreaConverted;

if (unit === 'meters') {
  roomAreaConverted = roomArea * SQMETER_TO_SQFT;
} else {
  roomAreaConverted = roomArea / SQMETER_TO_SQFT;
}

roomArea = ((Math.round(roomArea * 100)) / 100);
roomAreaConverted = ((Math.round(roomAreaConverted * 100)) / 100);

console.log(`The area of the room is ${roomArea} square ${unit} (${roomAreaConverted} square ${
  unit === 'feet' ? 'meters' : 'feet'
}).`);

/**PEDA For extended problem
 * 
 * Input: Measurement type, length, width
 * Output: Area in desired measurement type, conversion in parantheses
 * 
 * 
 * Meters, 10, 5
 * 
 * 50 sq meters (x sqft)
 * 
 * Feet, 10, 5
 * 
 * 50 sq feet (x sqm)
 * 
 * Measurement type gets input, then the length and width
 * 
 * Based on the measurement type, the suffix of the area is printed
 * 
 * And in parantheses, the conversion is printed
 * 
 * So as a test
 * 
 * Feet, 10, 5
 * 
 * 50 sq feet, (x sqm)
 * 
 * 
 * Per a measurement unit entered, as well as a length and width, 
 * convert the entered items into the area with a suffix of the unit of measurement
 * and in parantheses, print the area converted to the other unit of measurement
 * 
 * 
 * Data structures remain the same strings converted to Numbers except for
 * the type of unit
 * 
 * Algorithm
 * 
 * GET Measurement unit, length, width
 * IF Measurement unit is not valid, request again
 * Multiply length by width to get area and assign to variable
 * Convert area to alternate measurement and assign to variable
 * Print area and conversion with appropriate suffix
 */