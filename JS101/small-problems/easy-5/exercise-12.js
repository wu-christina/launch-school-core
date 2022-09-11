/* As seen in the previous exercise, the time of day can be represented as the number of minutes before or
after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes
is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the number of minutes before
and after midnight, respectively. Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods. */

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY; // 1440 minutes per day

function beforeMidnight(time) {
  let hours = time.slice(0,2);
  let minutes = time.slice(3);

  let hoursToMinutes = 0;

  if (hours !== '00' && hours !== '24') {
    hoursToMinutes = Number(hours * MINUTES_PER_HOUR);
    return MINUTES_PER_DAY - (hoursToMinutes + Number(minutes));
  } else {
    return (hoursToMinutes + Number(minutes));
  }

}

function afterMidnight(time) {
  let hours = time.slice(0,2);
  let minutes = time.slice(3);

  let hoursToMinutes = 0;

  if (hours !== '00' && hours !== '24') {
    hoursToMinutes = Number(hours * MINUTES_PER_HOUR);
    return hoursToMinutes + Number(minutes);
  } else {
    return (hoursToMinutes + Number(minutes));
  }
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
