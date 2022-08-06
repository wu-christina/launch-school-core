// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// method 1
numbers.splice(0, numbers.length);

// method 2
numbers.length = 0;

// method 3
while (numbers.length) {
  numbers.pop();
}
