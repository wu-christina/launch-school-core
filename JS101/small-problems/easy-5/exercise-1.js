/* Write a function that takes a floating point number representing an angle
between 0 and 360 degrees and returns a
string representing that angle in degrees, minutes, and seconds. You should
use a degree symbol (˚) to represent
degrees, a single quote (') to represent minutes, and a double quote (") to
represent seconds. There are 60 minutes
in a degree, and 60 seconds in a minute. */

const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(degreesFloat) {
  let degrees = getWholeNumber(degreesFloat);
  let minutes = getDecimalNumber(degreesFloat) * MINUTES_PER_DEGREE;
  let roundedMinutes = Math.floor(minutes);

  let seconds = 0;
  if (minutes % 1 !== 0) {
    seconds = Math.floor(getDecimalNumber(minutes) * SECONDS_PER_MINUTE);
  }

  if (String(roundedMinutes).length === 1) {
    minutes = '0' + String(roundedMinutes);
  } else if (String(roundedMinutes).length === 2) {
    minutes = roundedMinutes;
  } else if (String(seconds).length === 1) {
    seconds = '0' + String(seconds);
  }

  return `${degrees}°${minutes}'${seconds}"`
}

function getWholeNumber(float) {
  let wholeNumber = '';
  for (let i = 0; i < String(float).length; i++) {
    if (String(float)[i] === '.') {
      break;
    } else {
      wholeNumber += String(float)[i];
    }
  }
  return Number(wholeNumber);
}

function getDecimalNumber(float) {
  let decimalNumber = [];

  for (let i = String(float).length - 1; i >= 0; i--) {
    if(!String(float).includes('.')) {
      break;
    } else if (String(float)[i] === '.') {
      decimalNumber.push(String(float)[i]);
      break;
    } else {
      decimalNumber.push(String(float)[i]);
    }
  }
  return Number(decimalNumber.reverse().join(''))
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
