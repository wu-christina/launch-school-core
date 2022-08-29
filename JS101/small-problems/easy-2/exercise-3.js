/* Create a function that takes two arguments, multiplies them
together, and returns the result. */

// Solution 1
function multiply(num1, num2) {
  return num1 * num2;
}

// Solution 2
const multiply = (num1, num2) => num1 * num2;

console.log(multiply(5, 3) === 15); // logs true
