/* Problem: What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

Answer: The return value is [ undefined, undefined, undefined ] because return
is not explicitly stated and is needed to return a value when curly braces are used.
*/
