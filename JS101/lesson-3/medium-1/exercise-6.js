// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false
/* JavaScript does not allow you use strict or non-strict equality
operators on NaN */

// How can you reliably test if a value is NaN?
// isNaN() function
