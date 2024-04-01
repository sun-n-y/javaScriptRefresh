// //
// window.addEventListener('DOMContentLoaded', function () {
//   const h1 = this.document.querySelector('h1');
//   h1.style.color = 'blue';
//   console.log('hi');
// });

// window.addEventListener('load', function () {
//   const h1 = this.document.querySelector('h1');
//   h1.style.color = 'blue';
//   console.log('hi');
// });

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click', function () {
  const values = box.getBoundingClientRect();
  console.log(values);
});
