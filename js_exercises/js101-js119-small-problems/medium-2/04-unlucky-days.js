/**
 * 
 */

/**
 * I: Number representing a year
 * Output: Amount of friday the 13ths in that year
 * 
 * Explicits:
 * 1. Assume year is greater than 1752
 * 
 * Implicits:
 * 1. How do I get the calendar?
 * 2. How do I get the date? //Date function?
 */

// let dateFormatStr = "1971-02-13T00:00:00Z";
// let date3 = new Date(dateFormatStr)

function fridayThe13ths(yearNum) {
  let month = 1;
  let dayArr = [];
  const FRIDAY = 4; //5 is Friday but due to my timezone it is - 1
  while (month <= 12) {
    let dateFormatStr;
    if (month < 10){
      dateFormatStr = `${yearNum}-0${month}-13T00:00:00Z`;
    } else {
      dateFormatStr = `${yearNum}-${month}-13T00:00:00Z`;
    }
    let date = new Date(dateFormatStr);
    let day = date.getDay();
    dayArr.push(day);
    // console.log(`Day: ${day} Count: ${month}`)
    month++;
  }
  let fridays = dayArr.filter(num => num === FRIDAY).length;

  console.log(`Fridays: ${fridays}`);
  return fridays;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

/**
 * Turn date into string
 * Iterate month (6-7)
 * Set day (9-10) to '13'
 * 
 * Get 'day' from that new date string
 */
