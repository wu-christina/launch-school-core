/* Given the following code, what will the final values of a and b
be? Try to answer without running the code. */


let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

/*
a ==> 2
arr[0] += 2 modifiescannot be arr but it does not change a. a is a primitive value and cannot be modified.

b ==> [3, 8]
let arr = [a, b] creates a reference to the original b array so changes made on arr[1][0] would mutate b.
*/
