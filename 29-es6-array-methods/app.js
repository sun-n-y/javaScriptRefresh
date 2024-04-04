//

// const friends = Array.of('s', 's', 's');

// console.log(friends);

// const udemy = 'udemy';

// console.log(Array.from(udemy));

// const result = document.querySelector('#result');
// const second = document.querySelector('#second');
// const p = document.querySelectorAll('p');

// let newText = Array.from(p)
//   .map((item) => `<span>${item.textContent}</span>`)
//   .join(' ');

// result.innerHTML = newText;

// second.innerHTML = [...p]
//   .map((item) => `<span>${item.textContent}</span>`)
//   .join(' ');

const people = [
  { id: 1, name: 'kim' },
  { id: 2, name: 'jim' },
  { id: 3, name: 'tim' },
];

const grades = ['A', 'B', 'A', 'B', 'C'];
const goodGrades = ['A', 'B', 'A', 'C'];

//find
const anna = people.find((item) => item.name == 'kim');
console.log(anna);

//findIndex
const timIndex = people.findIndex((item) => item.name == 'tim');
console.log(timIndex);

//every
const allGoodGrades = grades.every((item) => item != 'C');
console.log(allGoodGrades);

const allGoodGrades2 = grades.some((item) => (item = 'B'));
console.log(allGoodGrades2);
