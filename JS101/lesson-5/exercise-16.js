/* Given the following data structure, write some code that defines an object where
the key is the first item in each subarray, and the value is the second. */

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// for loop method
let obj = {};

for (let i = 0 ; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
}

// forEach method

arr.forEach(subArr => {
  let key = subArr[0];
  let value = subArr[1];

  obj[key] = value;
});
