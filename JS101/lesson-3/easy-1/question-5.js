// What will the following code output?

console.log(false == '0'); // true;
                          // false gets coerced to 0; non-strict equality coerces '0' to 0
console.log(false === '0'); // false
