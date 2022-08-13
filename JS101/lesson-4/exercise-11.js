/* Problem: Create an object that expresses the frequency with which each
letter occurs in this string:

let statement = "The Flintstones Rock";

Output will look something like:

{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

*/

let statement = "The Flintstones Rock";
let char = statement.split(''); // ['T', 'h', 'e, ' ', 'F', ...]

let charWithoutSpace = char.filter(ele => ele !== ' ');

let result = {};

charWithoutSpace.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});

console.log(result);
