/* Given the following data structure, sort the array so that the
sub-arrays are ordered based on the sum of the odd numbers that
they contain. */

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// find sum first of odd numbers
// then sort

let sortedArr = arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1).reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1).reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
})

console.log(sortedArr); // [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]
