// //define
// var number = 100;
// //update
// number = 200;
// //redefine
// var number = 'orange';
// console.log(number);

// let amount = 100;
// amount = 50;
// let amount = 1000;

// const amount = 100;
// const amount = 50;

// const lastName = 'timmy';

// const timmy = {
//   firstName: 'jimmy',
//   sayName: () => {
//     console.log(this);
//     console.log(`${this.lastName}`);
//   },
// };

// timmy.sayName();

const fruits = ['orange', 'banana', 'lemon'];
const fruitsO = { one: 'orange', two: 'banana', three: 'lemon' };

const [orange, six, zero] = fruits;
const { one, two, three } = fruitsO;

console.log(orange);
console.log(one);
