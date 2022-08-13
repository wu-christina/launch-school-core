/* Problem: What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

Answer: The return value is [ undefined, 'bear' ]. Map returns a new array with the
results of its callback function. The conditional in the callback
function evaluates to false for 'ant' and it is not returned. When a function is not
explicitly returned, it returns undefined. The conditional in the callback function evaluates
to true 'bear' so it is returned.
*/
