// function greetMorning(name) {
//   const myName = 'tim';

//   console.log(`Good night ${name}, my name is ${myName}`);
// }

// greetMorning('bobo');

function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

function greet(name, cb) {
  const myName = 'tim';
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet('bobo', morning);
greet('jim', afternoon);
