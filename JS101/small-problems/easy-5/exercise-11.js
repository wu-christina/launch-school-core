/* The time of day can be represented as the number of minutes before or after midnight. If the number of
minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before
midnight.

Write a function that takes a time using this minute-based format
and returns the time of day in 24 hour
format (hh:mm). Your function should work with any eltaMinutes input.

You may not use javascript's Date class methods. */

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY; // 1440 minutes per day


function timeOfDay(deltaMinutes) {
  while (deltaMinutes < 0) {
    deltaMinutes += MINUTES_PER_DAY;
  }

  while (deltaMinutes > MINUTES_PER_DAY) {
    deltaMinutes -= MINUTES_PER_DAY;
  }

  let hour = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minute = deltaMinutes % MINUTES_PER_HOUR;

  return `${String(hour).padStart(2,0)}:${String(minute).padStart(2,0)}`;

}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
