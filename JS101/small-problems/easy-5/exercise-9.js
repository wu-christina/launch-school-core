/* Write a function that counts the number of occurrences of each element in a given array. Once counted,
log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !==
"SUV"). */

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  let countObject = {};

  for (let i = 0; i < array.length; i++) {
    if (countObject.hasOwnProperty(array[i])) {
      countObject[array[i]] += 1;
    } else {
      countObject[array[i]] = 1;
    }
  }
  for (const item in countObject) {
    console.log(`${item} => ${countObject[item]}`);
  }
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
