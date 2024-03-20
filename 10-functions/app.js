function hello(name) {
  console.log(`hello ${name}`);
}

hello('mia');
hello('jimmy');
hello('timmy');

//return

const wallHeight = 80;

function calculate(value) {
  console.log('The value is cm is : ' + value * 2.54 + ' cm.');
  return value * 2.54;
}

calculate(9);

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];

console.log(dimensions);

//expressions
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(5, 5);
const secondValue = addValues(7, 7);

console.log(firstValue);
console.log(secondValue);

const add = function (num1, num2) {
  return num1 + num2;
};

const numbersArray = [firstValue, secondValue, add(10, 100)];

console.log(numbersArray);
