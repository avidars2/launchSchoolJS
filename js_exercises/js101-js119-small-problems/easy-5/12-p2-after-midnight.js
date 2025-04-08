/**
 * 
 * 2 functions
 * I: Time format String
 * O: Number representing difference before or after midnight
 * 
 * 
 * Algorithm:
 * 1. Split string by ':'
 * 2. Multiply first element by 60
 * 3. Add second element
 * 4. If before midnight
 * --1440 - result
 * 5. If after
 * --return result
 * 
 */


const MINUTES_PER_DAY = 1440;
const MINUTES_PER_HOUR = 60;
function afterMidnight(hourformat) {
    // console.log(calculateMinutes(hourformat))
    return (calculateMinutes(hourformat) !== MINUTES_PER_DAY ? calculateMinutes(hourformat) : 0);

}

function beforeMidnight(hourformat) {
    // console.log(calculateMinutes(hourformat));
    return (MINUTES_PER_DAY - calculateMinutes(hourformat) !== MINUTES_PER_DAY ? 
    MINUTES_PER_DAY - calculateMinutes(hourformat) : 0)
}

function calculateMinutes(hourformat) {
    return hourformat.split(':').
    reduce((acc, el) => (Number(acc) * MINUTES_PER_HOUR) + Number(el));
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);