/* Write a function that takes an array as an argument and returns an array that contains two elements,
each of which is an array. Put the first half of the original array elements in the first element of the
return value, and put the second half in the second element. If the original array contains an odd number
of elements, place the middle element in the first half array. */

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half)
  let combined = [firstHalf, secondHalf];

  return combined;

}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
