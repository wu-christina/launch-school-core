/* Write a function that takes a grocery list in a two-dimensional array and returns a
one-dimensional array. Each element in the grocery list contains a fruit name and a number
that represents the desired quantity of that fruit. The output array is such that each
fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an
array that contains 3 apples, 1 orange, and 2 bananas. */

function buyFruit(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let quantity = arr[i][1];
    let fruit = arr[i][0];
    
    for (let j = 0; j < quantity; j++) {
      result.push(fruit);
    }
  }
  return result;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
