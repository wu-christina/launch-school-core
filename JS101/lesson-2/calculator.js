const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en'; // can change to 'en' for English or 'es' for Spanish

function prompt(key) {
  let message = messages(LANGUAGE, key);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(lang, message) {
  return MESSAGES[lang][message];
}

prompt('welcome');

while (true) {
  prompt('firstNumber');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('error');
    number1 = readline.question();
  }

  prompt('secondNumber');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('error');
    number2 = readline.question();
  }

  prompt('operationQuestion');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('operationChoices');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is ${output}.`);

  prompt('anotherCalc');
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') {
    break;
  }

}
