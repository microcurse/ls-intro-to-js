function getNumbers (number) {
  let rlSync = require('readline-sync');
  let multiplyMe = rlSync.questionFloat(number);
  return multiplyMe;
}

function multiply (firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

let firstNumber = getNumbers('Enter the first number: ');
let secondNumber = getNumbers('Enter the second number: ');

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);