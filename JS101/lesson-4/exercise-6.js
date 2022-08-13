/* Problem: How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);


Answer: It changes elements in an array to a value, from a start index (default
is 0) to an end index (default is array.length) and returns the modified array.
We can test if its destructive by calling on the original array and see if it
has been mutated.

arr.fill(1, 1, 5) returns [ 1, 1, 1, 1, 1 ]
arr returns [ 1, 1, 1, 1, 1 ]
*/
