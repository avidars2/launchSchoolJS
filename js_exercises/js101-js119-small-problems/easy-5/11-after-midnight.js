/**
 * Definitions:
 * Time of day can be represented as number of minutes before
 * or after midnight. If positive, time is after midnight
 * 
 * If negative, time is before midnight
 * 
 * I: Integer
 * O: hh:mm string representing time
 * 
 * Explicits:
 * 1. Don't use Date class methods
 * 2. Take integer and return date format
 * 
 * Implicits:
 * 1. 1440 minutes in a day
 * 2. Numbers over 1440 count over to the time for the next day
 * 3. Vice versa (below 1440 count for time of previous day)
 */

/**
 * DS:
 * 1. String & Numbers
 * 
 * Algorithm:
 * 1. Evaluate if input is positive or negative
 * 2. If positive,
 * 
 * 1440
 * 
 * 60
 * 
 * [60]
 * [60]
 * [60]
 * [60]
 * [60]
 * 
 * There are 24 buckets with [60]
 * 
 * How many buckets does the # fill?
 * 
 * If input is 35
 * 
 * If input > 60
 * 
 * 70 / 60 --> 1 remainder 10
 * 
 * 1 is the hour, remainder is the minutes
 * 
 * 2--If input > 60 && <= 1440
 * -- Math.floor(Input / 60) === Hours
 * -- Input % 60 === Minutes
 * 3 -- If input < 60 && >= 0
 * -- Input === Minutes
 * --Hours === 00
 * 
 * 4. If input < 0 && >= -1440
 * -- 1440 + (input) //let's say -3 === 1337
 * -- Then pass into Step 2
 * 
 * 
 * 
 * 4. If input > 1440
 * --While input > 1440 -- subtract 1440 before passing into function
 * 5. If input < -1440
 * --While input < -1440 -- add 1440 before passing into above
 * 
 */

const MINUTES_PER_DAY = 1440;
const MINUTES_PER_HOUR = 60;

function timeOfDay(int) {
    int = getRealInt(int);

    let timeArr = int >= 0 ? getTimeArr(int) : getTimeArr(MINUTES_PER_DAY + int);

    let timeStr = timeArr.map(timeSegArr => {
        if (timeSegArr.length !== 2) {
            return `0${timeSegArr[0]}`
        } else return `${timeSegArr.join('')}`;
    }).join(':');



    // console.log(timeArr, timeStr)

    return timeStr
}

function getTimeArr(int) {
    let hours;
    let minutes;

    if (int >= MINUTES_PER_HOUR) {
        hours = Math.floor(int / MINUTES_PER_HOUR);
        minutes = int % MINUTES_PER_HOUR;
    } else if (int <= MINUTES_PER_HOUR && int >= 0) {
        hours = 0;
        minutes = int;
    }

    return [`${hours}`.split(''), `${minutes}`.split('')];
}

function getRealInt(int) {
    while (int > MINUTES_PER_DAY) {
        int -= MINUTES_PER_DAY;
    }
    while (int < -MINUTES_PER_DAY) {
        int += MINUTES_PER_DAY;
    }

    // console.log(int)
    return int;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");