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

{
function dms2(num) {
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

}

/**
 * I: Number representing an angle between 0 and 360 degrees
 * O: String representing that angle in degrees, minutes, and seconds.
 * 
 * Explicits:
 * 1. Use a degree symbol to represent degrees
 * 2. Single qote to represent minutes
 * 3. Double quote to represent seconds
 * 4. 60 minutes in a degree, 60 seconds in a minute
 * 5. Input is floating point number
 * 6. Input is between 0 and 360 degrees inclusive
 * 
 * Implicits:
 * 1. 0 input returns 0 output, but 360 can return 360 or 0
 * 2. The non-decimal value is translated directly as the left
 * -of the degrees symbol
 * 3. The decimal value is what gets converted to the minutes & seconds
 * 4. Integer of Decimal value * 60 === Minutes
 * 5. Integer of Decimal value * 60 === Seconds
 * 6. Each segment length is 2 for minutes and seconds, and 1-3 for degrees
 * 
 * 76.73 --> 76 degrees
 * 0.73 * 60 === 43.8 --> 43 Minutes
 * 0.8 * 60 === 48 --> 48 seconds
 * 
 * 0 --> 0 degrees, no decimal so 0 minutes and seconds
 * 
 */

/**
 * Data structures:
 * 1. Numbers to string
 * 2. Calculate operations with Numbers
 * 3. Append to strings
 * 
 * 
 * Algorithm:
 * 1. Number - (Number remainder 1) === Degrees
 * 2. Convert to string, append each character to degrees variable object
 * 2. let minutes = (Number remainder 1 * 60)
 * 3. minutes - (minutes % 1) === Minutes
 * 4. Convert to string, append each character to minutes variable
 * 5. Repeat for Seconds
 * 6. Check length of minutes and string array, if less than 2, append 0 to front of array
 * 7. Join array into strings, combine with degrees and return
 */

function dms(float) {
  let angleObj = {
    degrees: '',
    minutes: [],
    seconds: [],
  }

  float = realFloat(float);

  if (float > 360) float = float - 360

  angleObj.degrees = (float - (float % 1));
  calculate60(calculate60(float, angleObj, 'minutes'), angleObj, 'seconds');

  return `${angleObj.degrees}°${angleObj.minutes.join('')}'${angleObj.seconds.join('')}"`

}

function calculate60(float, object, property) {
  let tempFloat = (float % 1) * 60;
  let segment = tempFloat - (tempFloat % 1);
  object[property] = `${segment}`.split('');

  while (object[property].length < 2) {
    object[property].unshift('0');
  }
  return tempFloat;
}

/**
 * 
 * 500
 * 
 * 360
 * 
 * 500 / 360 === >1
 * 
 * 500 - 360
 * 
 * 140 / 360 === < 1
 * 
 * 140
 * 
 * 
 * 800 / 360 === > 1
 * 
 * 800 - 360 = 440
 * 
 * 440 / 360 === > 1
 * 
 * 440 - 360 === 80
 * 
 * 
 * -1 --> -359
 * 
 * -420 / 360 === < -1
 * 
 * -420 + 360 = -60
 * 
 * -60 / 360 === > -1
 * 
 * 360 - 60 == 300
 * 
 */

function realFloat(float) {
  if (float > 360) {
    while (float / 360 > 1) {
      float -= 360;
    }
  } else if (float < 0) {
    while (float / 360  < -1) {
      float += 360;
    }

    float = 360 + float;
  }

  console.log(float);
  return float;
}

// realFloat(400);
// realFloat(-420);
// realFloat(-40);


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"