/*

[1, 2, 3].map(num => {
  num * num;
});

Problem: The following code differs slightly from the above code. What is
the return value of map in this case? Why?

[1, 2, 3].map(num => num * num);

Answer: The result value is [1, 4, 9]. In a single expression, curly braces and the return keyword can be eliminated. JavaScript uses the computed value as the return value.
*/
