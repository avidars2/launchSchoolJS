/**
 * 
 */
/**
 * I: Floating point number representing angle between 0 and 360
 * O: String representing that angle in degrees, minutes, and seconds
 * Definitions:
 * 60 minutes in a degree
 * 60 seconds in a minute
 * 
 * Explicits:
 * 1, Floting point number input between 0 and 360
 * 2. String return
 * 3.
 * 
 * Implicits:
 * 1. Degrees appear to be integers
 * 2. Minutes 
 * 
 * CQ:
 * 1. What is a minute and what is a second in relation to the floating point number?
 * 
 * 76.73 --> 76 Degrees
 * 73 convert to 43'48?
 * 60 * .73 = 43.8
 * 60 * .8  = 48
 * 
 * Minutes = Decimals of floating point number * 60, rounded
 * Seconds = Decimals of minutes * 60 rounded
 * 
 * 254.6 --> 254 would be the degrees
 * 60 * .6 --> minutes
 * Decimal amount from minutes * 60 --> seconds
 * 
 */

/**
 * Data structures:
 * Floating point numbers
 * Multiplying by 100 to get base numbers
 * 
 * Algorithm:
 * 1. Take Number
 * 2. If decimal, split base from decimal
 * 3 Base === Degrees
 * 4. Decimal * 60 === Minutes
 * 5. IF Minutes has decimal, split base from decimal
 * 6. Base === minutes
 * 7. Decimal * 60 === seconds
 * 8. round seconds
 * 9. If no decimal from minutes, seconds = 00
 * 
 * Algorithm:
 * 1. Take a number and convert to string
 * 2. Split Number by decimal
 * 3. If array only has 1 element, return Number*00'00"'
 * 4. Obj.degrees = first element of array
 * 5. Obj.minutes = If array element > 1 ? array[1] * 0.6
 */

function dms(num) {
  let numArr = `${num}`.split('.');
  let numObj = {degrees: numArr[0], minutes: `00`, seconds: '00'};
  if (numArr.length === 1) {
    return `${numObj.degrees}˚${numObj.minutes}'${numObj.seconds}"`;
  }

  console.log(numArr)

  let minutes = (Number(numArr[1]) / 100) * 60;
  let numArr2 = `${minutes}`.split('.');
  console.log(numArr2);
  numObj.minutes = numArr2[0];
  if (numArr2.length === 1) {
    return `${numObj.degrees}˚${numObj.minutes}'${numObj.seconds}"`;
  }
  numObj.seconds = Math.round(Number(numArr2[1]) * 6);
  return `${numObj.degrees}˚${numObj.minutes}'${numObj.seconds}"`;

}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

