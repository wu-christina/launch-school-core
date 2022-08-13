/* Build a program that asks the user to enter the length and width of a room
in meters, and then logs the area of the room to the console in both square
meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.
prompt method to collect user input. */

const readline = require('readline-sync');
const SQ_METERS_TO_SQ_FEET = 10.7639;

console.log('Enter the length of the room in meters:');
let lengthOfRoom = readline.question();
lengthOfRoom = Number(lengthOfRoom); // string to number

console.log('Enter the width of the room in meters:');
let widthOfRoom = readline.question();
widthOfRoom = Number(widthOfRoom);

let areaInMeters = lengthOfRoom * widthOfRoom;
let areaInFeet = areaInMeters * SQ_METERS_TO_SQ_FEET;

console.log(`The area of the room is  ${areaInMeters.toFixed(2)} meters (${areaInFeet.toFixed(2)} square feet).`);
