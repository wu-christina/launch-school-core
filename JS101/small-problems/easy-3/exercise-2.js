/* Write a function that will take a short line of text, and write it to the console log
within a box. */

function logInBox(string) {

  let stringLength = string.length;

  console.log(`+-${'-'.repeat(stringLength)}-+`);
  console.log(`| ${' '.repeat(stringLength)} |`);
  console.log(`| ${string} |`);
  console.log(`| ${' '.repeat(stringLength)} |`);
  console.log(`+-${'-'.repeat(stringLength)}-+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
