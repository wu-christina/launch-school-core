/* Problem: What is the callback's return value in the following code? Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

Answer: The callback's return value is 2 for the first element, 4 for the
second element, and 6 for the third element in the array. Since all the return
values in the callback function test returns a truthy value, every returns true.
*/
