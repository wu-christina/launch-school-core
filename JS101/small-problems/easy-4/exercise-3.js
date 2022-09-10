/* Build a program that logs when the user will retire and how many more years the user
has to work until retirement. */

const readline = require('readline-sync');

let age = readline.question("What is your age? ");
let retiredAge = readline.question("At what age would you like to retire? ");

function retirement(age, retiredAge) {
  let currentTime = new Date();
  let currentYear = currentTime.getFullYear()
  let retirementYear = currentYear + (retiredAge - age);

  console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
  console.log(`You have only ${retiredAge - age} years of work to go!`);
}

retirement(age, retiredAge);
